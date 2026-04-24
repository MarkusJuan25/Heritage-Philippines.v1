import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { packages } from "../data/heritage.js";

export default function Dashboard() {
  const { token } = useAuth();
  const [plans, setPlans] = useState([]);
  const [status, setStatus] = useState("Loading your journeys...");

  useEffect(() => {
    let cancelled = false;

    const loadPlans = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";

        const response = await fetch(`${apiBase}/api/planner`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load your plans.");
        }

        if (!cancelled) {
          setPlans(Array.isArray(data) ? data : []);
          setStatus("");
        }
      } catch (error) {
        if (!cancelled) {
          setStatus(error.message || "Unable to load your plans.");
        }
      }
    };

    if (token) {
      loadPlans();
    }

    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="dashboard-profile">
          <div className="dashboard-avatar">M</div>
          <div>
            <p className="eyebrow">Welcome Back</p>
            <h3>Mark John</h3>
          </div>
        </div>

        <nav className="dashboard-menu">
          <a href="#plans">My Plans</a>
          <a href="#packages">Packages</a>
          <a href="#messages">Messages</a>
          <a href="#profile">Profile</a>
        </nav>
      </aside>

      <section className="dashboard-main">
        <section className="dashboard-hero">
          <p className="eyebrow">Dashboard</p>
          <h1>Your saved journeys.</h1>
          <p>
            Review your Heritage Philippines journey requests, compare packages,
            and continue planning your return.
          </p>

          <div className="dashboard-hero__actions">
            <Link className="button button--primary" to="/plan">
              Create New Plan
            </Link>
            <Link className="button button--ghost" to="/packages">
              Browse Packages
            </Link>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-column" id="plans">
            <div className="dashboard-section-title">
              <p className="eyebrow">My Journey</p>
              <h2>Saved Plans</h2>
            </div>

            {status && <p className="form-status">{status}</p>}

            {!status && plans.length === 0 && (
              <article className="dashboard-card">
                <h3>No saved plans yet.</h3>
                <p>Start your first journey request and it will appear here.</p>
                <Link className="button button--primary" to="/plan">
                  Start Planning
                </Link>
              </article>
            )}

            {plans.map((plan) => (
              <article className="dashboard-card" key={plan._id}>
                <p className="eyebrow">{plan.days || "Flexible dates"}</p>
                <h3>{plan.destination}</h3>
                <p>{plan.message || "No message provided."}</p>

                <ul className="detail-list">
                  <li>Budget: {plan.budget || "Not specified"}</li>
                  <li>Companions: {plan.companions || "Not specified"}</li>
                  <li>Interests: {plan.interests || "Not specified"}</li>
                </ul>
              </article>
            ))}
          </div>

          <div className="dashboard-column" id="packages">
            <div className="dashboard-section-title">
              <p className="eyebrow">Recommended</p>
              <h2>Packages</h2>
            </div>

            {packages.map((item) => (
              <article className="dashboard-package" key={item.title}>
                <div>
                  <p className="eyebrow">{item.length}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <strong>{item.price}</strong>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import { packages, experiences } from "../data/heritage.js";

export default function MemberHome() {
  return (
    <main className="member-page">
      <section className="member-hero">
        <div className="member-hero__content">
          <p className="eyebrow">Welcome Back</p>
          <h1>Where do your roots lead next?</h1>
          <p>Discover journeys, explore experiences, and continue your story.</p>

          <div className="member-search">
            <input placeholder="Search destinations, experiences..." />
            <Link to="/plan" className="button button--primary">
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      <section className="member-actions">
        <Link to="/dashboard" className="action-card">
          <h3>My Journey</h3>
          <p>View your saved plans</p>
        </Link>

        <Link to="/plan" className="action-card">
          <h3>Create Plan</h3>
          <p>Customize your journey</p>
        </Link>

        <div className="action-card">
          <h3>Assistant</h3>
          <p>Smart recommendations (soon)</p>
        </div>
      </section>

      <section className="member-section">
        <div className="section-header">
          <h2>Recommended Packages</h2>
          <Link to="/packages">View all</Link>
        </div>

        <div className="member-packages">
          {packages.map((item) => (
            <article className="package-card" key={item.title}>
              <p className="eyebrow">{item.length}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="member-section">
        <div className="section-header">
          <h2>Experiences</h2>
        </div>

        <div className="member-experiences">
          {experiences.map((item) => (
            <article className="experience-card" key={item.id}>
              <p className="eyebrow">{item.place}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="member-cta">
        <h2>Continue your journey</h2>
        <p>Pick up where you left off or start something new.</p>

        <Link to="/dashboard" className="button button--primary">
          Go to My Journey
        </Link>
      </section>
    </main>
  );
}

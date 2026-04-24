import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { image } from "../data/heritage.js";

export default function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Signing in...");

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      login(data.token);
      setStatus("Login successful.");
      navigate("/dashboard");
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <>
      <Hero
        compact
        eyebrow="Member Login"
        title="Return to your journey."
        text="Sign in to save and manage your Heritage Philippines travel plans."
        image={image("plan-your-journey-cta-page/driving-to-your-heritage.jpg")}
      />

      <Section eyebrow="Secure Access" title="Login to continue." className="section--form">
        <form className="journey-form" onSubmit={handleSubmit}>
          <label>
            <span>Email Address</span>
            <input name="email" type="email" value={form.email} onChange={updateField} required />
          </label>

          <label>
            <span>Password</span>
            <input name="password" type="password" value={form.password} onChange={updateField} required />
          </label>

          <button className="button button--primary" type="submit">
            Login
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </Section>
    </>
  );
}

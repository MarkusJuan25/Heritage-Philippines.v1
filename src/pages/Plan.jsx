import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { image } from "../data/heritage.js";

const initialForm = {
  name: "",
  email: "",
  travelDates: "",
  placeOfRoots: "",
  budget: "",
  companions: "",
  interests: "",
  message: "",
};

export default function Plan() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Saving your journey draft..." });

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("heritageToken") || localStorage.getItem("token");
      const headers = { "Content-Type": "application/json" };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${apiBase}/api/planner`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          ...form,
          destination: form.placeOfRoots,
          days: form.travelDates,
        }),
      });

      if (response.status === 401) {
        throw new Error("AUTH_REQUIRED");
      }

      if (!response.ok) {
        throw new Error("Planner request failed");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Your journey request was saved. We will help shape the next step." });
    } catch (error) {
      if (error.message === "AUTH_REQUIRED") {
        setStatus({
          type: "warning",
          message: "Sign in first so your journey request can be saved securely to your account.",
        });
        return;
      }

      setStatus({
        type: "warning",
        message:
          "Your draft is ready, but the local API is not available right now. Start the server to save it permanently.",
      });
    }
  };

  return (
    <>
      <Hero
        compact
        eyebrow="Plan Your Journey"
        title="Begin planning a return shaped around your story."
        text="Tell us where your roots lead, what kind of journey you imagine, and how you hope to reconnect. We will shape the next step with care."
        image={image("plan-your-journey-cta-page/driving-to-your-heritage.jpg")}
      />

      <Section eyebrow="Journey Inquiry" title="Start with what you know. We will listen for what matters." className="section--form">
        <form className="journey-form" onSubmit={handleSubmit}>
          <label>
            <span>Full Name</span>
            <input name="name" value={form.name} onChange={updateField} placeholder="Your full name" required />
          </label>

          <label>
            <span>Email Address</span>
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
          </label>

          <label>
            <span>Travel Dates</span>
            <input name="travelDates" value={form.travelDates} onChange={updateField} placeholder="June 2026, flexible, 5 days..." />
          </label>

          <label>
            <span>Province / Place Of Roots</span>
            <input name="placeOfRoots" value={form.placeOfRoots} onChange={updateField} placeholder="Bohol, Ilocos, Quezon City..." required />
          </label>

          <label>
            <span>Budget Range</span>
            <input name="budget" value={form.budget} onChange={updateField} placeholder="PHP 50,000 - PHP 120,000" />
          </label>

          <label>
            <span>Travel Companions</span>
            <input name="companions" value={form.companions} onChange={updateField} placeholder="Solo, family, parents, grandparents..." />
          </label>

          <label className="span-2">
            <span>Interests / Preferences</span>
            <input name="interests" value={form.interests} onChange={updateField} placeholder="Food, ancestry, festivals, slow travel, local guides..." />
          </label>

          <label className="span-2">
            <span>Message / What this journey means to you</span>
            <textarea name="message" value={form.message} onChange={updateField} rows="5" placeholder="Tell us about the places, family memories, or experiences that matter most." />
          </label>

          <button className="button button--primary" type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending..." : "Submit Journey Inquiry"}
          </button>

          {status.message && <p className={`form-status form-status--${status.type}`}>{status.message}</p>}
        </form>
      </Section>

      <Section eyebrow="Listening First" title="Every plan begins with listening.">
        <article className="content-panel statement-panel">
          <p>
            Whether you already know the places you want to revisit or are just beginning to explore your story, we can help shape a thoughtful, emotionally grounded itinerary.
          </p>
        </article>
      </Section>
    </>
  );
}

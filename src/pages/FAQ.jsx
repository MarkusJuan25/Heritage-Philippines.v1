import { useState } from "react";

const faqs = [
  {
    q: "What is Heritage Philippines?",
    a: "Heritage Philippines helps you reconnect with your roots through curated journeys, cultural experiences, and personalized travel planning.",
  },
  {
    q: "Can I customize my travel plan?",
    a: "Yes. You can create your own journey based on your destination, budget, and interests using our planner.",
  },
  {
    q: "Do you offer ready-made packages?",
    a: "Yes. We provide curated travel packages designed for different experiences such as family homecoming, cultural immersion, and heritage discovery.",
  },
  {
    q: "How do I book a journey?",
    a: "You can either select a package or create a custom plan. Our team will assist you in finalizing your journey.",
  },
  {
    q: "Can I talk to a travel assistant?",
    a: "Yes. We will soon provide an assistant feature to guide you in choosing the best journey for your needs.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use secure authentication and data protection practices to keep your information safe.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <p className="eyebrow">Support</p>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers about planning your journey, packages, and experiences.</p>
      </section>

      <section className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              type="button"
              onClick={() => setActive(active === index ? null : index)}
            >
              {item.q}
              <span>{active === index ? "-" : "+"}</span>
            </button>

            {active === index && (
              <p className="faq-answer">{item.a}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

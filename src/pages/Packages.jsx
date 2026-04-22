import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { image } from "../data/heritage.js";

const packageOptions = [
  {
    title: "Origins Weekend",
    duration: "3 days / 2 nights",
    description: "A focused first return for travelers beginning their heritage story.",
    destinations: "Ancestral town, landscape route, local dining",
    highlights: ["Landscape encounter", "Local guide", "Cultural meal"],
  },
  {
    title: "Family Roots Journey",
    duration: "5 days / 4 nights",
    description: "Designed for reconnecting with ancestral places and family memory.",
    destinations: "Province visit, family route, heritage stop",
    highlights: ["Family mapping", "Province visit", "Storytelling route"],
  },
  {
    title: "Living Culture Route",
    duration: "4 days / 3 nights",
    description: "A participatory itinerary for travelers who want heritage in motion.",
    destinations: "Food, craft, ritual, community setting",
    highlights: ["Rituals", "Cuisine", "Local crafts"],
  },
  {
    title: "Homecoming Signature Escape",
    duration: "6 days / 5 nights",
    description: "A premium curated emotional journey across the full three-act arc.",
    destinations: "Multiple regions, comfort stays, guided design",
    highlights: ["Three-act journey", "Comfort stays", "Private guidance"],
  },
  {
    title: "Reunion Journey",
    duration: "Custom duration",
    description: "A family-centered itinerary designed around shared return and gathering.",
    destinations: "Family locations, reunion venue, meaningful stops",
    highlights: ["Family itinerary", "Reunion planning", "Shared experiences"],
  },
  {
    title: "Diaspora Return Package",
    duration: "Custom schedule",
    description: "Designed for overseas Filipinos seeking identity-centered reconnection.",
    destinations: "Roots research, local culture, reflective route",
    highlights: ["Emotional reconnection", "Identity planning", "Guided reflection"],
  },
  {
    title: "Fully Tailored Homecoming",
    duration: "Personalized package",
    description: "A flexible journey shaped around your roots, pace, and family story.",
    destinations: "Custom route",
    highlights: ["Custom roots research", "Flexible itinerary", "Private guidance"],
  },
];

export default function Packages() {
  return (
    <>
      <Hero
        compact
        eyebrow="Curated Packages"
        title="Curated journeys for every kind of return."
        text="Choose from heritage-led itineraries designed around reconnection, comfort, and meaningful cultural depth."
        image={image("packages-luxury-feel/morning-sunrise.jpg")}
        primary={{ label: "Start Planning", to: "/plan" }}
        secondary={{ label: "Browse Experiences", to: "/experiences" }}
      />

      <Section
        eyebrow="Packages"
        title="Designed to feel personal from the first day."
        intro="Each package is a starting point. We refine destinations, pacing, and emotional focus around the traveler."
      >
        <div className="package-grid">
          {packageOptions.map((item) => (
            <article className="package-card" key={item.title}>
              <div>
                <p className="eyebrow">{item.duration}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <p className="package-destinations">{item.destinations}</p>
              <ul className="detail-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link className="button button--ghost" to="/plan">Request Quote</Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="cta-panel section">
        <p className="eyebrow">Personal Recommendation</p>
        <h2>Not sure where to begin?</h2>
        <p>We can recommend an itinerary based on your roots, schedule, and travel style.</p>
        <div className="cta-actions">
          <Link className="button button--primary" to="/plan">Get A Personalized Recommendation</Link>
        </div>
      </section>
    </>
  );
}

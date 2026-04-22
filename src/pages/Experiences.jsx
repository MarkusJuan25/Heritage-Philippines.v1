import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { FadeInSection, ParallaxSection } from "../components/Cinematic.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { experiences, image } from "../data/heritage.js";

const immersiveExperiences = [
  {
    title: "Rice Terrace Walks",
    text: "Walk through ancestral landscapes where memory and land meet.",
  },
  {
    title: "Ancestral Home Visits",
    text: "Step into family architecture, memory, and regional heritage.",
  },
  {
    title: "Cultural Immersion Meals",
    text: "Experience kamayan, local storytelling, and shared dining traditions.",
  },
  {
    title: "Ritual and Festival Encounters",
    text: "Witness traditions that keep memory alive in public life.",
  },
  {
    title: "Local Guide Story Routes",
    text: "Travel with guides who frame each destination through history, family, and meaning.",
  },
  {
    title: "Craft and Artisan Encounters",
    text: "Meet makers whose work carries local identity into the present.",
  },
];

export default function Experiences() {
  return (
    <>
      <Hero
        compact
        eyebrow="Experiences"
        title="Experience heritage as something lived, not only remembered."
        text="Each experience is designed to bring culture into motion - through place, people, taste, ritual, and story."
        image={image("experiences-destinations/enjoying-the-spot.jpg")}
        primary={{ label: "Browse Packages", to: "/packages" }}
        secondary={{ label: "Plan Your Journey", to: "/plan" }}
      />

      <FadeInSection>
        <Section
          eyebrow="Experience Grid"
          title="Immersive encounters shaped around memory, movement, and belonging."
          intro="These experience types can stand alone or become chapters inside a larger homecoming itinerary."
        >
          <div className="content-grid content-grid--three">
            {immersiveExperiences.map((item) => (
              <article className="content-panel" key={item.title}>
                <span className="panel-marker"></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <ParallaxSection
        eyebrow="Why It Matters"
        title="The right encounter changes what a journey means."
        text="Experiences are not selected for spectacle alone. Each one is chosen for emotional texture - the kind that allows travelers to understand place not as scenery, but as something inherited, lived, and shared."
        image={image("journey-culture-movement/family-cooking.jpg")}
      />

      <FadeInSection>
        <Section eyebrow="Featured Routes" title="Destination-led experiences with real emotional pull.">
          <div className="card-grid card-grid--four">
            {experiences.map((item) => (
              <Card
                key={item.id}
                kicker={item.place}
                title={item.title}
                text={item.text}
                image={item.image}
                to="/plan"
                cta="Plan This"
              />
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <section className="cta-panel section">
          <p className="eyebrow">Shape The Route</p>
          <h2>Choose the encounters that make the story personal.</h2>
          <div className="cta-actions">
            <Link className="button button--primary" to="/packages">Browse Packages</Link>
            <Link className="button button--ghost" to="/plan">Plan Your Journey</Link>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

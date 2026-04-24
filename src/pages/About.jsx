import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { FadeInSection, ParallaxSection } from "../components/Cinematic.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { image } from "../data/heritage.js";

const values = [
  "Meaning over spectacle",
  "Culture with care",
  "Story before itinerary",
  "Hospitality with emotional depth",
  "Belonging through design",
];

const trustCards = [
  {
    title: "Purposeful Planning",
    text: "We balance comfort, story, and local connection so every route feels considered rather than generic.",
    image: image("about-trust-brand/an-executive-meeting.jpg"),
  },
  {
    title: "Warm Hosting",
    text: "Travelers are guided with care before, during, and after the trip so the journey feels supported.",
    image: image("about-trust-brand/staff-greetings.jpg"),
  },
  {
    title: "Trusted Experience",
    text: "The concept brings together travel craft, destination knowledge, and a sensitive approach to family memory.",
    image: image("about-trust-brand/a-happy-tourist.jpg"),
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Heritage Philippines"
        title="We believe travel can do more than move people."
        text="We created Heritage Philippines for travelers who want more than a beautiful itinerary. The most meaningful journeys reconnect identity, memory, family, and place."
        image={image("about-trust-brand/a-group-photo.jpg")}
        primary={{ label: "Meet The Journey", to: "/story" }}
        secondary={{ label: "Plan Your Return", to: "/plan" }}
      />

      <FadeInSection>
        <Section eyebrow="Mission" title="Why Heritage Philippines exists.">
          <article className="content-panel statement-panel">
            <p>
              Heritage Philippines is for travelers who want a return shaped by listening, not speed. It treats travel as a way to understand family memory, living culture, and the emotional geography of belonging.
            </p>
          </article>
        </Section>
      </FadeInSection>

      <ParallaxSection
        eyebrow="Founder Story"
        title="The story behind the journey."
        text="The idea begins with heritage, migration, family memory, and the desire to create a different kind of return - one where planning feels personal before the trip even begins."
        image={image("about-trust-brand/staff-greetings.jpg")}
      />

      <FadeInSection>
        <Section eyebrow="Values" title="The principles shaping every route.">
          <div className="content-grid content-grid--five">
            {values.map((value) => (
              <article className="content-panel content-panel--compact" key={value}>
                <span className="panel-marker"></span>
                <p>{value}</p>
              </article>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section eyebrow="Trust And Brand" title="Designed for meaningful returns.">
          <div className="card-grid card-grid--three">
            {trustCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <section className="cta-panel section">
          <p className="eyebrow">Travel With Care</p>
          <h2>Let the journey feel intentional from the first conversation.</h2>
          <div className="cta-actions">
            <Link className="button button--primary" to="/story">Meet The Journey</Link>
            <Link className="button button--ghost" to="/plan">Plan Your Return</Link>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

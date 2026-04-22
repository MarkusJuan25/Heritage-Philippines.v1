import { Link } from "react-router-dom";
import { FadeInSection, ParallaxSection } from "../components/Cinematic.jsx";
import Hero from "../components/Hero.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Section from "../components/Section.jsx";
import { image, stageActs } from "../data/heritage.js";

const identityTensions = [
  "Lost roots carried as questions rather than answers",
  "Disconnected family narratives passed down in fragments",
  "Familiar culture felt from a distance",
  "A quiet longing to understand where belonging begins",
];

const emotionalLayers = [
  {
    kicker: "Memory",
    title: "Names Become Places",
    text: "Provinces once spoken of at family tables begin to feel tangible, textured, and emotionally real.",
  },
  {
    kicker: "Movement",
    title: "Culture Becomes Lived",
    text: "Through immersion, rituals and traditions are no longer observed from a distance, but experienced from within.",
  },
  {
    kicker: "Belonging",
    title: "Home Changes Shape",
    text: "The traveler leaves with more than photos - they leave with a new relationship to family, place, and self.",
  },
];

const splitImages = [
  image("roots-origins/family.jpg"),
  image("journey-culture-movement/family-cooking.jpg"),
  image("homecoming-emotion/golden-hour.jpg"),
];

export default function Story() {
  return (
    <>
      <Hero
        compact
        eyebrow="The Narrative Arc"
        title="Your story did not begin here. But it can continue here."
        text="Heritage Homecoming is a return shaped by memory, ancestry, movement, and belonging - not as tourism alone, but as a way of finding your place in a living story."
        image={image("heritage-fb-banner.jpg")}
        primary={{ label: "Plan Your Journey", to: "/plan" }}
        secondary={{ label: "View Experiences", to: "/experiences" }}
      />

      <FadeInSection>
        <Section
          eyebrow="The Distance"
          title="Many travelers inherit a place before they ever truly know it."
          intro="For many Filipinos, especially those raised far from ancestral ground, identity can feel partial - carried through names, stories, fragments, and rituals, but rarely lived in full."
        >
          <div className="content-grid content-grid--four">
            {identityTensions.map((item) => (
              <article className="content-panel content-panel--compact" key={item}>
                <span className="panel-marker"></span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <ParallaxSection
        eyebrow="Why It Exists"
        title="This is not only a trip. It is a return."
        text="Heritage Homecoming exists to transform travel into reconnection. The goal is not simply to see destinations, but to encounter memory through landscape, tradition, food, family, and the quiet emotional moments that make identity feel real again."
        image={image("home-hero-story-preview/misty-mountain.jpg")}
      />

      <FadeInSection>
        <Section
          eyebrow="Three Acts"
          title="The journey moves from memory, to movement, to belonging."
          intro="Every act has a different emotional purpose, giving the traveler a clear path from origin to recognition."
        >
          <div className="timeline">
            {stageActs.map((act, index) => (
              <article className="timeline-item" key={act.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">{act.kicker}</p>
                  <h2>{act.title}</h2>
                  <p>{act.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section eyebrow="Emotional Progression" title="The return becomes personal when place, culture, and family begin to speak together.">
          <div className="split-panel">
            <div>
              <h3>What this story makes possible</h3>
              <ul className="check-list">
                <li>Memory becomes something you can walk through, taste, and name.</li>
                <li>Culture becomes lived through meals, rituals, craft, and conversation.</li>
                <li>Belonging becomes a relationship to family, place, and the self you carry forward.</li>
              </ul>
            </div>

            <div className="image-stack">
              {splitImages.map((src) => (
                <SafeImage key={src} src={src} alt="" loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <section className="quote-panel container">
          <blockquote>
            I thought I was booking a heritage trip. What I found instead was a way to understand my grandparents with new tenderness.
          </blockquote>
          <figcaption>Elena R., overseas Filipino traveler</figcaption>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section">
          <div className="card-grid card-grid--three">
            {emotionalLayers.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-card__body">
                  <span className="card-kicker">{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="break-panel container">
          <div className="break-panel__grid">
            <div className="break-panel__copy">
              <p className="eyebrow">Begin The Return</p>
              <h2>Start your return home.</h2>
              <p>
                Whether you are beginning with curiosity or returning with a deeply personal intention, the next step can be shaped around your own story.
              </p>
            </div>

            <div className="break-panel__actions">
              <Link className="button button--primary" to="/plan">Plan Your Journey</Link>
              <Link className="button button--ghost" to="/experiences">View Experiences</Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

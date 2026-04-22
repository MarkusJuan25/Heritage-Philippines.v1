import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { FadeInSection } from "../components/Cinematic.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { image, stories } from "../data/heritage.js";

const storyCategories = [
  "Family reconnection",
  "First-time return to province",
  "Food and memory",
  "Traveling with parents or grandparents",
  "Rediscovering language and belonging",
];

export default function Stories() {
  return (
    <>
      <Hero
        compact
        eyebrow="Traveler Stories"
        title="Stories of return, reunion, and rediscovery."
        text="Every journey changes something - not only in the places visited, but in the way home is understood."
        image={image("stories-editorial-style/whats-the-plan.jpg")}
        primary={{ label: "Start Your Story", to: "/plan" }}
        secondary={{ label: "Browse Gallery", to: "/gallery" }}
      />

      <FadeInSection>
        <Section eyebrow="Featured Story" title="Finding my grandmother's village changed everything.">
          <article className="featured-story">
            <p className="eyebrow">Memory, Migration, Tenderness</p>
            <p>
              What began as curiosity became a deeper understanding of memory, migration, and family tenderness.
              The trip did not answer every question, but it changed the way the traveler carried the story forward.
            </p>
          </article>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section
          eyebrow="Story Categories"
          title="Human stories give the journey its pulse."
          intro="These themes help travelers imagine the emotional shape their own return might take."
        >
          <div className="chip-grid">
            {storyCategories.map((category) => (
              <span className="story-chip" key={category}>{category}</span>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section eyebrow="Stories" title="Small moments, lasting meaning.">
          <div className="card-grid card-grid--three">
            {stories.map((story) => (
              <Card key={story.title} {...story} to="/plan" cta="Start A Similar Journey" />
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <section className="reflection-panel section">
          <div>
            <p className="eyebrow">Before</p>
            <h2>I thought I was traveling to see where my family came from.</h2>
          </div>
          <div>
            <p className="eyebrow">After</p>
            <h2>I realized I was learning how to carry their story differently.</h2>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="cta-panel section">
          <p className="eyebrow">Begin Your Chapter</p>
          <h2>Let the next story be yours.</h2>
          <div className="cta-actions">
            <Link className="button button--primary" to="/plan">Start Your Story</Link>
            <Link className="button button--ghost" to="/plan">Plan A Homecoming</Link>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

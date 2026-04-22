import Card from "../components/Card.jsx";
import { FadeInSection, ParallaxSection } from "../components/Cinematic.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import Stage from "../components/Stage.jsx";
import { experiences, homeHighlights, image, stageActs } from "../data/heritage.js";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Heritage Experience"
        hook="Every journey begins somewhere..."
        title="Where your story begins"
        text="Reconnect with identity, movement, and belonging through a journey designed around roots, living culture, and a meaningful return home across the Philippines."
        image={image("banner-heritage-optimized.jpg")}
        primary={{ label: "Explore Story", to: "/story" }}
        secondary={{ label: "Plan Journey", to: "/plan" }}
      >
        <Stage />
      </Hero>

      <ParallaxSection
        eyebrow="Cinematic Landscape"
        title="The landscape moves with the memory."
        text="A heritage journey should feel layered: land, family, ritual, and return moving together with quiet momentum."
        image={image("home-hero-story-preview/misty-mountain.jpg")}
      />

      <FadeInSection>
        <Section
          eyebrow="Story Preview Cards"
          title="Enter through roots, journey, or homecoming."
          intro="Each card opens a different emotional doorway into the full return."
        >
          <div className="card-grid card-grid--three">
            {stageActs.map((act) => (
              <Card
                key={act.title}
                kicker={act.kicker}
                title={act.title}
                text={act.description}
                image={act.image}
                to={act.to}
                cta={act.cta}
              />
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section eyebrow="Why This Matters" title="Heritage travel makes memory tangible.">
          <div className="value-grid">
            {homeHighlights.map((item) => (
              <article className="value-card" key={item.title}>
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section
          eyebrow="Featured Experiences"
          title="Destination-led experiences with real emotional pull."
          intro="These curated previews show how story, setting, and activity come together in a meaningful itinerary."
        >
          <div className="card-grid card-grid--four">
            {experiences.map((item) => (
              <Card
                key={item.id}
                kicker={item.place}
                title={item.title}
                text={item.text}
                image={item.image}
                to="/experiences"
                cta="View Experience"
              />
            ))}
          </div>
        </Section>
      </FadeInSection>
    </>
  );
}

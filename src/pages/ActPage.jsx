import Hero from "../components/Hero.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Section from "../components/Section.jsx";

export default function ActPage({ page, next }) {
  return (
    <>
      <Hero
        compact
        eyebrow={page.eyebrow}
        title={page.title}
        text={page.summary}
        image={page.heroImage}
        primary={next}
        secondary={{ label: "Plan This Journey", to: "/plan" }}
      />

      <Section eyebrow="Experience Notes" title={page.quote} className="story-block focus">
        <div className="split-panel focus">
          <div>
            <h3 className="reveal">What this act includes</h3>
            <ul className="check-list">
              {page.highlights.map((highlight) => (
                <li className="reveal" key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="image-stack">
            {page.gallery.map((src) => (
              <SafeImage className="parallax" key={src} src={src} alt="" loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

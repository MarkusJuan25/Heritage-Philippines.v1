import Hero from "../components/Hero.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Section from "../components/Section.jsx";
import { galleryImages, image } from "../data/heritage.js";

const galleryCategories = [
  "Landscapes",
  "Families",
  "Food & Ritual",
  "Culture in Motion",
  "Reunion Moments",
  "Quiet Details",
];

export default function Gallery() {
  return (
    <>
      <Hero
        compact
        eyebrow="Visual Impact"
        title="Moments that feel like memory returning."
        text="Browse the textures of the Heritage Homecoming experience, from landscapes and weaving to shared meals and warm arrivals."
        image={image("gallery-visual-impact/palmtrees.jpg")}
        primary={{ label: "Plan Journey", to: "/plan" }}
        secondary={{ label: "View Stories", to: "/stories" }}
      />

      <Section
        eyebrow="Gallery"
        title="Images that carry the feeling of return."
        intro="The gallery is designed like an editorial memory board: large landscapes, quiet details, family warmth, and cultural motion."
      >
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <figure className={item.size ? `gallery-item gallery-item--${item.size}` : "gallery-item"} key={item.src}>
              <SafeImage src={item.src} alt={item.alt} loading="lazy" decoding="async" collapseParent />
            </figure>
          ))}
        </div>
      </Section>

      <Section eyebrow="Future Filters" title="A visual system ready for video and categories.">
        <div className="chip-grid">
          {galleryCategories.map((category) => (
            <span className="story-chip" key={category}>{category}</span>
          ))}
        </div>
        <div className="content-panel future-panel">
          <p>
            Future upgrades can add autoplay muted video reels, lightbox viewing, and filtered gallery tabs without changing the emotional direction of the page.
          </p>
        </div>
      </Section>
    </>
  );
}

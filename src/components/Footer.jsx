import { image, partnerLogos } from "../data/heritage.js";
import SafeImage from "./SafeImage.jsx";

const socialIcons = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/search/top?q=High%20Light%20Tours%20Philippines" },
  { label: "Messenger", icon: "messenger", href: "mailto:highlight@highlighttours.com.ph" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/explore/search/keyword/?q=High%20Light%20Tours%20Philippines" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/channel/UC2BqiZfX__kMaqyPbfBOW7g/videos" },
  { label: "X", icon: "x", href: "https://x.com/search?q=High%20Light%20Tours%20Philippines&src=typed_query" },
];

function SocialIcon({ icon }) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.12 8.02h2.2V4.34c-.38-.05-1.7-.16-3.22-.16-3.2 0-5.38 1.94-5.38 5.5v3.08H4.2v4.12h3.52V24h4.32v-7.12h3.4l.54-4.12h-3.94v-2.68c0-1.18.32-2.06 2.08-2.06Z" />
      </svg>
    );
  }

  if (icon === "messenger") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 3.8c-5.05 0-9 3.55-9 8.12 0 2.6 1.28 4.9 3.3 6.39V21l3.02-1.66c.84.22 1.74.34 2.68.34 5.05 0 9-3.55 9-8.12S17.05 3.8 12 3.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m7.35 13.92 3.02-3.18 2.32 2.42 3.96-3.92-3.06 4.96-2.38-2.42-3.86 2.14Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.9" cy="7.2" r="1.1" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.4" y="6.8" width="17.2" height="10.4" rx="3.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m10.3 9.45 5.05 2.55-5.05 2.55Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.2 4.7h3.42l10.18 14.6h-3.42L5.2 4.7Z" />
      <path d="M5.1 19.3 18.35 4.7h1.65L6.75 19.3H5.1Z" />
    </svg>
  );
}

export default function Footer() {
  const [highlightLogo, ...accreditationLogos] = partnerLogos;

  return (
    <footer className="site-footer footer-section">
      <div className="footer-card">
        <div className="footer-col footer-col--partner">
          <p className="eyebrow footer-partner-heading">Affiliations & Accreditations</p>

          <div className="footer-partner-logos" aria-label="Affiliations and accreditations">
            {highlightLogo && (
              <SafeImage
                className="footer-partner-logo footer-partner-logo--highlight"
                src={highlightLogo.src}
                alt={highlightLogo.alt}
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="footer-accreditation-logos">
              {accreditationLogos.map((logo) => (
                <SafeImage
                  className="footer-partner-logo"
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col footer-col--address">
          <p className="eyebrow">Address</p>
          <p>Unit 603, 6th Floor</p>
          <p>West Insula Condominium</p>
          <p>135 West Avenue</p>
          <p>Quezon City, Philippines</p>
        </div>

        <div className="footer-col footer-col--contact">
          <p className="eyebrow">Contact</p>
          <a href="tel:+63283733212">+63 (2) 8373-3212</a>
          <a href="tel:+63283733305">+63 (2) 8373-3305</a>
          <a href="mailto:highlight@highlighttours.com.ph">highlight@highlighttours.com.ph</a>

          <div className="footer-contact-logo">
            <div className="footer-brand-row">
              <div className="footer-socials" aria-label="Social media">
                {socialIcons.map((item) => (
                  <a
                    className="footer-social-icon"
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    title={item.label}
                    aria-label={item.label}
                  >
                    <SocialIcon icon={item.icon} />
                  </a>
                ))}
              </div>

              <SafeImage
                className="footer-logo footer-logo--heritage"
                src={image("heritage-logo.png")}
                alt="Heritage Homecoming"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

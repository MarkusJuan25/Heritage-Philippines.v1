import { Link } from "react-router-dom";
import { image } from "../data/heritage.js";
import SafeImage from "./SafeImage.jsx";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Story", to: "/story" },
  { label: "Experiences", to: "/experiences" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Plan", to: "/plan" },
];

const services = [
  "Ancestral Discovery",
  "Family Roots Journey",
  "Living Culture Route",
  "Reunion Journey",
  "Tailored Homecoming",
];

function SocialIcon({ icon }) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.12 8.02h2.2V4.34c-.38-.05-1.7-.16-3.22-.16-3.2 0-5.38 1.94-5.38 5.5v3.08H4.2v4.12h3.52V24h4.32v-7.12h3.4l.54-4.12h-3.94v-2.68c0-1.18.32-2.06 2.08-2.06Z" />
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

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.4" y="6.8" width="17.2" height="10.4" rx="3.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m10.3 9.45 5.05 2.55-5.05 2.55Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer footer-section footer-flat">
      <div className="footer-main">
        <div className="footer-brand">
          <SafeImage
            className="footer-brand__logo"
            src={image("heritage-logo.png")}
            alt="Heritage Philippines"
          />

          <p className="footer-brand__tag">
            Meaningful journeys through roots, culture, and belonging.
          </p>

          <div className="footer-socials" aria-label="Social links">
            <a
              className="footer-social-icon"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon icon="facebook" />
            </a>

            <a
              className="footer-social-icon"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <SocialIcon icon="instagram" />
            </a>

            <a
              className="footer-social-icon"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <SocialIcon icon="youtube" />
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <p className="footer-title">Quick Links</p>
          <div className="footer-links-list">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-links-col">
          <p className="footer-title">Services</p>
          <div className="footer-links-list">
            {services.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="footer-contact-col">
          <p className="footer-title">Contact Info</p>
          <div className="footer-contact-list">
            <p>Unit 603, 6th Floor, West Insula Condominium</p>
            <p>135 West Avenue, Quezon City 1105 Metro Manila, Philippines</p>
            <p>+63 (2) 8373-3212 | +63 (2) 8373-3305</p>
            <p>Viber / WhatsApp: +63 931 007 6374</p>
            <p>karen@heritagephilippines.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Heritage Philippines. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

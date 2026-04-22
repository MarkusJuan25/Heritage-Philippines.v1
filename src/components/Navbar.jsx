import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { image, navLinks } from "../data/heritage.js";
import SafeImage from "./SafeImage.jsx";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    setOpen(false);
    setVisible(true);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const current = Math.max(window.scrollY, 0);
      const delta = current - lastScroll.current;

      setScrolled(current > 24);

      if (current <= 24) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastScroll.current = current;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topbarClass = [
    "topbar",
    visible || open ? "topbar--visible" : "topbar--hidden",
    scrolled ? "topbar--scrolled" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={topbarClass}>
      <div className="nav-container">
        <Link className="brand nav-left" to="/" onClick={() => setOpen(false)} aria-label="Heritage Homecoming home">
          <span className="brand__mark">
            <SafeImage src={image("heritage-logo.png")} alt="" />
          </span>
          <span className="brand__copy">
            <strong>Heritage Homecoming</strong>
            <span>Reconnect with your roots</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
          <b className="sr-only">Toggle navigation</b>
        </button>

        <nav id="primary-navigation" className={open ? "nav-links nav-right is-open" : "nav-links nav-right"}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { image } from "../data/heritage.js";
import SafeImage from "./SafeImage.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isPrivate =
    location.pathname.startsWith("/member") || location.pathname.startsWith("/dashboard");

  useEffect(() => {
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setProfileOpen(false);

    if (profileOpen) {
      window.addEventListener("click", handleClick);
    }

    return () => window.removeEventListener("click", handleClick);
  }, [profileOpen]);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/");
  };

  const topbarClass = ["topbar", "topbar--visible", scrolled ? "topbar--scrolled" : ""]
    .filter(Boolean)
    .join(" ");

  const navLinkClassName = ({ isActive }) => (isActive ? "nav-link is-active" : "nav-link");

  return (
    <header className={topbarClass}>
      <div className="nav-container">
        <Link className="brand nav-left" to={isLoggedIn ? "/member" : "/"}>
          <SafeImage
            className="brand__logo"
            src={image("heritage-logo.png")}
            alt="Heritage Philippines"
          />
          <span className="brand__copy">
            <strong>Heritage Philippines</strong>
          </span>
        </Link>

        {!isPrivate && (
          <nav className="nav-links nav-right">
            <NavLink className={navLinkClassName} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClassName} to="/story">
              Story
            </NavLink>
            <NavLink className={navLinkClassName} to="/experiences">
              Experiences
            </NavLink>
            <NavLink className={navLinkClassName} to="/about">
              About
            </NavLink>
            <NavLink className={navLinkClassName} to="/plan">
              Plan
            </NavLink>
          </nav>
        )}

        <div className="profile-menu">
          {!isLoggedIn ? (
            <button
              className="button button--primary"
              type="button"
              onClick={() => window.dispatchEvent(new Event("openLogin"))}
            >
              Login
            </button>
          ) : (
            <>
              <button
                className="profile-trigger"
                type="button"
                aria-expanded={profileOpen}
                aria-label="Open profile menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setProfileOpen(!profileOpen);
                }}
              >
                <span className="profile-avatar">M</span>
              </button>

              {profileOpen && (
                <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
                  <NavLink to="/member">Member Home</NavLink>
                  <NavLink to="/dashboard">My Journey</NavLink>
                  <NavLink to="/plan">Create Plan</NavLink>
                  <NavLink to="/packages">Packages</NavLink>
                  <NavLink to="/faq">FAQ</NavLink>
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { syncLenisWithScrollTrigger } from "../utils/scrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ eyebrow, hook, title, text, image, primary, secondary, children, compact = false }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!heroRef.current || reduceMotion) {
      return undefined;
    }

    syncLenisWithScrollTrigger();

    const ctx = gsap.context(() => {
      const titleEl = heroRef.current.querySelector(".hero-title");
      const subEl = heroRef.current.querySelector(".hero-sub");
      const buttonEls = heroRef.current.querySelectorAll(".hero__actions .button");
      const sideEl = heroRef.current.querySelector(".hero__side");
      const cinemaEl = heroRef.current.querySelector(".hero__cinema");
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (titleEl) {
        timeline.fromTo(titleEl, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 });
      }

      if (subEl) {
        timeline.fromTo(subEl, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, "-=0.82");
      }

      if (buttonEls.length > 0) {
        timeline.fromTo(
          buttonEls,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          "-=0.7"
        );
      }

      if (sideEl) {
        timeline.fromTo(
          sideEl,
          { y: 54, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          "-=0.92"
        );
      }

      if (cinemaEl) {
        gsap.to(cinemaEl, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={compact ? "hero hero--compact" : "hero"} style={{ "--hero-image": `url("${image}")` }}>
      <div className="hero__cinema" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {hook && <p className="hero__hook">{hook}</p>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero__lede hero-sub">{text}</p>

          {(primary || secondary) && (
            <div className="hero__actions">
              {primary && <Link className="button button--primary" to={primary.to}>{primary.label}</Link>}
              {secondary && <Link className="button button--secondary" to={secondary.to}>{secondary.label}</Link>}
            </div>
          )}
        </div>

        {children && <div className="hero__side">{children}</div>}
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { syncLenisWithScrollTrigger } from "../utils/scrollTrigger.js";
import SafeImage from "./SafeImage.jsx";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxSection({
  eyebrow = "Cinematic Detour",
  title = "Heritage becomes something you can feel.",
  text = "A slower visual beat gives the page depth, letting the landscape move with the story instead of sitting still.",
  image,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!sectionRef.current || reduceMotion) {
      return undefined;
    }

    syncLenisWithScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.to(".parallax-img", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".parallax-copy > *",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="parallax-section">
      <SafeImage className="parallax-img" src={image} alt="" loading="lazy" decoding="async" />
      <div className="parallax-scrim" aria-hidden="true"></div>
      <div className="parallax-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function FadeInSection({ children, className = "" }) {
  const classes = ["cinematic-fade", "focus", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

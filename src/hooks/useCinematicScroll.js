import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { syncLenisWithScrollTrigger } from "../utils/scrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export default function useCinematicScroll() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
      return undefined;
    }

    syncLenisWithScrollTrigger();

    let cleanup = () => {};
    const frame = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              onStart: () => el.classList.add("active"),
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        gsap.utils.toArray(".focus").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.96, opacity: 0.8 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true,
              },
            }
          );
        });

        gsap.utils.toArray(".parallax").forEach((el) => {
          const trigger = el.closest(".parallax-section, .hero, .image-stack") || el;

          gsap.to(el, {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, document.body);

      ScrollTrigger.refresh();
      cleanup = () => ctx.revert();
    });

    return () => {
      cancelAnimationFrame(frame);
      cleanup();
    };
  }, [location.pathname]);
}

import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisSynced = false;

export function syncLenisWithScrollTrigger() {
  if (lenisSynced) {
    return;
  }

  requestAnimationFrame(() => {
    if (window.lenis?.on) {
      window.lenis.on("scroll", ScrollTrigger.update);
      lenisSynced = true;
    }

    ScrollTrigger.refresh();
  });
}

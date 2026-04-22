import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import useCinematicScroll from "./hooks/useCinematicScroll.js";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Roots from "./pages/Roots.jsx";
import Journey from "./pages/Journey.jsx";
import Homecoming from "./pages/Homecoming.jsx";
import Experiences from "./pages/Experiences.jsx";
import Packages from "./pages/Packages.jsx";
import Stories from "./pages/Stories.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Plan from "./pages/Plan.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

function PageWrapper({ children }) {
  const location = useLocation();
  useCinematicScroll();

  return <div key={location.pathname} className="page-transition">{children}</div>;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true"></div>;
}

function NotFound() {
  return (
    <section className="page page--center">
      <p className="eyebrow">Lost Route</p>
      <h1>That path is not part of the journey.</h1>
      <p>Use the navigation above to return.</p>
    </section>
  );
}

function AppShell() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/story" element={<PageWrapper><Story /></PageWrapper>} />
          <Route path="/roots" element={<PageWrapper><Roots /></PageWrapper>} />
          <Route path="/journey" element={<PageWrapper><Journey /></PageWrapper>} />
          <Route path="/homecoming" element={<PageWrapper><Homecoming /></PageWrapper>} />
          <Route path="/experiences" element={<PageWrapper><Experiences /></PageWrapper>} />
          <Route path="/packages" element={<PageWrapper><Packages /></PageWrapper>} />
          <Route path="/stories" element={<PageWrapper><Stories /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/plan" element={<PageWrapper><Plan /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

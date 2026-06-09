import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-cyber-bg text-cyber-on-surface font-sans selection:bg-cyber-primary selection:text-cyber-on-primary">
          {/* Dynamic Navigation HUD */}
          <Navbar onContactClick={handleContactScroll} />

          {/* Main Sections */}
          <main className="pt-20 space-y-4 lg:space-y-12">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <ResumeDownload />
            <Contact />
          </main>

          {/* Footer Segment */}
          <Footer />
        </div>
      )}
    </>
  );
}



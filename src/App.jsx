import { useState, useEffect } from "react";
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

  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
        <div className="min-h-screen bg-white text-black dark:bg-cyber-bg dark:text-cyber-on-surface font-sans selection:bg-cyber-primary selection:text-cyber-on-primary transition-colors duration-500">

          <Navbar
            onContactClick={handleContactScroll}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

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

          <Footer />
        </div>
      )}
    </>
  );
}
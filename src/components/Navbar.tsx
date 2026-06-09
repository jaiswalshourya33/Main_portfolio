import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldAlert, Cpu } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link calculation
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-primary/15 shadow-[0_4px_30px_rgba(168,232,255,0.03)]"
          : "h-20 bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo/Identity */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary transition-all duration-300 shadow-[0_0_10px_rgba(168,232,255,0.15)]">
            <Cpu className="w-4 h-4 text-cyber-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-cyber-primary">
            SJ<span className="text-white">.DEV</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-350 relative py-1 ${
                activeSection === link.href
                  ? "text-cyber-primary text-glow font-semibold"
                  : "text-cyber-on-variant hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-primary rounded-full shadow-[0_0_8px_rgba(168,232,255,0.7)]"
                  transition={{ type: "smooth", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onContactClick}
            className="relative px-5 py-2.5 rounded-lg border border-cyber-primary/30 text-cyber-primary bg-cyber-primary/5 font-display text-xs font-semibold tracking-wider hover:bg-cyber-primary hover:text-cyber-on-primary transition-all duration-300 overflow-hidden group shadow-[0_0_15px_rgba(168,232,255,0.05)]"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[scan_1.5s_infinite]" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:border-cyber-primary hover:text-cyber-primary transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-cyber-primary/10 bg-cyber-bg/95 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display text-sm font-semibold tracking-widest uppercase transition-colors py-2 border-b border-white/5 last:border-none ${
                    activeSection === link.href
                      ? "text-cyber-primary font-bold"
                      : "text-cyber-on-variant"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full mt-4 bg-cyber-primary text-cyber-on-primary py-3 px-4 rounded-lg font-display text-xs font-bold tracking-widest text-center hover:shadow-[0_0_15px_rgba(168,232,255,0.5)] transition-shadow duration-300"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

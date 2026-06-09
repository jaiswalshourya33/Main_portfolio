import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Code, Cpu } from "lucide-react";
import { developerName, developerTitle, developerIntro, avatarImageUrl } from "../data";

export default function Hero() {
  return (
    <section className="min-h-[85vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 lg:w-96 lg:h-96 bg-cyber-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 lg:w-96 lg:h-96 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Left: Dynamic content details */}
      <div className="flex-1 z-10 space-y-6 text-left lg:pr-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-primary/10 border border-cyber-primary/25 rounded-full"
        >
          <Cpu className="w-3.5 h-3.5 text-cyber-primary animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-cyber-primary uppercase">
            System Online: Digital Realm Activated
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary filter drop-shadow-[0_0_15px_rgba(168,232,255,0.25)]">
            {developerName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-lg sm:text-xl text-cyber-on-variant relative pl-4 border-l-2 border-cyber-primary/50"
        >
          {developerTitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl font-sans text-base sm:text-lg text-cyber-on-variant/80 leading-relaxed"
        >
          {developerIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-lg bg-cyber-primary text-cyber-on-primary font-display text-xs font-bold tracking-widest hover:shadow-[0_0_25px_rgba(168,232,255,0.45)] transition-all duration-300 flex items-center gap-2 group active:scale-95"
          >
            VIEW PROJECTS 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-lg border border-cyber-primary/40 text-cyber-primary bg-transparent font-display text-xs font-bold tracking-widest hover:bg-cyber-primary/10 transition-all duration-300 flex items-center gap-2 active:scale-95"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Hero Right: Holographic Floating Image */}
      <div className="flex-1 mt-12 lg:mt-0 relative flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Ambient Cyber Light Frame */}
          <div className="absolute inset-0 bg-cyber-primary/20 blur-3xl rounded-full scale-95 opacity-55 animate-[pulse_6s_infinite]" />
          
          {/* Glass Outer Border with tilting effects simulated via Framer Motion hover */}
          <motion.div
            whileHover={{ y: -8, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 glass-panel p-3 rounded-[2.5rem] border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.7)]"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-cyber-lowest aspect-square w-[280px] sm:w-[360px] lg:w-[410px]">
              <img
                src={avatarImageUrl}
                alt="Shourya Jaiswal futuristic avatar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent opacity-80" />
            </div>

            {/* Display overlay code panel - custom aesthetic HUD HUD */}
            <div className="absolute -top-4 -right-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 border-cyber-primary/30 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
              <Terminal className="w-4 h-4 text-cyber-primary" />
              <span className="font-mono text-[10px] uppercase font-semibold text-cyber-primary select-none tracking-widest">
                Full_Stack_Dev
              </span>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2.5 rounded-xl flex items-center gap-2 border-cyber-secondary/30 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
              <Code className="w-4 h-4 text-cyber-secondary" />
              <span className="font-mono text-[10px] uppercase font-semibold text-cyber-secondary select-none tracking-widest">
                NodeJS // React
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { FolderGit2, Blocks, Flame, CalendarClock } from "lucide-react";
import { aboutParagraphs, stats } from "../data";

export default function About() {
  const getIcon = (label: string) => {
    if (label.includes("Projects")) return <FolderGit2 className="w-5 h-5 text-cyber-primary" />;
    if (label.includes("Stack")) return <Blocks className="w-5 h-5 text-cyber-secondary" />;
    return <Flame className="w-5 h-5 text-cyber-tertiary" />;
  };

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Background glowing line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-[300px] bg-gradient-to-b from-cyber-primary/10 to-transparent pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Info panel */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-sm font-semibold tracking-widest text-cyber-primary">
              [01_INITIALIZE_MEM]
            </span>
            <div className="w-8 h-[1px] bg-cyber-primary/30" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            About Me
          </h2>

          <div className="space-y-6 font-sans text-base sm:text-lg text-cyber-on-variant/80 leading-relaxed">
            {aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Micro gaming details log */}
          <div className="p-4 rounded-xl bg-cyber-lowest border border-white/5 font-mono text-xs text-cyber-on-variant/50 space-y-1 select-none">
            <div className="flex items-center gap-2">
              <span className="text-cyber-primary">&gt;</span>
              <span>npm run study-patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span>
              <span>Loaded core architecture modules...</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <CalendarClock className="w-3.5 h-3.5 text-cyber-secondary" />
              <span>Academic Period: 2021-2025 (ABES Engineering)</span>
            </div>
          </div>
        </div>

        {/* Stats Grid panel */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main big stat card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-2 glass-panel p-6 rounded-2xl relative overflow-hidden group transition-all duration-300 border-white/10 hover:border-cyber-primary/40 shadow-lg"
          >
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyber-primary/5 rounded-full blur-2xl group-hover:bg-cyber-primary/10 transition-colors" />
            <div className="flex items-start justify-between">
              <div>
                <span className="font-display font-black text-5xl sm:text-6xl text-cyber-primary tracking-tight block">
                  {stats[0].value}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold text-cyber-on-variant mt-2 block">
                  {stats[0].label}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-cyber-primary/10 border border-cyber-primary/20">
                {getIcon(stats[0].label)}
              </div>
            </div>
            <p className="font-sans text-xs text-cyber-on-variant/60 mt-4 leading-relaxed">
              Successfully engineered, debugged, and shipped multi-tier client/server platforms.
            </p>
          </motion.div>

          {/* Secondary stats cards */}
          {stats.slice(1).map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-white/10 hover:border-cyber-secondary/30 transition-all duration-300 shadow-md"
            >
              <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-cyber-secondary/5 rounded-full blur-xl" />
              <div className="flex items-start justify-between">
                <div>
                  <span className={`font-display font-black text-4xl block ${idx === 0 ? 'text-cyber-secondary' : 'text-cyber-tertiary'}`}>
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-cyber-on-variant mt-1.5 block">
                    {stat.label}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  {getIcon(stat.label)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

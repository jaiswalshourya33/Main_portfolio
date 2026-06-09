import { motion } from "motion/react";
import { Palette, Layers, Database, Terminal } from "lucide-react";
import { skillCategories } from "../data";

export default function Skills() {
  const getCategoryColorClass = (title: string) => {
    switch (title.toUpperCase()) {
      case "FRONTEND":
        return "text-cyber-primary border-cyber-primary/20 bg-cyber-primary/5 hover:border-cyber-primary/40";
      case "BACKEND":
        return "text-cyber-secondary border-cyber-secondary/20 bg-cyber-secondary/5 hover:border-cyber-secondary/40";
      case "DATABASE":
        return "text-cyber-tertiary border-cyber-tertiary/20 bg-cyber-tertiary/5 hover:border-cyber-tertiary/40";
      default:
        return "text-white/80 border-white/10 bg-white/5 hover:border-white/30";
    }
  };

  const getProgressColorClass = (title: string) => {
    switch (title.toUpperCase()) {
      case "FRONTEND":
        return "bg-cyber-primary";
      case "BACKEND":
        return "bg-cyber-secondary";
      case "DATABASE":
        return "bg-cyber-tertiary";
      default:
        return "bg-white/70";
    }
  };

  const getIcon = (title: string) => {
    switch (title.toUpperCase()) {
      case "FRONTEND":
        return <Palette className="w-4 h-4 text-cyber-primary" />;
      case "BACKEND":
        return <Layers className="w-4 h-4 text-cyber-secondary" />;
      case "DATABASE":
        return <Database className="w-4 h-4 text-cyber-tertiary" />;
      default:
        return <Terminal className="w-4 h-4 text-white/70" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-cyber-low relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-primary/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyber-secondary uppercase">
            [02_CAPABILITY_MATRIX]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Technical <span className="text-cyber-primary font-bold">Arsenal</span>
          </h2>
          <p className="max-w-xl mx-auto font-sans text-sm text-cyber-on-variant/70">
            A comprehensive visual telemetry of specialized tools, server languages, database design, and framework methodologies in my stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const isTools = cat.title.toUpperCase() === "TOOLS";
            const colorClass = getCategoryColorClass(cat.title);
            const progressColor = getProgressColorClass(cat.title);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-2xl space-y-6 flex flex-col justify-between transition-all duration-300 shadow-md ${
                  cat.title.toUpperCase() === "FRONTEND" ? "hover:border-cyber-primary/30" : 
                  cat.title.toUpperCase() === "BACKEND" ? "hover:border-cyber-secondary/30" : 
                  "hover:border-cyber-tertiary/30"
                }`}
              >
                <div className="space-y-6">
                  {/* Category Title Header */}
                  <div className={`flex items-center gap-2.5 pb-2 border-b border-white/5`}>
                    {getIcon(cat.title)}
                    <h3 className="font-display text-sm font-extrabold tracking-widest text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills layout */}
                  <div className="space-y-5">
                    {isTools ? (
                      /* Grid format for grid layout tools */
                      <div className="grid grid-cols-2 gap-3">
                        {cat.skills.map((skill, sIdx) => {
                          const tagRole = cat.tags?.[sIdx] || "Tool";
                          return (
                            <div
                              key={sIdx}
                              className="p-3 bg-cyber-lowest border border-white/5 rounded-xl hover:border-white/10 transition-colors text-center select-none"
                            >
                              <span className="block font-mono text-xs font-semibold text-white">
                                {skill.name}
                              </span>
                              <span className="text-[10px] uppercase font-bold text-cyber-on-variant/60 block mt-1 tracking-wider">
                                {tagRole}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* Standard skill horizontal slider display */
                      cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <div className="flex justify-between font-mono text-xs font-medium">
                            <span className="text-white/80">{skill.name}</span>
                            <span className="text-cyber-on-variant/70">{skill.level}%</span>
                          </div>
                          
                          <div className="h-2 bg-cyber-lowest rounded-full overflow-hidden relative border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              className={`h-full ${progressColor} scanline rounded-full`}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Tags block */}
                {!isTools && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
                    {cat.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-white/5 border border-white/5 text-cyber-on-variant/80 text-[10px] font-bold rounded-md font-mono select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

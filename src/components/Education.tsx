import { GraduationCap, Award, Calendar, Layers } from "lucide-react";
import { educationHistory } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      {/* Abstract Grid background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="text-center space-y-4 mb-16">
        <span className="font-mono text-xs font-semibold tracking-widest text-cyber-secondary uppercase">
          [04_EDUCATIONAL_RECORD]
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
          Academic <span className="text-cyber-secondary">Foundation</span>
        </h2>
        <p className="max-w-md mx-auto font-sans text-sm text-cyber-on-variant/70">
          The structural and theoretical computer science base behind my engineering workflows.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline main vertical neon bar line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyber-secondary via-cyber-secondary/30 to-transparent -translate-x-1/2 pointer-events-none" />

        <div className="space-y-12">
          {educationHistory.map((edu, idx) => (
            <div key={edu.id} className="relative flex flex-col md:flex-row items-stretch select-none">
              
              {/* Timeline dot icon with glowing shadows */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-cyber-bg border-4 border-cyber-secondary/50 flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                  <GraduationCap className="w-4 h-4 text-cyber-secondary" />
                </div>
              </div>

              {/* Grid content box */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 text-left md:text-right flex flex-col justify-center items-start md:items-end">
                <div className="glass-panel p-6 rounded-2xl border-l-4 border-cyber-secondary md:border-l-0 md:border-r-4 md:border-cyber-secondary w-full hover:border-cyber-secondary/50 transition-all duration-300 shadow-md">
                  
                  {/* Period badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyber-secondary/10 border border-cyber-secondary/25 text-cyber-secondary rounded-lg font-mono text-[10px] font-bold uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl font-black text-white mt-3">
                    {edu.degree}
                  </h3>
                  
                  <p className="font-sans text-sm font-semibold text-cyber-secondary mt-1">
                    {edu.institution}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-cyber-on-variant/80 mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.gpa && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 justify-start md:justify-end">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-on-variant/50 uppercase">
                        Mastery Index:
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-xs text-white font-mono font-bold">
                        {edu.gpa} GPA
                      </span>
                    </div>
                  )}

                </div>
              </div>

              {/* Just to balance the grid layout */}
              <div className="hidden md:block md:w-1/2" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

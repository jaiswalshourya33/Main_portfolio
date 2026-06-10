import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Terminal, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { resumePreviewUrl, developerName } from "../data";

export default function ResumeDownload() {
  const [downloadState, setDownloadState] = useState<"idle" | "compiling" | "ready" | "downloaded">("idle");
  const [progressOutput, setProgressOutput] = useState<string[]>([]);

  const handleDownloadSimulation = () => {
    setDownloadState("compiling");
    setProgressOutput(["Initializing System Document Compiler..."]);

    const logs = [
      "Accessing academic records & professional schema...",
      "Resolving deployment registry data patterns...",
      "Compressing vector diagrams (Holographic format)...",
      "Compiling curriculum_vitae_shourya.pdf...",
      "Integrity hash validation: SHA256 matches ok",
      "Document compilation completed successfully!"
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setProgressOutput((prev) => [...prev, `[OK] ${log}`]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setDownloadState("ready");
          }, 600);
        }
      }, (index + 1) * 450);
    });
  };

 const triggerActualTextDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Shourya_Jaiswal_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setDownloadState("downloaded");

  setTimeout(() => {
    setDownloadState("idle");
    setProgressOutput([]);
  }, 4000);
};
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-cyber-bg/90 to-cyber-surface border-white/5 shadow-2 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        
        {/* Left CV trigger block */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-widest text-cyber-primary uppercase">
              [06_CORE_TELEMETRY]
            </span>
            <div className="w-8 h-[1px] bg-cyber-primary/20" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
            Curriculum <span className="text-cyber-primary">Vitae</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-cyber-on-variant/80 leading-relaxed">
            Explore my complete professional journey, detailed project breakdowns, and technical achievements in one cohesive document optimized for human hiring panels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {downloadState === "idle" && (
              <button
                onClick={handleDownloadSimulation}
                className="px-6 py-4 rounded-xl bg-cyber-primary text-cyber-on-primary font-display text-xs font-bold tracking-widest hover:shadow-[0_0_20px_#a8e8ff] transition-all flex items-center justify-center gap-2 select-none"
              >
                <Download className="w-4 h-4" /> COMPILE & DOWNLOAD RESUME
              </button>
            )}

            {downloadState === "compiling" && (
              <button
                disabled
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white/70 font-display text-xs font-bold tracking-widest flex items-center justify-center gap-2 select-none"
              >
                <Loader2 className="w-4 h-4 animate-spin text-cyber-primary" /> COMPILING AS DATA OBJ...
              </button>
            )}

            {downloadState === "ready" && (
              <button
                onClick={triggerActualTextDownload}
                className="px-6 py-4 rounded-xl bg-emerald-500 text-cyber-bg font-display text-xs font-bold tracking-widest hover:shadow-[0_0_25px_-4px_rgba(16,185,129,0.7)] hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 select-none"
              >
                <Sparkles className="w-4 h-4 animate-bounce" /> INITIALIZE RESUME TRANSMISSION
              </button>
            )}

            {downloadState === "downloaded" && (
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm uppercase py-4">
                <CheckCircle2 className="w-5 h-5" /> Download Complete (Simulated Document Shipped)
              </div>
            )}
          </div>

          {/* Interactive loading panel console */}
          <AnimatePresence>
            {progressOutput.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 rounded-xl bg-cyber-lowest border border-white/5 font-mono text-xs text-cyber-on-variant/50 max-h-48 overflow-y-auto space-y-1 mt-4"
              >
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-cyber-primary border-b border-white/5 pb-1 mb-2 select-none">
                  <Terminal className="w-3.5 h-3.5" /> Compiler active logging terminal
                </div>
                {progressOutput.map((log, sIdx) => (
                  <div key={sIdx} className="leading-relaxed animate-[fade-in_0.2s_ease-out]">
                    {log}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right mockup graphical representational page */}
        <div className="relative group w-full lg:w-[380px] self-stretch flex items-center justify-center min-h-[350px]">
          <motion.div
            whileHover={{ rotate: 1, scale: 1.01 }}
            className="w-[280px] sm:w-[320px] aspect-[1/1.41] glass-panel rounded-2xl overflow-hidden relative border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/35 z-10" />
            <img
              src={resumePreviewUrl}
              alt="Premium Shourya Jaiswal Resume Mockup Preview Layout"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

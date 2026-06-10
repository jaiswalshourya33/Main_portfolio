import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, Shield, CheckCircle } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [activeLogIdx, setActiveLogIdx] = useState(0);
  const [completed, setCompleted] = useState(false);

  const loadingLogs = [
    "Establishing handshake with server at Port 3000...",
    "Parsing dynamic portfolio matrix schemas...",
    "Resolving assets, custom typography & graphic nodes...",
    "Injecting verified professional security rules...",
    "Building interactive components & client-side states...",
    "System diagnostic complete. Initiating transmission..."
  ];

  useEffect(() => {
    // Increase progress smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment randomly for a natural feel
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Stagger the loading log messages based on progress
    const logInterval = setInterval(() => {
      setActiveLogIdx((prev) => {
        if (prev < loadingLogs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 400);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small pause at 100% for aesthetic satisfaction
      const timeout = setTimeout(() => {
        setCompleted(true);
        const exitTimeout = setTimeout(() => {
          onComplete();
        }, 600); // Allow exit animations to play
        return () => clearTimeout(exitTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          id="system-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 bg-[#0A0A0A] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Neon Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,232,255,0.03)_1px,_transparent_1.5px),_linear-gradient(90deg,_rgba(168,232,255,0.03)_1px,_transparent_1.5px)] bg-[size:30px_30px] opacity-40" />
          <div className="absolute w-[400px] h-[400px] max-w-full bg-cyber-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="w-full max-w-lg z-10 space-y-8 flex flex-col items-stretch">
            
            {/* Holographic Spinning Node */}
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-16 h-16 rounded-2xl bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center shadow-[0_0_25px_rgba(168,232,255,0.15)] relative"
              >
                <Cpu className="w-8 h-8 text-cyber-primary" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-secondary rounded-full animate-ping" />
              </motion.div>

              <div className="text-center space-y-1">
                <h1 className="font-display font-black text-3xl tracking-tighter text-cyber-primary">
                  SJ<span className="text-white">.DEV</span>
                </h1>
                <p className="font-mono text-[9px] uppercase tracking-widest text-cyber-on-variant/40 font-bold">
                  System Portal Boot Version 2.0.26
                </p>
              </div>
            </div>

            {/* Glowing Command HUD Panel */}
            <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-primary/40 to-transparent" />
              
              {/* Header Bar */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5 text-cyber-on-variant/45">
                <span className="font-mono text-[10px] tracking-wider uppercase inline-flex items-center gap-1.5 font-bold">
                  <Terminal className="w-3.5 h-3.5 text-cyber-primary animate-pulse" /> Diagnostics Console
                </span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 uppercase">
                  NODE_ONLINE
                </span>
              </div>

              {/* Console Logs */}
              <div className="font-mono text-[11px] leading-relaxed space-y-2 h-36 overflow-y-auto pr-1">
                {loadingLogs.slice(0, activeLogIdx + 1).map((log, index) => {
                  const isCurrent = index === activeLogIdx;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex items-start gap-2 ${
                        isCurrent ? "text-cyber-primary" : "text-cyber-on-variant/60"
                      }`}
                    >
                      {index === loadingLogs.length - 1 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <span className={isCurrent ? "text-cyber-primary font-black animate-pulse" : "text-white/30"}>
                          &gt;
                        </span>
                      )}
                      <span>{log}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bar info footer */}
              <div className="space-y-2.5 pt-3 border-t border-white/5 font-mono text-[10px] flex flex-col">
                <div className="flex justify-between font-bold">
                  <span className="text-cyber-on-variant/40">PROTOCOL INTEGRATION PROGRESS</span>
                  <span className="text-cyber-primary text-glow">{progress}%</span>
                </div>

                {/* Main Progress Slide Channel */}
                <div className="h-2 bg-cyber-lowest rounded-full overflow-hidden relative border border-white/5 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-primary via-cyber-primary-container to-cyber-secondary scanline rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Micro warning prompt */}
            <div className="text-center">
              <span className="font-mono text-[10px] text-cyber-on-variant/30 flex items-center justify-center gap-1.5 uppercase select-none font-medium">
                <Shield className="w-3 h-3 text-cyber-primary/40" /> Handshake established successfully under secure TLS params
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

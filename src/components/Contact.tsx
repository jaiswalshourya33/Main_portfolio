import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle2, ShieldAlert, Terminal, MessageSquare, Info, Trash2 } from "lucide-react";
import { contactEmail } from "../data";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const [localHistoryList, setLocalHistoryList] = useState<ContactMessage[]>([]);

  // Load submissions from localStorage to feel persistent
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sj_portfolio_submissions");
      if (stored) {
        setLocalHistoryList(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read local sub list history:", e);
    }
  }, []);

  const handleClearHistory = () => {
    try {
      localStorage.removeItem("sj_portfolio_submissions");
      setLocalHistoryList([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();

    // Reset status
    setStatus("idle");
    setErrorText("");

    // Simple robust validation
    if (!name.trim()) {
      setStatus("error");
      setErrorText("Identification Name field is required to route message.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorText("A valid communication channel (Email) is required.");
      return;
    }

    if (!message.trim() || message.length < 5) {
      setStatus("error");
      setErrorText("Transmission payload (Message) must be at least 5 characters long.");
      return;
    }

    // Set sending animation state
    setStatus("sending");

    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: "msg-" + Math.random().toString(36).substr(2, 9),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString()
      };

      try {
        const currentList = [newMessage, ...localHistoryList];
        localStorage.setItem("sj_portfolio_submissions", JSON.stringify(currentList));
        setLocalHistoryList(currentList);
      } catch (e) {
        console.warn("Storage limits error:", e);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      // Auto clear success banner
      setTimeout(() => {
        setStatus("idle");
      }, 5000);

    }, 1800);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Contact Left side links */}
        <div className="flex-1 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-semibold tracking-widest text-cyber-primary uppercase">
                [07_ESTABLISHING_SOCKETS]
              </span>
              <div className="w-8 h-[1px] bg-cyber-primary/20" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Initialize <span className="text-cyber-primary">Connection</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-cyber-on-variant/80 leading-relaxed">
              Looking to collaborate on a dynamic full-stack infrastructure or just want to discuss performance system optimization? Enter your telemetry parameters to route messages.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 group p-2.5 rounded-xl border border-white/5 hover:border-cyber-primary/30 hover:bg-cyber-primary/5 transition-all w-fit"
              >
                <div className="p-3 bg-cyber-primary/10 rounded-full group-hover:bg-cyber-primary/20 transition-all border border-cyber-primary/20">
                  <Mail className="w-5 h-5 text-cyber-primary" />
                </div>
                <div className="space-y-0.5">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-cyber-on-variant/50 font-bold">
                    Primary Channel
                  </span>
                  <span className="font-mono text-sm font-semibold text-white group-hover:text-cyber-primary transition-colors">
                    {contactEmail}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Submitted list telemetry */}
          {localHistoryList.length > 0 && (
            <div className="glass-panel p-4 rounded-2xl space-y-3 mt-8 select-none">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                <span className="font-mono text-[10px] tracking-widest font-black text-cyber-primary uppercase inline-flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> SUBMISSION CACHE HIST
                </span>
                <button
                  onClick={handleClearHistory}
                  className="p-1 px-2 rounded hover:bg-white/5 text-cyber-on-variant/50 hover:text-rose-400 transition-colors flex items-center gap-1 text-[9px] font-mono"
                  title="Wipe Logs"
                >
                  <Trash2 className="w-3 h-3" /> WIPE
                </button>
              </div>

              <div className="max-h-40 overflow-y-auto space-y-2 pr-1.5 scrollbar-thin">
                {localHistoryList.map((hist) => (
                  <div key={hist.id} className="p-2.5 rounded-xl bg-cyber-lowest border border-white/5 font-mono text-[11px] space-y-1">
                    <div className="flex justify-between text-white/50">
                      <span className="text-cyber-secondary font-bold truncate max-w-[120px]">{hist.name}</span>
                      <span>{hist.timestamp}</span>
                    </div>
                    <p className="text-cyber-on-variant/80 truncate">{hist.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Right side Interactive Form console console */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl relative"
          >
            {/* Status alerts */}
            <AnimatePresence mode="wait">
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs font-mono flex items-start gap-2.5"
                >
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{errorText}</span>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-xs font-mono flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <span>Transmission buffered. Shourya will receive your ping shortly!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmission} className="space-y-6">
              
              <div className="space-y-2">
                <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-cyber-on-variant/60 uppercase">
                  IDENTIFICATION (NAME)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  disabled={status === "sending"}
                  className="w-full bg-cyber-lowest border border-white/10 rounded-xl p-4 text-xs tracking-wide text-white focus:border-cyber-primary/70 focus:outline-none focus:ring-1 focus:ring-cyber-primary/30 transition-all font-mono placeholder-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-cyber-on-variant/60 uppercase">
                  COMMUNICATION CHANNEL (EMAIL)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === "sending"}
                  className="w-full bg-cyber-lowest border border-white/10 rounded-xl p-4 text-xs tracking-wide text-white focus:border-cyber-primary/70 focus:outline-none focus:ring-1 focus:ring-cyber-primary/30 transition-all font-mono placeholder-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-cyber-on-variant/60 uppercase">
                  TRANSMISSION (MESSAGE)
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we build the future together?"
                  disabled={status === "sending"}
                  className="w-full bg-cyber-lowest border border-white/10 rounded-xl p-4 text-xs tracking-wide text-white focus:border-cyber-primary/70 focus:outline-none focus:ring-1 focus:ring-cyber-primary/30 transition-all font-mono placeholder-white/20 resize-none"
                />
              </div>

              {status === "sending" ? (
                <button
                  type="button"
                  disabled
                  className="w-full bg-white/5 border border-white/10 text-white/50 py-4 rounded-xl font-display text-xs font-bold tracking-widest flex items-center justify-center gap-2"
                >
                  <Terminal className="w-4 h-4 animate-spin text-cyber-primary" /> TRANSMITTING SEC_SOCKET_DAT...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-cyber-primary text-cyber-on-primary py-4 rounded-xl font-display text-xs font-black tracking-widest hover:shadow-[0_0_25px_#a8e8ff] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  SEND DATA <Send className="w-3.5 h-3.5" />
                </button>
              )}

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

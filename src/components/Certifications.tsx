import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Shield, Database, ExternalLink, X, CheckCircle } from "lucide-react";
import { certifications } from "../data";
import { Certification } from "../types";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6 text-cyber-primary" />;
      case "cloud":
        return <Shield className="w-6 h-6 text-cyber-primary" />;
      default:
        return <Database className="w-6 h-6 text-cyber-primary" />;
    }
  };

  const getTopicSkills = (title: string) => {
  if (title.includes("GenAI")) {
    return [
      "Generative AI Fundamentals",
      "Data Analytics",
      "Prompt Engineering",
      "Business Insights",
      "AI Applications"
    ];
  }

  if (title.includes("AWS")) {
    return [
      "Cloud Computing",
      "EC2 & S3 Services",
      "IAM Management",
      "AWS Pricing",
      "Cloud Security"
    ];
  }

  if (title.includes("Hackathon")) {
    return [
      "Problem Solving",
      "Team Collaboration",
      "Innovation",
      "Rapid Prototyping",
      "Project Development"
    ];
  }

  return [
    "Technical Skills",
    "Software Development",
    "Continuous Learning",
    "Project Management",
    "Professional Growth"
  ];
};
  return (
    <section className="py-24 bg-cyber-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyber-primary uppercase">
            [05_AUTHENTICATED_KEYS]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-cyber-primary">Credentials</span>
          </h2>
          <p className="max-w-md font-sans text-sm text-cyber-on-variant/70">
Verified certifications, job simulations, and hackathon achievements demonstrating technical expertise and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden border-white/5 hover:border-cyber-primary/25 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div className="space-y-4">
                <div className="p-3 bg-cyber-lowest rounded-xl border border-white/5 inline-block group-hover:border-cyber-primary/25 transition-all">
                  {getIcon(cert.icon)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyber-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-xs text-cyber-on-variant/60">
                    {cert.issuer} {cert.issueDate && `• Issued ${cert.issueDate}`}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-[10px] uppercase font-mono tracking-widest font-black text-cyber-primary hover:text-white transition-colors flex items-center gap-1.5"
                >
                  VIEW CERTIFICATE <ExternalLink className="w-3 h-3 text-cyber-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Certificate Modal dialog */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-lowest/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-cyber-surface border border-cyber-primary/20 rounded-2xl p-6 relative shadow-[0_0_50px_rgba(168,232,255,0.15)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-cyber-on-variant hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate badge layout */}
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-cyber-primary/10 border border-cyber-primary/30 rounded-2xl h-fit">
                    {getIcon(selectedCert.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyber-primary-container font-extrabold px-2 py-0.5 rounded bg-cyber-primary/10 border border-cyber-primary/15">
                      Verified Credentials
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-2">
                      {selectedCert.title}
                    </h3>
                    <p className="font-sans text-xs text-cyber-on-variant/60">
                      Issuer: {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                {/* verified skills detail */}
                <div className="space-y-3">
                  <h4 className="font-mono text-2xl tracking-widest text-cyber-on-variant/40 font-bold uppercase text-[9px]">
                    VERIFIED DOMAIN SKILLS
                  </h4>
                  <ul className="space-y-1.5">
                    {getTopicSkills(selectedCert.title).map((skillGroup, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs font-sans text-cyber-on-variant/80">
                        <CheckCircle className="w-3.5 h-3.5 text-cyber-primary flex-shrink-0" />
                        <span>{skillGroup}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simulated Certificate Id */}
                <div className="p-3.5 rounded-xl bg-cyber-lowest border border-white/5 font-mono text-[10px] text-cyber-on-variant/50 space-y-1">
                  <div>License key: COMP_SECKEY_HASH_{selectedCert.id.toUpperCase()}</div>
                  <div>Origin status: Academic authority peer verified (SHA256)</div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 bg-cyber-primary text-cyber-on-primary text-center font-display text-xs font-black tracking-widest rounded-lg hover:shadow-[0_0_15px_rgba(168,232,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    EXTERNAL LINK <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2.5 border border-white/10 rounded-lg text-xs font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

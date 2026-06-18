import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Terminal, Search, Info, X } from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "Frontend", "Web App", "AI/ML"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory || p.tags.includes(selectedCategory.toUpperCase()));

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-cyber-primary/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Header and Category Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyber-primary uppercase">
            [03_COMPILED_LOGS]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-cyber-primary">Deployments</span>
          </h2>
        </div>

        {/* Category selectors resembling high-end gaming filters */}
        <div className="flex flex-wrap gap-2.5 bg-cyber-lowest p-1.5 rounded-xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-display text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-cyber-primary text-cyber-on-primary shadow-[0_0_15px_rgba(168,232,255,0.25)] font-extrabold"
                  : "text-cyber-on-variant/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Framer Motion AnimatePresence */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group relative glass-panel rounded-3xl overflow-hidden border-white/5 hover:border-cyber-primary/25 transition-all duration-500 hover:-translate-y-2 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Scaled Project cover wrap */}
                <div className="aspect-video relative overflow-hidden bg-cyber-lowest">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                  {/* High Quality category overlay badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-cyber-lowest/80 border border-white/10 text-[10px] font-bold tracking-widest font-mono text-cyber-primary rounded-lg uppercase select-none shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Body metadata */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Code/Deploy Actions */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/5 border border-white/5 rounded-full text-white/70 hover:bg-cyber-primary/10 hover:text-cyber-primary transition-colors hover:border-cyber-primary/20 shadow-sm"
                          title="Git Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/5 border border-white/5 rounded-full text-cyber-primary/75 hover:bg-cyber-primary hover:text-cyber-on-primary transition-colors hover:border-cyber-primary/20 shadow-sm"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="p-2 bg-white/5 border border-white/5 rounded-full text-cyber-secondary/75 hover:bg-cyber-secondary/10 hover:text-cyber-secondary transition-colors hover:border-cyber-secondary/20 shadow-sm"
                        title="View Architecture Details"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-cyber-on-variant/75 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tag micro pills and action button */}
              <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-sans font-black tracking-wider text-cyber-primary bg-cyber-primary/5 border border-cyber-primary/10 px-2 py-0.5 rounded uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="mt-3 flex items-center gap-1 text-[11px] font-bold font-mono tracking-widest text-cyber-secondary hover:text-white transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 animate-pulse" /> DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal Panel */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-lowest/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-2xl bg-cyber-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Modal Banner */}
              <div className="aspect-video relative overflow-hidden bg-cyber-lowest border-b border-white/5">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent" />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 p-2 bg-cyber-lowest/85 border border-white/10 rounded-full text-white/70 hover:text-white transition-colors hover:border-white/20 shadow-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-cyber-primary">
                      DEPLOYMENT LOGS
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {activeProjectModal.githubUrl && (
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 border border-white/10 rounded-lg text-xs font-semibold hover:border-white/30 text-white/90 bg-cyber-lowest flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" /> CODE
                      </a>
                    )}
                    {activeProjectModal.liveUrl && (
                      <a
                        href={activeProjectModal.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-cyber-primary text-cyber-on-primary rounded-lg text-xs font-bold hover:shadow-[0_0_15px_rgba(168,232,255,0.4)] flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" /> OPEN
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-bold text-cyber-on-variant/60 tracking-wider">
                    SYSTEM OVERVIEW:
                  </h4>
                  <p className="font-sans text-sm text-cyber-on-variant/80 leading-relaxed">
                    {activeProjectModal.longDescription || activeProjectModal.description}
                  </p>
                </div>

                {/* Simulating in-depth server logs inside project detail */}
                <div className="p-4 rounded-xl bg-cyber-lowest border border-white/5 font-mono text-xs space-y-1.5 text-cyber-on-variant/50 max-h-36 overflow-y-auto">
                  <div className="text-cyber-primary">&gt; connecting_deployment_node... ok</div>
                  <div className="text-cyber-secondary">&gt; verify_cluster_status: primary_active [ready]</div>
                  <div className="text-emerald-500">&gt; module_integrity_hash check passed</div>
                  <div className="text-white/35">&gt; active listeners binding on port 3000... router ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

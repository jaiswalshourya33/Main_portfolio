import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-cyber-lowest border-t border-white/5 mt-20 select-none">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-cyber-primary/10 border border-cyber-primary/20 flex items-center justify-center">
            <Cpu className="w-3.5 h-3.5 text-cyber-primary" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter text-cyber-primary">
            SJ<span className="text-white">.DEV</span>
          </span>
        </div>

        {/* Year Label */}
        <div className="text-cyber-on-variant/40 font-mono text-center text-xs tracking-wider">
          © {new Date().getFullYear()} Shourya Jaiswal • Engineered for the Future
        </div>

        {/* Links */}
        <div className="flex gap-6 font-mono text-[11px] tracking-widest font-bold">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyber-on-variant/60 hover:text-cyber-primary transition-all duration-300"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyber-on-variant/60 hover:text-cyber-primary transition-all duration-300"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyber-on-variant/60 hover:text-cyber-primary transition-all duration-300"
          >
            TWITTER
          </a>
          <a
            href="mailto:shourya@sj.dev"
            className="text-cyber-on-variant/60 hover:text-cyber-primary transition-all duration-300"
          >
            EMAIL
          </a>
        </div>

      </div>
    </footer>
  );
}

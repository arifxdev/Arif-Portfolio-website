import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { personalInfo } from "./data";
import { Github, Linkedin, Mail, Phone, ChevronUp, Instagram } from "lucide-react";

export default function App() {
  // Set window title dynamically
  useEffect(() => {
    document.title = `${personalInfo.name} | Professional Full-Stack Portfolio`;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-800 dark:text-neutral-200 transition-colors duration-300 font-sans relative">
      
      {/* Interactive Particle Backdrop */}
      <ParticleBackground />
      
      {/* Scroll to Top Hidden Anchor */}
      <div id="top" />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Interactive Main Sections */}
      <main className="space-y-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Sleek Professional Footer */}
      <footer id="main-footer" className="bg-[#fcfcfc] dark:bg-[#080808] border-t border-neutral-200/40 dark:border-white/10 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            
            {/* Left Footer branding */}
            <div className="space-y-2 max-w-sm">
              <span className="font-serif font-light italic text-xl text-slate-950 dark:text-white">
                {personalInfo.name}
              </span>
              <p className="text-xs text-neutral-500 dark:text-white/40 leading-relaxed mt-2">
                Modern, responsive full-stack websites and customized content systems. Pursuing Higher Diploma in Software Engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans font-semibold uppercase tracking-widest text-[10px]">
              <a href="#about" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">Contact</a>
            </div>

          </div>

          {/* Social icons & copyright bottom divider */}
          <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-[10px] font-mono tracking-wider text-neutral-400 dark:text-white/30">
            <div className="flex items-center space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              {personalInfo.instagram && (
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              <a href={`mailto:${personalInfo.email}`} className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="text-neutral-400 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* Back to Top Indicator Button */}
      <button
        id="back-to-top-indicator-btn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-950 hover:bg-black dark:bg-white text-white dark:text-black shadow-md cursor-pointer hover:scale-105 transition-all border border-black/10 dark:border-white/10 focus:outline-none"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

    </div>
  );
}

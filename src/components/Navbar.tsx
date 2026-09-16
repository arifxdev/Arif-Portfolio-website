import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import SandText from "./SandText";
import { personalInfo } from "../data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 rounded-2xl border ${
        isScrolled
          ? "py-2.5 bg-white/95 dark:bg-[#050505]/95 md:bg-white/80 md:dark:bg-[#050505]/80 backdrop-blur-xl border-neutral-200/50 dark:border-white/15 shadow-lg shadow-black/[0.03] dark:shadow-white/[0.02]"
          : "py-4 bg-white/90 dark:bg-[#050505]/90 md:bg-[#fafafa]/40 md:dark:bg-[#050505]/40 backdrop-blur-xl md:backdrop-blur-md border-neutral-200/30 dark:border-white/10 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center transition-opacity"
          >
            <SandText text="ArifXDev" className="font-sans font-extrabold tracking-tight text-lg sm:text-xl text-slate-950 dark:text-[#f5f5f5]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-2 font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-colors hover:text-slate-950 dark:hover:text-white ${
                    isActive
                      ? "text-slate-950 dark:text-white"
                      : "text-slate-500 dark:text-white/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-slate-950 dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            {/* CTA Button */}
            <a
              id="nav-resume-cta"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#about");
              }}
              className="hidden sm:inline-flex px-5 py-2 border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-[10px] uppercase tracking-widest font-bold font-sans transition-all cursor-pointer text-slate-800 dark:text-slate-200 bg-transparent"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full md:hidden bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 cursor-pointer border border-black/10 dark:border-white/10 transition-all focus:outline-none focus:ring-1 focus:ring-white/20"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/65 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-white/15 p-8 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <SandText text="ArifXDev" className="font-sans font-extrabold tracking-tight text-lg text-slate-950 dark:text-[#f5f5f5]" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 cursor-pointer border border-black/10 dark:border-white/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <motion.a
                      key={link.name}
                      id={`mobile-nav-link-${sectionId}`}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`flex items-center px-4 py-3 rounded-full font-sans font-semibold text-xs uppercase tracking-[0.25em] border transition-all ${
                        isActive
                          ? "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-950 dark:text-white"
                          : "border-transparent text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </nav>
              </div>

              <div className="space-y-6">
                <a
                  id="mobile-nav-resume-cta"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#about");
                  }}
                  className="flex items-center justify-center w-full py-3.5 border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-[10px] uppercase tracking-widest font-bold font-sans transition-all text-slate-800 dark:text-slate-200"
                >
                  Resume
                </a>
                <p className="text-center text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-white/20">
                  © {new Date().getFullYear()} {personalInfo.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

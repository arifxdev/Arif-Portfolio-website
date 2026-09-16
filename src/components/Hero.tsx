import { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, Github, Linkedin, Briefcase, FileText } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import SandText from "./SandText";

const titles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "React Specialist",
  "WordPress Specialist",
  "Aptech Scholar",
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullTitle = titles[titleIdx];
    
    const tick = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => currentFullTitle.substring(0, prev.length + 1));
        if (displayText === currentFullTitle) {
          // Stay fully typed for a moment
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText((prev) => currentFullTitle.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors"
    >
      {/* Subtle ambient light glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neutral-200/20 dark:bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Hero Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-300 font-sans text-[10px] uppercase tracking-widest font-semibold mb-6 w-fit"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral-800 dark:bg-white"></span>
              </span>
              <span>Available for New Projects</span>
            </motion.div>

            {/* Title & Typewriter Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-[54px] sm:text-[72px] md:text-[96px] leading-[0.9] font-serif font-light italic tracking-tighter text-slate-950 dark:text-white flex flex-col">
                <SandText text="Muhammad" className="font-serif font-light italic tracking-tighter" />
                <span className="flex items-center">
                  <SandText text="Arif" className="font-serif font-light italic tracking-tighter" />
                  <span className="text-black/15 dark:text-white/20 font-sans font-normal ml-1">—</span>
                </span>
              </h1>
              
              {/* Typewriter subtitle */}
              <div className="h-6 flex items-center">
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.35em] font-semibold">
                  &lt; {displayText || "Web Developer"}
                  <span className="animate-pulse text-neutral-800 dark:text-white ml-0.5">|</span> &gt;
                </p>
              </div>
            </motion.div>

            {/* Short Bio Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg font-sans font-light text-neutral-600 dark:text-white/65 max-w-lg leading-relaxed mt-8 mb-10"
            >
              {personalInfo.tagline} Currently pursuing Software Engineering at <strong className="font-semibold text-slate-950 dark:text-white">Aptech Learning</strong>, crafting beautifully responsive websites and high-end full-stack systems.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center gap-4"
            >
              <a
                id="hero-cta-projects"
                href="#projects"
                className="px-8 py-4 border border-black/20 dark:border-white/20 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent dark:hover:border-transparent cursor-pointer transition-all bg-transparent text-slate-900 dark:text-white inline-flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-12 h-12 border border-black/20 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
                title="Contact Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Simple footer handles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-6 pt-12 text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-400 dark:text-white/30"
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">Github</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">LinkedIn</a>
              {personalInfo.instagram && (
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-slate-950 dark:hover:text-white transition-colors">Instagram</a>
              )}
              <a href={`mailto:${personalInfo.email}`} className="hover:text-slate-950 dark:hover:text-white transition-colors">Email</a>
            </motion.div>

          </div>

          {/* Right Hero Column: Julian Vane Stacked Experience + Minimal Avatar Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-4">
            
            {/* Minimal Avatar Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden "
            >
              <div className="w-full h-full rounded-xl ">
                <img
                  id="hero-profile-avatar"
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

             {/* Julian Vane Styled Left-Bordered Meta Cards */}
            <div className="space-y-8 max-w-sm mx-auto lg:mx-0 w-full">
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 6 }}
                className="border-l-2 border-black/10 dark:border-white/10 hover:border-slate-800 dark:hover:border-white pl-8 transition-colors duration-300"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 dark:text-white/30 block mb-2 font-semibold">Current Focus</span>
                  <h3 className="text-xl font-serif font-light italic tracking-tight mb-1 text-slate-900 dark:text-white">MERN Stack & React.js</h3>
                  <p className="text-xs text-neutral-500 dark:text-white/40 font-sans leading-relaxed">
                    I am now learning MERN stack React js to construct highly interactive, real-time, state-driven interfaces.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 6 }}
                className="border-l-2 border-black/10 dark:border-white/10 hover:border-slate-800 dark:hover:border-white pl-8 transition-colors duration-300"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 dark:text-white/30 block mb-2 font-semibold">Experience & Academics</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-xs font-semibold text-neutral-800 dark:text-white/80">Aptech Learning (Scholar)</span>
                      <span className="text-[9px] font-mono text-neutral-400 dark:text-white/20 uppercase whitespace-nowrap">2024—27</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-xs font-semibold text-neutral-800 dark:text-white/80">Full-Stack Freelancer</span>
                      <span className="text-[9px] font-mono text-neutral-400 dark:text-white/20 uppercase whitespace-nowrap">2023—Present</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

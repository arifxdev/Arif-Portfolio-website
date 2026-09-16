import { useState } from "react";
import { GraduationCap, MapPin, Mail, Phone, Languages, ArrowUpRight, Check, Printer, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo, educations, languages } from "../data";

export default function About() {
  const [showFullCV, setShowFullCV] = useState(false);

  const triggerPrint = () => {
    window.print();
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#fafafa] dark:bg-[#050505] border-t border-neutral-200/40 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-semibold tracking-[0.4em] text-neutral-400 dark:text-white/30 uppercase"
          >
            01. Background & Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-serif font-light italic text-slate-950 dark:text-white"
          >
            About Muhammad Arif
          </motion.h2>
          <div className="h-[1px] w-20 bg-neutral-200 dark:bg-white/10 mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Summary & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-serif font-light italic text-slate-900 dark:text-white">
                Crafting High-Performance Backends & Sleek Client Experiences
              </h3>
              <p className="text-neutral-500 dark:text-white/60 leading-relaxed text-base">
                {personalInfo.bio}
              </p>
              <p className="text-neutral-500 dark:text-white/60 leading-relaxed text-base">
                With a focus on clean, semantic layout structures and structured databases, I aim to combine responsive interfaces with lightweight server-side operations. My academic tenure has equipped me with collaborative skills and strong problem-solving methods.
              </p>
            </motion.div>
 
            {/* Core Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center space-x-4">
                <div className="p-2.5 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-300 rounded-full border border-black/5 dark:border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-400 dark:text-white/30 uppercase tracking-[0.2em] font-semibold">LOCATION</p>
                  <p className="text-sm font-medium text-slate-950 dark:text-white">{personalInfo.location.split(",").slice(-2).join(",").trim() || personalInfo.location}</p>
                </div>
              </div>
 
              <div className="p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center space-x-4">
                <div className="p-2.5 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-300 rounded-full border border-black/5 dark:border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-400 dark:text-white/30 uppercase tracking-[0.2em] font-semibold">EMAIL</p>
                  <p className="text-sm font-medium text-slate-950 dark:text-white break-all">{personalInfo.email}</p>
                </div>
              </div>
            </div>
 
            {/* Interactive Resume View Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="btn-interactive-cv"
                onClick={() => setShowFullCV(!showFullCV)}
                className="inline-flex items-center space-x-2 px-6 py-3 border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer bg-transparent text-slate-900 dark:text-slate-100"
              >
                <span>{showFullCV ? "Close Resume Viewer" : "Explore Interactive Resume"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Education & Languages */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Academic History */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-light italic text-slate-950 dark:text-white flex items-center space-x-2.5">
                <GraduationCap className="w-5 h-5 text-neutral-800 dark:text-[#f5f5f5]" />
                <span>Education Timeline</span>
              </h3>
              
              <div className="space-y-4 border-l border-neutral-200 dark:border-white/10 pl-4 ml-2.5">
                {educations.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pb-2"
                  >
                    {/* Ring indicator */}
                    <div className="absolute -left-[22.5px] top-1.5 w-3 h-3 rounded-full bg-[#fafafa] dark:bg-[#050505] border border-neutral-800 dark:border-white" />
                    
                    <span className="text-[10px] font-mono text-neutral-500 dark:text-white/40 font-bold uppercase tracking-widest">{edu.period}</span>
                    <h4 className="font-serif font-light italic text-base sm:text-lg text-slate-950 dark:text-white mt-0.5">{edu.degree}</h4>
                    <p className="text-xs text-neutral-500 dark:text-white/40 font-semibold">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-xs text-neutral-500 dark:text-white/40 mt-1.5 leading-relaxed font-light">{edu.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Mastery */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-light italic text-slate-950 dark:text-white flex items-center space-x-2.5">
                <Languages className="w-5 h-5 text-neutral-800 dark:text-[#f5f5f5]" />
                <span>Language Competencies</span>
              </h3>
              
              <div className="space-y-4 pt-2">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">{lang.name}</span>
                      <span className="font-mono text-neutral-400 dark:text-white/30 text-[10px] uppercase tracking-wider">{lang.percentageText}</span>
                    </div>
                    {/* Custom Gauge Level Bar */}
                    <div className="h-[3px] w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-slate-950 dark:bg-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Expandable Full CV / Resume Viewer Panel */}
        <AnimatePresence>
          {showFullCV && (
            <motion.div
              id="cv-viewer-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-16 overflow-hidden"
            >
              <div className="p-6 sm:p-10 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl relative">
                
                {/* CV Action Toolbar */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-serif font-light italic text-slate-950 dark:text-white">Curriculum Vitae Preview</h3>
                    <p className="text-xs text-neutral-400 dark:text-white/30 font-mono mt-0.5">Optimized for full-page PDF printing</p>
                  </div>
                  
                  <div className="flex items-center space-x-2.5">
                    <button
                      id="print-cv-btn"
                      onClick={triggerPrint}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-[10px] uppercase tracking-widest font-bold font-sans transition-all cursor-pointer bg-transparent text-slate-800 dark:text-slate-200"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print / Save PDF</span>
                    </button>
                    <button
                      id="close-cv-btn"
                      onClick={() => setShowFullCV(false)}
                      className="px-5 py-2.5 border border-transparent hover:border-black/10 dark:hover:border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold font-sans transition-all cursor-pointer bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                    >
                      Minimize
                    </button>
                  </div>
                </div>

                {/* Simulated CV Printable A4 Card */}
                <div 
                  id="cv-print-area" 
                  className="bg-white text-slate-800 p-6 sm:p-12 shadow-md rounded-2xl border border-slate-200 mx-auto max-w-4xl text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* CV Header: Top across all columns */}
                    <div className="md:col-span-12 border-b-2 border-slate-200 pb-6 mb-4 flex flex-col md:flex-row md:justify-between md:items-end">
                      <div>
                        <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-wider">MUHAMMAD ARIF</h1>
                        <p className="text-sm font-mono text-sky-600 font-bold uppercase tracking-widest mt-1">Fullstack Developer</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-left md:text-right space-y-1 text-xs font-mono text-slate-500">
                        <p>+923061535790</p>
                        <p>marifd132@gmail.com</p>
                        <p>Ghaghar Phatak, Malir, Karachi</p>
                      </div>
                    </div>

                    {/* CV Left Sidebar */}
                    <div className="md:col-span-4 space-y-6">
                      {/* Education */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">EDUCATION</h4>
                        <div className="space-y-3 text-xs">
                          <div>
                            <p className="font-bold text-slate-800">Accp 2.0</p>
                            <p className="font-semibold text-slate-600">Aptech Learning</p>
                            <p className="text-slate-400">2024 - 2027</p>
                            <p className="text-slate-500 mt-0.5">Higher Diploma in Software Engineering</p>
                          </div>
                          <div className="border-t border-slate-100 pt-2">
                            <p className="font-bold text-slate-800">Intermediate</p>
                            <p className="font-semibold text-slate-600">National College</p>
                            <p className="text-slate-500">Computer Science</p>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">SKILLS</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {["Front-end Development", "Back-end Development", "WordPress Development", "PHP / MySQL", "Laravel", "React.js", "Tailwind CSS", "Bootstrap"].map((s) => (
                            <span key={s} className="px-2 py-0.5 bg-slate-100 text-[10px] rounded text-slate-600 font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">LANGUAGES</h4>
                        <div className="space-y-1.5 text-xs">
                          <p className="flex justify-between font-semibold"><span>Urdu</span> <span className="text-slate-400">Native</span></p>
                          <p className="flex justify-between font-semibold"><span>Sindhi</span> <span className="text-slate-400">Fluent</span></p>
                          <p className="flex justify-between font-semibold"><span>English</span> <span className="text-slate-400">Professional</span></p>
                        </div>
                      </div>
                    </div>

                    {/* CV Right Column */}
                    <div className="md:col-span-8 space-y-6">
                      {/* Profile summary */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">PROFILE</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Passionate Full Stack Developer with a solid foundation in front-end and back-end technologies, including HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Tailwind CSS, and WordPress. Currently expanding back-end expertise by learning Laravel while pursuing a Diploma in Software Engineering at Aptech Learning. Dedicated to creating responsive, user-friendly websites with clean and modern UI/UX, and eager to contribute to real-world projects in a collaborative tech environment.
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">EXPERIENCE</h4>
                        <div className="space-y-4 text-xs">
                          <div>
                            <p className="font-bold text-slate-800 text-sm">Web Development Projects – Aptech Learning</p>
                            <p className="text-slate-500 font-medium mt-0.5">2024 – Present</p>
                            <ul className="list-disc pl-4 mt-2 space-y-1.5 text-slate-600">
                              <li>Developed fully responsive and visually appealing websites using HTML, CSS, Bootstrap, and jQuery, focusing on design consistency and mobile-first layouts.</li>
                              <li>Created dynamic and interactive web pages by integrating JavaScript for client-side functionality, and PHP with MySQL for robust server-side development and database management.</li>
                              <li>Successfully completed a range of real-world projects, including a feature-rich E-Commerce website with product listings, shopping cart, and secure checkout; professional portfolio websites showcasing individual and team skills; and several mini-projects to reinforce concepts.</li>
                              <li>Gained hands-on experience in solving real-time challenges, debugging, and collaborating with peers on project planning and implementation.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

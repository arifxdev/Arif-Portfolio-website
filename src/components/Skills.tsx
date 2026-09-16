import { useState } from "react";
import { 
  Atom, Code2, Palette, Layout, FileCode, FileJson, Server, Database, Terminal, Globe, Layers, Github, Sparkles, Monitor, HelpCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { skills } from "../data";
import { Skill } from "../types";

// Helper to resolve Lucide Icons dynamically
function getSkillIcon(iconName: string) {
  const iconClass = "w-5 h-5 text-neutral-800 dark:text-neutral-200";
  switch (iconName) {
    case "Atom": return <Atom className={iconClass} />;
    case "Code2": return <Code2 className={iconClass} />;
    case "Palette": return <Palette className={iconClass} />;
    case "Layout": return <Layout className={iconClass} />;
    case "FileCode": return <FileCode className={iconClass} />;
    case "FileJson": return <FileJson className={iconClass} />;
    case "Server": return <Server className={iconClass} />;
    case "Database": return <Database className={iconClass} />;
    case "Terminal": return <Terminal className={iconClass} />;
    case "Globe": return <Globe className={iconClass} />;
    case "Layers": return <Layers className={iconClass} />;
    case "Github": return <Github className={iconClass} />;
    case "Sparkles": return <Sparkles className={iconClass} />;
    case "MonitorPhone": return <Monitor className={iconClass} />;
    default: return <HelpCircle className={iconClass} />;
  }
}

const categories = [
  { id: "all", name: "All Skills" },
  { id: "front-end", name: "Front-End" },
  { id: "back-end", name: "Back-End" },
  { id: "wordpress", name: "WordPress & CMS" },
  { id: "others", name: "Tools & Core" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  return (
    <section
      id="skills"
      className="py-24 bg-[#fafafa] dark:bg-[#050505] border-t border-neutral-200/40 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-16">
          <p className="text-[10px] font-mono font-semibold tracking-[0.4em] text-neutral-400 dark:text-white/30 uppercase">
            02. Technical Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light italic text-slate-950 dark:text-white">
            Skills & Competencies
          </h2>
          <div className="h-[1px] w-20 bg-neutral-200 dark:bg-white/10 mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-cat-btn-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-950 text-white dark:bg-white dark:text-black border border-transparent"
                  : "bg-transparent text-neutral-500 hover:text-slate-900 dark:text-white/40 dark:hover:text-white border border-black/10 dark:border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-cards-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill, index: number) => (
              <motion.div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 flex items-start space-x-4 shadow-sm transition-all"
              >
                {/* Icon Circle */}
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center border border-black/5 dark:border-white/10 shrink-0">
                  {getSkillIcon(skill.iconName)}
                </div>

                {/* Skill Details */}
                <div className="flex-1 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif font-light italic text-base text-slate-950 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-xs font-bold text-neutral-400 dark:text-white/30">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level gauge bar */}
                  <div className="h-[3px] w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full bg-slate-950 dark:bg-white"
                    />
                  </div>
                  
                  {/* Skill labels */}
                  <span className="inline-block text-[9px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-neutral-400 dark:text-white/30 border border-black/5 dark:border-white/5">
                    {skill.category === "front-end" ? "Front-End" : 
                     skill.category === "back-end" ? "Back-End" : 
                     skill.category === "wordpress" ? "WordPress" : "Tools"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

import { Briefcase, Calendar, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#fafafa] dark:bg-[#050505] border-t border-neutral-200/40 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-16">
          <p className="text-[10px] font-mono font-semibold tracking-[0.4em] text-neutral-400 dark:text-white/30 uppercase">
            04. Employment & Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light italic text-slate-950 dark:text-white">
            Practical Experience
          </h2>
          <div className="h-[1px] w-20 bg-neutral-200 dark:bg-white/10 mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-black/10 dark:border-white/10 pl-4 sm:pl-8 ml-2 sm:ml-6 space-y-12">
            
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                id={`exp-block-${exp.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Badge Icon */}
                <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 p-1.5 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full border-4 border-[#fafafa] dark:border-[#050505] shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Detail Box */}
                <div className="p-6 sm:p-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl transition-all">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 pb-4 border-b border-black/5 dark:border-white/10">
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-light italic text-slate-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs uppercase tracking-widest font-semibold text-neutral-500 dark:text-white/40 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-neutral-400 dark:text-white/30 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-white/30" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-3.5">
                    <p className="text-[9px] font-mono font-semibold tracking-[0.25em] text-neutral-400 dark:text-white/30 uppercase flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-500 dark:text-white/30" />
                      <span>Key Accomplishments</span>
                    </p>
                    
                    <ul className="space-y-3 text-neutral-500 dark:text-white/70 text-sm">
                      {exp.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-start space-x-3 leading-relaxed"
                        >
                          <CheckSquare className="w-4 h-4 text-neutral-800 dark:text-white shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

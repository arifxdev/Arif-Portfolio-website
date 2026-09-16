import { useState } from "react";
import { ExternalLink, Github, X, CheckCircle2, ChevronRight, LayoutGrid, Server, Globe, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";

const filters = [
  { id: "all", name: "All Work" },
  { id: "full-stack", name: "Full-Stack" },
  { id: "front-end", name: "Front-End" },
  { id: "wordpress", name: "WordPress" },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    return project.category === selectedFilter;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-[#fafafa] dark:bg-[#050505] border-t border-neutral-200/40 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-16">
          <p className="text-[10px] font-mono font-semibold tracking-[0.4em] text-neutral-400 dark:text-white/30 uppercase">
            03. Case Studies & Demos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light italic text-slate-950 dark:text-white">
            Featured Development Projects
          </h2>
          <div className="h-[1px] w-20 bg-neutral-200 dark:bg-white/10 mx-auto mt-4" />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={`project-filter-${filter.id}`}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? "bg-slate-950 text-white dark:bg-white dark:text-black border border-transparent"
                  : "bg-transparent text-neutral-500 hover:text-slate-900 dark:text-white/40 dark:hover:text-white border border-black/10 dark:border-white/10"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Project Catalog Grid */}
        <motion.div
          id="project-items-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-black/5 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden shadow-sm hover:border-black/20 dark:hover:border-white/20 transition-all flex flex-col h-full"
              >
                
                {/* Project Image Frame */}
                <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Overlay Tag */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 dark:bg-black/90 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-semibold tracking-[0.2em] text-[#f5f5f5] uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-light italic text-lg sm:text-xl text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-white/60 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[9px] font-mono font-semibold text-neutral-500 dark:text-white/40 border border-black/5 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Action Link */}
                    <div className="flex justify-between items-center pt-2">
                      <button
                        id={`project-btn-details-${project.id}`}
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest font-semibold font-sans text-neutral-800 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-0"
                      >
                        <span>Case Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Code Link Shortcuts */}
                      <div className="flex items-center space-x-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-black/5 dark:bg-white/5 rounded-full text-neutral-500 hover:text-neutral-850 dark:text-white/40 dark:hover:text-white border border-black/5 dark:border-white/10 transition-colors"
                            title="GitHub Source"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-black/5 dark:bg-white/5 rounded-full text-neutral-500 hover:text-neutral-850 dark:text-white/40 dark:hover:text-white border border-black/5 dark:border-white/10 transition-colors"
                            title="Live Preview"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Project Detailed Modal Drawer Overlay */}
        <AnimatePresence>
          {activeModalProject && (
            <div id="project-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-[#fafafa] dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  id="close-project-modal"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black text-white backdrop-blur-sm border border-white/10 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto flex-1">
                  
                  {/* Banner Image */}
                  <div className="relative aspect-video w-full bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category Label */}
                    <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 dark:bg-black/90 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-semibold tracking-[0.2em] text-[#f5f5f5] uppercase">
                      {activeModalProject.category}
                    </div>
                  </div>

                  {/* Details Sheet */}
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Header */}
                    <div className="space-y-2.5">
                      <h3 className="text-xl sm:text-2xl font-serif font-light italic text-slate-950 dark:text-white">
                        {activeModalProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[9px] font-mono font-semibold text-neutral-500 dark:text-white/40 border border-black/5 dark:border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Long Description Text */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono font-semibold tracking-[0.3em] text-neutral-400 dark:text-white/30 uppercase">
                        Project Overview
                      </h4>
                      <p className="text-neutral-500 dark:text-white/60 text-sm sm:text-base leading-relaxed">
                        {activeModalProject.longDescription}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono font-semibold tracking-[0.3em] text-neutral-400 dark:text-white/30 uppercase">
                        Key Features & Architecture
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        {activeModalProject.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-neutral-500 dark:text-white/70"
                          >
                            <CheckCircle2 className="w-4 h-4 text-neutral-800 dark:text-white shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Links Panel */}
                    <div className="flex items-center gap-3 pt-4 border-t border-black/10 dark:border-white/10">
                      {activeModalProject.githubUrl && (
                        <a
                          id="modal-link-github"
                          href={activeModalProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 border border-black/20 dark:border-white/20 rounded-full text-xs uppercase tracking-widest font-bold font-sans transition-all cursor-pointer bg-transparent text-slate-800 dark:text-slate-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                      {activeModalProject.liveUrl && (
                        <a
                          id="modal-link-live"
                          href={activeModalProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 border border-transparent rounded-full text-xs uppercase tracking-widest font-bold font-sans transition-all cursor-pointer bg-slate-950 dark:bg-white text-white dark:text-black"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Preview</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

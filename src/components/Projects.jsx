import React, { useState } from "react";
import { FolderGit2, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects, archiveProjects } from "../data/portfolio";

export default function Projects() {
    const [showArchive, setShowArchive] = useState(false);

    return(
        <section id="projects" className="relative pt-16 pb-32 md:pt-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Showcasing my work across AI/ML engineering, modern web development, and native mobile applications.
                    </p>
                </div>

                {/* TIER 1: The Featured Spotlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, idx) => {
                        const IconComponent = project.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative bg-surface/50 border border-surface rounded-3xl p-8 hover:bg-surface hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-background border border-surface flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300">
                                        <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-background border border-surface rounded-full text-xs font-medium text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link mt-auto w-fit"
                                        >
                                            View Project
                                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* TIER 2: The Developer Archive Toggle */}
                <div className="flex justify-center mb-10">
                    <button 
                        onClick={() => setShowArchive(!showArchive)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/50 border border-surface text-white hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        {showArchive ? "Hide Archive" : "View Full Project Archive"}
                        {showArchive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                </div>

                {/* TIER 2: The Archive Table (Conditionally Rendered) */}
                {showArchive && (
                    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
                        {/* Table Header (Hidden on Mobile) */}
                        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 text-sm font-semibold text-slate-400 border-b border-surface">
                            <div>Year</div>
                            <div>Project</div>
                            <div>Built With</div>
                            <div className="text-right">Link</div>
                        </div>

                        {/* Table Rows */}
                        <div className="flex flex-col">
                            {archiveProjects.map((item, index) => (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    key={index}
                                    className="group grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-5 border-b border-surface/50 hover:bg-surface/30 transition-colors items-center"
                                >
                                    {/* Year */}
                                    <div className="text-primary font-mono text-sm hidden md:block">
                                        {item.year}
                                    </div>
                                    
                                    {/* Title */}
                                    <div className="font-bold text-white group-hover:text-primary transition-colors text-lg md:text-base">
                                        {item.title}
                                    </div>
                                    
                                    {/* Tech Stack */}
                                    <div className="hidden md:flex flex-wrap gap-2 text-sm text-slate-400">
                                        {item.builtWith.join(" · ")}
                                    </div>
                                    
                                    {/* Link Icon */}
                                    <div className="hidden md:flex justify-end text-slate-500 group-hover:text-accent transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
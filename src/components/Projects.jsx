import React, { useState } from "react";
import { FolderGit2, ExternalLink, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { featuredProject, freelanceProjects, archiveProjects } from "../data/portfolio";

const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export default function Projects() {
    const [showArchive, setShowArchive] = useState(false);

    return(
        <section id="projects" className="relative pt-16 pb-32 md:pt-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Selected Works
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Showcasing my progression across AI/ML engineering, freelance client delivery, and full-stack development.
                    </p>
                </div>

                {/* The Hero Showcase (EventLK) */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Featured Engineering
                    </h3>
                    
                    {featuredProject.map((project, idx) => (
                        <div key={idx} className="group relative bg-surface/30 border border-surface rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col lg:flex-row">
                            {/* Left: Cover Image */}
                            <div className="lg:w-5/12 relative overflow-hidden bg-background/50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-surface">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-auto max-h-[320px] object-contain rounded-xl shadow-2xl group-hover:scale-102 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Right: Content */}
                            <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                <h4 className="text-3xl font-bold mb-6 text-white">{project.title}</h4>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-background border border-surface rounded-full text-sm font-medium text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                            <GithubIcon className="w-5 h-5" /> Source Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium group/link">
                                            Live Platform <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Freelance & Client Work */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        Client Projects
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {freelanceProjects.map((project, idx) => (
                            <div key={idx} className="group flex flex-col bg-surface/50 border border-surface rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                                {/* Image Container */}
                                <div className="aspect-video overflow-hidden relative">
                                    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-surface rounded-full text-xs font-semibold text-accent">
                                        <Briefcase className="w-3.5 h-3.5" /> Freelance
                                    </div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                                    <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                                    
                                    <div className="flex justify-between items-end mt-auto">
                                        <div className="flex flex-wrap gap-2 w-2/3">
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-xs font-medium text-slate-300 bg-background px-2.5 py-1 rounded-md border border-surface">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-surface flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-all group/link shrink-0">
                                                <ExternalLink className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Developer Archive Toggle */}
                <div className="flex justify-center mb-10 border-t border-surface pt-16">
                    <button 
                        onClick={() => setShowArchive(!showArchive)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/50 border border-surface text-white hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        {showArchive ? "Hide Developer Archive" : "View Developer Archive"}
                        {showArchive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                </div>

                {/* TIER 3: The Archive Table */}
                {showArchive && (
                    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 text-sm font-semibold text-slate-400 border-b border-surface">
                            <div>Year</div>
                            <div>Project</div>
                            <div>Built With</div>
                            <div className="text-right">Repository</div>
                        </div>

                        <div className="flex flex-col">
                            {archiveProjects.map((item, index) => (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    key={index}
                                    className="group grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-5 border-b border-surface/50 hover:bg-surface/30 transition-colors items-center"
                                >
                                    <div className="text-primary font-mono text-sm hidden md:block">{item.year}</div>
                                    <div className="font-bold text-white group-hover:text-primary transition-colors text-lg md:text-base">{item.title}</div>
                                    <div className="hidden md:flex flex-wrap gap-2 text-sm text-slate-400">{item.builtWith.join(" · ")}</div>
                                    <div className="hidden md:flex justify-end text-slate-500 group-hover:text-primary transition-colors">
                                        <GithubIcon className="w-5 h-5" />
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
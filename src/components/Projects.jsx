import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
    return(
        <section id="projects" className="relative pt-16 pb-32 md:pt-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Showcasing my work across AI/ML engineering, modern web development, and native mobile applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => {
                        // Extract the dynamic icon component from the data file
                        const IconComponent = project.icon;
                        
                        return (
                            <div
                                key={idx}
                                className="group relative bg-surface/50 border border-surface rounded-3xl p-8 hover:bg-surface hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Dynamic Icon Box */}
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
            </div>
        </section>
    );
}
import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
    return(
        <section id="projects" className="relative pt-16 pb-32 md:pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Showcasing my work in web development, AI/ML, and mobile applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-slate-900/50 border border-white/5 rounded-3xl p-8 hover:bg-slate-900 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="relative z-10">
                                {/* Minimalist Icon Box */}
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors duration-300">
                                    <Code2 className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-slate-800 border border-white/5 rounded-full text-xs font-medium text-slate-300"
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
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                                    >
                                        View Project
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
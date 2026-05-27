import React from "react";
import { Cpu, Sparkles } from "lucide-react";
import { skills, currentlyLearning } from "../data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface/30 border-t border-b border-surface">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3 text-white">
                        <Cpu className="w-8 h-8 text-primary" />
                        Technical <span className="text-primary">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* The Stack Matrix */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        
                        return (
                            <div 
                                key={index}
                                className="p-6 bg-background rounded-2xl border border-surface hover:border-primary/30 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-surface">
                                        <IconComponent className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-tight">
                                        {skill.name}
                                    </h3>
                                </div>
                                
                                {/* Tool Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {skill.tools.map((tool, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-surface/50 rounded-md border border-white/5"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* The Trajectory Banner */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-surface to-background border border-surface rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-1">Currently Exploring</h4>
                            <p className="text-sm text-slate-400">Expanding my stack outside of university coursework.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full md:w-auto">
                        {currentlyLearning.map((topic, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
import React from "react";
import { Cpu } from "lucide-react";
import { skills } from "../data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-surface/30 border-t border-b border-surface">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3 text-white">
                        <Cpu className="w-8 h-8 text-primary" />
                        Core <span className="text-primary">Competencies</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        // Extract the dynamic icon from our data file
                        const IconComponent = skill.icon;
                        
                        return (
                            <div 
                                key={index}
                                className="p-8 bg-background rounded-2xl border border-surface hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 border border-transparent group-hover:border-primary/20 transition-all duration-300">
                                    <IconComponent className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                                
                                {/* Skill Name */}
                                <h3 className="text-lg font-bold text-white tracking-wide">
                                    {skill.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
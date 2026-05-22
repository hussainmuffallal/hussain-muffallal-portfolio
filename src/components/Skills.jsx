import React from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
    return(
        <section id="skills" className="relative py-16 md:py-32 px-6 border-t border-white/5 bg-slate-950">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                        Technical Arsenal
                    </h2>
                    <p className="text-lg text-slate-400">
                        Core competencies across full-stack and machine learning development.
                    </p>
                </div>

                <div className="space-y-6">
                {skills.map((skill, idx) => {
                    // We assign the icon component to a capitalized variable so React knows to render it
                    const Icon = skill.icon; 
                    
                    return (
                    <div 
                        key={idx} 
                        className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-slate-900 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-slate-400" />
                        </div>
                        
                        <div className="flex-1 w-full">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                            </div>
                            {/* Ultra-thin minimalist progress bar */}
                            <div className="w-full bg-slate-800 rounded-full h-1">
                                <div
                                    className="bg-blue-500 h-1 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}
import React from "react";
import { User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative py-16 md:py-24 px-6 border-t border-b border-white/5 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-3">
                    <User className="w-8 h-8 text-blue-400" />
                    About Me
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                    Hello! I am a second-year Computer Science student deeply passionate about crafting elegant software solutions. My expertise spans across full-stack web development, native mobile application design, and integrating AI/ML models into practical platforms. I thrive in collaborative environments—like my recent work on a 6-member agile team building a smart event management system—and I am constantly optimizing my development workflow. I am actively seeking a software engineering internship where I can contribute to meaningful projects, tackle complex problems, and continue growing as a developer.
                </p>
            </div>
        </section>
    );
}
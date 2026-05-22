import React from "react";
import { ArrowRight, Mail, User, Briefcase } from "lucide-react";

export default function Hero() {
    return(
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-slate-950 overflow-hidden">
            {/* Subtle minimalist background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 w-full">
            
                {/* Left Column: Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                
                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-sm font-medium text-slate-300 mb-8">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Available for Internships
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
                        Hussain Muffallal
                    </h1>
                    
                    <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 pb-1 leading-relaxed">
                        Software Engineering Student
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed">
                        Building intelligent full-stack applications and scalable solutions.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                        <a href="#projects" className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
                            View My Work
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/resume.pdf" download="Hussain_Muffallal_Resume.pdf" className="px-8 py-3.5 rounded-full bg-slate-900 text-white border border-white/10 hover:border-white/20 hover:bg-slate-800 transition-all">
                            Download CV
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        {[
                        { Icon: User, href: "https://github.com/hussainmuffallal" },
                        { Icon: Briefcase, href: "https://www.linkedin.com/in/hussainmuffallal/" },
                        { Icon: Mail, href: "mailto:hussainmufallal2004@gmail.com" }
                        ].map((social, idx) => {
                        const Icon = social.Icon;
                        return (
                            <a 
                            key={idx} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                            <Icon className="w-5 h-5" />
                            </a>
                        );
                        })}
                    </div>
                </div>

                {/* Right Column: Profile Image */}
                <div className="flex-shrink-0 relative mt-8 md:mt-0">
                    {/* Subtle back glow instead of heavy neon */}
                    <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl"></div>
                    <img 
                        src="/profile.jpeg" 
                        alt="Hussain Muffallal - Portfolio Picture" 
                        className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-3xl object-cover border border-white/10 shadow-2xl" 
                    />
                </div>

            </div>
        </section>
    );
}
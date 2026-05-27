import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-background">
      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Profile & Status Group */}
        <div className="flex flex-col items-center gap-6 mb-8">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface overflow-hidden relative z-10">
              <img 
                src="/profile.jpeg" 
                alt="Hussain Muffallal" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glowing ring */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl -z-10 animate-pulse"></div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Available for Internships</span>
          </div>

        </div>

        {/* Main Heading: Identity */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hussain Muffallal</span>
        </h1>

        {/* Subtitle: Value Proposition */}
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-slate-300">
          Engineering Intelligent Experiences
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm a Full-Stack & AI/ML Developer building scalable applications and recommendation engines. 
          Currently studying Computer Science in Sri Lanka.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-background font-semibold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-surface text-white font-medium rounded-xl border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/hussainmuffallal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
          <a 
            href="https://linkedin.com/in/hussainmuffallal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
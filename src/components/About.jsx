import React from 'react';
import { User, Brain, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface/30 border-t border-b border-surface">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-white">
            <User className="w-8 h-8 text-primary" />
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Narrative (Your Original Text) */}
          <div className="text-lg text-slate-400 leading-relaxed space-y-6">
            <p>
              Hello! I am a second-year Computer Science student deeply passionate about crafting elegant software solutions. My expertise spans across full-stack web development, native mobile application design, and integrating AI/ML models into practical platforms.
            </p>
            <p>
              I thrive in collaborative environments—like my recent work as an AI/ML Developer on a 6-member agile team building a smart event management system—and I am constantly optimizing my development workflow. 
            </p>
            <p className="text-white font-medium border-l-2 border-primary pl-4">
              I am actively seeking a software engineering internship where I can contribute to meaningful projects, tackle complex problems, and continue growing as a developer.
            </p>
          </div>

          {/* Right Column: Scannable Competencies Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Core Focus 1 */}
            <div className="p-6 bg-background rounded-2xl border border-surface hover:border-primary/50 transition-all group">
              <div className="mb-4 p-3 bg-surface rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI/ML Integration</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Building robust recommendation engines using Random Forest classifiers and regressor models.
              </p>
            </div>

            {/* Core Focus 2 */}
            <div className="p-6 bg-background rounded-2xl border border-surface hover:border-accent/50 transition-all group">
              <div className="mb-4 p-3 bg-surface rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Modern Full-Stack</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Developing scalable platforms utilizing React, Next.js, Python, and serverless architectures.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
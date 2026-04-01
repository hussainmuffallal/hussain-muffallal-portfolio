import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User, Briefcase, Mail, ExternalLink, Code2, Brain, Smartphone, ArrowRight } from 'lucide-react';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState('');

  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault(); 
    setFormStatus("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a2bd8eac-44d5-490b-be82-f55a3f93963f"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("Message sent successfully!");
        event.target.reset(); 
        setTimeout(() => setFormStatus(""), 3000); 
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error sending message.");
    }
  };

  const projects = [
    {
      title: "EventLK Platform",
      description: "Engineered the AI/ML backend for a smart event planning platform. Optimized a Random Forest model, boosting prediction accuracy by 2% through custom feature engineering (budget_per_head).",
      tech: ["Python", "Scikit-Learn", "React", "Machine Learning"],
      gradient: "from-blue-600 to-cyan-600",
      link: "https://github.com/Rism583/Project-Eventlk-1"
    },
    {
      title: "Math Puzzle Mobile App",
      description: "A native mobile application featuring dynamic math puzzles and logic games designed to test and improve cognitive skills and problem-solving.",
      tech: ["Kotlin", "Android Studio", "Mobile UI"],
      gradient: "from-cyan-600 to-sky-600"
    },
    {
      title: "Task Management System",
      description: "A streamlined application for tracking daily tasks, managing project milestones, and improving overall personal productivity.",
      tech: ["Python", "Algorithms", "Data Structures"],
      gradient: "from-blue-700 to-indigo-600"
    }
  ];

  const skills = [
    { name: "Full-Stack Development", icon: Code2, level: 90 },
    { name: "AI & Machine Learning", icon: Brain, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-sm font-medium transition-colors hover:text-blue-400"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"/>
                </a>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
        {/* Main Content Wrapper - keeps flex-col (image at bottom) on mobile */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm">
              <span className="text-blue-400">●</span> Seeking Internship Opportunities
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Software Engineering
              </span>
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Student & Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto md:mx-0">
              Building intelligent full-stack applications and scalable solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="/resume.pdf"
                download="My_Resume.pdf"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start mt-12 mb-8 md:mb-0">
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
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Profile Image - Borderless */}
          <div className="flex-shrink-0 mt-8 md:mt-0 mb-12 md:mb-0">
            <div className="relative">
              {/* Soft background glowing accent */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              {/* CLEAN BORDERLESS IMAGE */}
              <img 
                src="/profile.jpg" 
                alt="Hussain Muffallal - Portfolio Picture" 
                className="relative w-60 h-80 md:w-100 md:h-120 rounded-3xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </div>

        </div>

        {/* Floating particles background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
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

      {/* Projects Section - Reduced Mobile Gap via pt-16 */}
      <section id="projects" className="relative pt-16 pb-32 md:pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
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
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
          </div>

          <div className="space-y-12">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{skill.name}</h3>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Currently looking for internship opportunities. My inbox is always open!
          </p>

          <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-400/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400/50 transition-colors"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your message..."
              rows="6"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-400/50 transition-colors mb-8"
            />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Send Message
              </button>
              
              {/* This is where the success/loading message appears */}
              {formStatus && (
                <span className={`text-sm font-medium ${formStatus.includes("Error") || formStatus.includes("wrong") ? "text-red-400" : "text-green-400"}`}>
                  {formStatus}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© {new Date().getFullYear()} Hussain Muffallal.</p>
        </div>
      </footer>
    </div>
  );
}
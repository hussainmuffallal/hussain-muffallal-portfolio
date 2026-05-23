import React, { useState} from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        {/* Minimalist Logo */}
                        <div className="text-xl font-bold text-white tracking-tighter">
                            HM<span className="text-primary">.</span>
                        </div>
                
                        <div className="hidden md:flex gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`text-sm font-medium transition-colors hover:text-white ${
                                        activeSection === item.toLowerCase() ? 'text-white' : 'text-slate-400'
                                    }`}
                                    onClick={() => setActiveSection(item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button 
                            className="md:hidden text-slate-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-24">
                    <div className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                                onClick={() => {
                                    setActiveSection(item.toLowerCase());
                                    setIsMenuOpen(false); // Close menu on click
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

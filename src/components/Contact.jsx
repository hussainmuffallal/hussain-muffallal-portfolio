import React, { useState } from "react";
import { Send, Mail } from "lucide-react";

export default function Contact() {
    // Encapsulated state just for the contact form
    const [formStatus, setFormStatus] = useState('');

    // Your exact Web3Forms logic
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

    return (
        <section id="contact" className="relative py-16 md:py-32 px-6 bg-background border-t border-surface">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface border border-surface mb-6">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-slate-400">
                        Currently looking for internship opportunities. My inbox is always open!
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-surface/30 border border-surface rounded-3xl p-6 md:p-10">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required
                                    className="w-full bg-background border border-surface rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" 
                                    placeholder="Your Name" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required
                                    className="w-full bg-background border border-surface rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" 
                                    placeholder="your@email.com" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                required
                                rows="5" 
                                className="w-full bg-background border border-surface rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" 
                                placeholder="How can we work together?"
                            ></textarea>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <button 
                                type="submit" 
                                className="w-full sm:w-auto px-8 py-4 bg-white text-background font-semibold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            
                            {/* Form Status Message Display */}
                            {formStatus && (
                                <span className={`text-sm font-medium ${formStatus.includes("Error") || formStatus.includes("wrong") ? "text-red-400" : "text-green-400"}`}>
                                    {formStatus}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

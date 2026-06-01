import { BrainCircuit, Globe, Smartphone, Database, Layout, Server } from "lucide-react";

export const projects = [
    {
        title: "EventLK AI Engine",
        description: "Engineered the AI/ML backend for a smart event planning platform. Optimized a Random Forest model, boosting prediction accuracy through custom feature engineering (budget_per_head).",
        tech: ["Python", "Scikit-Learn", "React", "Machine Learning"],
        link: "https://eventlk.com",
        icon: BrainCircuit // Dynamic icon assigned here
    },
    {
        title: "Rosary Global Booking",
        description: "Designed and deployed a serverless freelance booking platform for a travel agency. Engineered dynamic pricing features, Google Maps API integration, and advanced SEO.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        link: "https://github.com/yourusername", // Update with your actual link
        icon: Globe
    },
    {
        title: "Cross Math Mobile",
        description: "A native Android application featuring dynamic algorithmic puzzle generation, robust state management, and a highly responsive touch interface.",
        tech: ["Kotlin", "Android Studio", "Algorithms"],
        link: "https://github.com/yourusername", // Update with your actual link
        icon: Smartphone
    }
];

export const skills = [
    { 
        name: "AI & Machine Learning", 
        icon: BrainCircuit,
        tools: ["Python", "Scikit-Learn", "Pandas", "Random Forests"]
    },
    { 
        name: "Frontend Development", 
        icon: Layout,
        tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    { 
        name: "Backend Architecture", 
        icon: Server,
        tools: ["Python (FastAPI)", "PHP", "RESTful APIs"]
    },
    { 
        name: "Database & Cloud", 
        icon: Database,
        tools: ["MySQL", "Supabase", "Vercel", "Git/GitHub"]
    }
];

export const currentlyLearning = [
    "AWS Cloud Foundations",
    "Advanced RAG Architectures",
    "System Design"
];

export const archiveProjects = [
    {
        year: "2025",
        title: "Multi-User Blog Platform",
        builtWith: ["PHP", "MySQL", "Tailwind CSS"],
        link: "https://github.com/hussainmuffallal/Blog-Project" 
    },
    {
        year: "2024",
        title: "Task Management CLI",
        builtWith: ["Python", "SQLite", "Algorithms"],
        link: "https://github.com/yourusername/task-manager" // Update these links
    },
    {
        year: "2024",
        title: "University Management System",
        builtWith: ["Java", "JavaFX", "OOP"],
        link: "https://github.com/yourusername/uni-system" // Update these links
    }
];
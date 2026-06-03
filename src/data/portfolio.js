import { BrainCircuit, Globe, Smartphone, Database, Layout, Server, Sparkles } from "lucide-react";

// The Hero Showcase
export const featuredProject = [
    {
        title: "EventLK - AI Event Platform",
        description: "Architected the core recommendation engine for a smart event planning platform. Developed and trained custom Random Forest models—combining classifiers and regressors with generative AI integrations—to intelligently predict vendor matching and optimize complex financial planning at scale.",
        tech: ["Python", "Scikit-Learn", "React", "Machine Learning"],
        live: "https://eventlk.com",
        github: "https://github.com/Rism583/Project-Eventlk-1",
        image: "/eventlk-cover.png"
    }
];

// Client & Freelance Work
export const freelanceProjects = [
    {
        title: "Rosary Global Booking",
        description: "Designed and deployed a serverless freelance booking platform for a travel agency. Engineered dynamic pricing features, Google Maps API integration, and advanced SEO.",
        tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare"],
        live: "https://rosaryglobal.com", 
        image: "/rosary-cover.png"
    },
    {
        title: "MHM Taxi",
        description: "Developed a comprehensive digital booking platform for a taxi and tour service. Engineered features for ride scheduling, tour package exploration, and optimized mobile-responsive UI for on-the-go users.",
        tech: ["React", "Tailwind CSS", "Booking Architecture"], 
        live: "https://mhmtaxi.com", 
        image: "/mhm-cover.png"
    }
];

// TIER 3: The Developer Archive
export const archiveProjects = [
    {
        year: "2025",
        title: "Real Estate Property Platform",
        builtWith: ["React", "Node.js"],
        link: "https://github.com/hussainmuffallal/estate-agent-react-project"
    },
    {
        year: "2024",
        title: "Multi-User Blog Platform",
        builtWith: ["PHP", "MySQL", "Bootstrap"],
        link: "https://github.com/hussainmuffallal/Blog-Project"
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
        tools: ["MySQL", "Supabase", "Vercel", "Cloudflare", "Git/GitHub"]
    }
];

export const currentlyLearning = [
    "AWS Cloud Foundations",
    "Advanced RAG Architectures",
    "System Design"
];

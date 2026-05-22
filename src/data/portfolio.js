import { Code2, Brain, Smartphone } from "lucide-react";

export const projects = [
    {
        title: "EventLK Platform",
        description: "Engineered the AI/ML backend for a smart event planning platform. Optimized a Random Forest model, boosting prediction accuracy by 2% through custom feature engineering (budget_per_head).",
        tech: ["Python", "Scikit-Learn", "React", "Machine Learning"],
        link: "https://eventlk.com"
    },
    {
        title: "Math Puzzle Mobile App",
        description: "A native mobile application featuring dynamic math puzzles and logic games designed to test and improve cognitive skills and problem-solving.",
        tech: ["Kotlin", "Android Studio", "Mobile UI"],
    },
    {
        title: "Task Management System",
        description: "A streamlined application for tracking daily tasks, managing project milestones, and improving overall personal productivity.",
        tech: ["Python", "Algorithms", "Data Structures"],
    }
];

export const skills = [
    { name: "Full-Stack Development", icon: Code2, level: 90 },
    { name: "AI & Machine Learning", icon: Brain, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 }
];
import React from "react";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    icon: string;
    color: string;
}

const skills: Skill[] = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "bg-gray-100/30 border-yellow-300" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "bg-gray-100/30 border-yellow-300" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "bg-gray-100/30 border-orange-300" },
    { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "bg-gray-100/30 border-cyan-300" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", color: "bg-gray-100/30 border-green-300" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "bg-gray-100/30 border-gray-300" },
    { name: "Vite.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", color: "bg-gray-100/30 border-purple-300" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", color: "bg-gray-100/30 border-gray-300" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "bg-gray-100/30 border-green-300" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "bg-gray-100/30 border-gray-300" },
    { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", color: "bg-gray-100/30 border-blue-300" },
    { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg", color: "bg-gray-100/30 border-blue-300" },
];

const TechStack: React.FC = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-foreground">
                Skills & Technologies
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`${skill.color} aspect-square p-2 rounded-lg border-2 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md`}
                    >
                        <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-8 h-8 mb-1 object-contain"
                        />
                        <span className="text-xs font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
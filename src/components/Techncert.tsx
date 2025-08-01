import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: number;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "🟨", color: "bg-yellow-100 border-yellow-300" },
  { name: "TypeScript", icon: "🔷", color: "bg-blue-100 border-blue-300" },
  { name: "Python", icon: "🐍", color: "bg-green-100 border-green-300" },
  { name: "HTML", icon: "🟧", color: "bg-orange-100 border-orange-300" },
  { name: "CSS", icon: "🎨", color: "bg-blue-100 border-blue-300" },
  { name: "React", icon: "⚛️", color: "bg-cyan-100 border-cyan-300" },
  { name: "Node.js", icon: "🟢", color: "bg-green-100 border-green-300" },
  { name: "Next.js", icon: "▲", color: "bg-gray-100 border-gray-300" },
  { name: "Express", icon: "🚀", color: "bg-gray-100 border-gray-300" },
  { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 border-blue-300" },
  { name: "MongoDB", icon: "🍃", color: "bg-green-100 border-green-300" },
  { name: "Docker", icon: "🐳", color: "bg-blue-100 border-blue-300" },
  { name: "GitHub", icon: "🐙", color: "bg-gray-100 border-gray-300" },
  { name: "Azure DevOps", icon: "☁️", color: "bg-blue-100 border-blue-300" },
  { name: "WordPress", icon: "📝", color: "bg-blue-100 border-blue-300" },
  { name: "Drupal", icon: "💧", color: "bg-blue-100 border-blue-300" },
];

const certifications: Certification[] = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & Amazon Web Services",
    year: 2025,
  },
];

const Techncert: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-foreground">
        Skills & Certifications
      </h2>

      {/* Grid container for side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Tech Stack Card */}
        <Card className="border border-border">
          <CardTitle className="p-5 text-xl md:text-2xl text-center border-b border-border">
            Skills & Technologies
          </CardTitle>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${skill.color} p-4 rounded-lg border-2 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md`}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications Card */}
        <Card className="border border-border">
          <CardTitle className="p-5 text-xl md:text-2xl text-center border-b border-border">
            Certifications
          </CardTitle>
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <motion.li
                  key={cert.title}
                  whileHover={{ x: 5 }}
                  className="bg-background/20 backdrop-blur-sm rounded-lg p-5 border border-border"
                >
                  <span className="block font-semibold text-foreground text-lg">{cert.title}</span>
                  <span className="text-muted-foreground">
                    {cert.issuer} – {cert.year}
                  </span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Techncert;

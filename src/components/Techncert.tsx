import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: number;
}

const skills: Skill[] = [
  { name: "JavaScript" }, { name: "TypeScript" }, { name: "Python" },
  { name: "HTML" }, { name: "CSS" }, { name: "SQL" }, { name: "Bash" },
  { name: "React" }, { name: "React Native" }, { name: "Node.js" },
  { name: "Express" }, { name: "Next.js" },
  { name: "Azure DevOps" }, { name: "GitHub" }, { name: "Docker" },
  { name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" },
  { name: "Drupal 7/9" }, { name: "WordPress" }
];

const certifications: Certification[] = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & Amazon Web Services",
    year: 2025
  }
];

const Techncert: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
      
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
        Skills & Certifications
      </h2>
      
      {/* Grid container for side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        {/* Tech Stack Card */}
        <Card className="border border-gray-200 dark:border-gray-800">
          <CardTitle className="p-5 text-xl md:text-2xl text-center border-b border-gray-200 dark:border-gray-800">
            Tech Stack
          </CardTitle>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/5 dark:bg-white/5 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-center text-sm md:text-base font-medium border border-gray-200/20 dark:border-gray-700/20 shadow-sm"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications Card */}
        <Card className="border border-gray-200 dark:border-gray-800">
          <CardTitle className="p-5 text-xl md:text-2xl text-center border-b border-gray-200 dark:border-gray-800">
            Certifications
          </CardTitle>
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <motion.li
                  key={cert.title}
                  whileHover={{ x: 5 }}
                  className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-gray-200/20 dark:border-gray-700/20"
                >
                  <span className="block font-semibold text-foreground text-lg">
                    {cert.title}
                  </span>
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

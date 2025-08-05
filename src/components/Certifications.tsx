import React from "react";
import { motion } from "framer-motion";

interface Certification {
    title: string;
    issuer: string;
    year: number;
    logo?: string;
    description?: string;
    credentialId?: string;
    verifyUrl?: string;
    skills?: string[];
}

const certifications: Certification[] = [
    {
        title: "Generative AI with Large Language Models",
        issuer: "DeepLearning.AI & Amazon Web Services",
        year: 2025,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        description: "Comprehensive course covering transformer architectures, fine-tuning, and deployment of large language models",
        credentialId: "H5Q8F063Y335",
        verifyUrl: "https://coursera.org/verify/H5Q8F063Y335",
        skills: ["Machine Learning", "Scalability", "AWS", "Python", "LLMs", "Artificial Intelligence",],
    },
];

const Certifications: React.FC = () => {
    return (
        <section className="w-full max-w-[800px] mx-auto px-4 py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-foreground">
                Certifications
            </h2>

            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden bg-card from-background/50 to-background/30 backdrop-blur-sm rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Header with logo and basic info */}
                        <div className="p-6 border-b border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {cert.logo?.startsWith('http') ? (
                                        <img
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-12 h-12 object-contain"
                                        />
                                    ) : (
                                        <span className="text-3xl">{cert.logo}</span>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-foreground mb-1 leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-muted-foreground font-medium">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Completed: {cert.year}
                                    </p>
                                </div>

                                {/* Badge */}
                                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                    Verified
                                </div>
                            </div>

                            {cert.description && (
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            )}
                        </div>

                        {/* Skills and actions */}
                        <div className="p-6">
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Gained:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                {cert.credentialId && (
                                    <div>
                                        <span className="text-xs text-foreground">Credential ID: </span>
                                        <span className="text-xs font-mono text-foreground">{cert.credentialId}</span>
                                    </div>
                                )}

                                {cert.verifyUrl && (
                                    <motion.a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        <span>Verify Certificate</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
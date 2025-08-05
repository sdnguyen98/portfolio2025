import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceTabs from "@/components/about/experienceTabs";
import LucyHero from "@/components/mvpblocks/mockup-hero";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";

const About = () => {
    return (
        <div className="p-4 md:p-8 w-full max-w-full overflow-x-hidden">
            <div className="mx-auto container">
                <LucyHero />

                {/* Experience and Certifications - 1 column on mobile, 2 columns on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                    <ExperienceTabs />
                    <Certifications />
                </div>

                <TechStack />
                <AppleCardsCarousel />
            </div>
        </div>
    );
};

export default About;

import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceTabs from "../components/about/experienceTabs";
import LucyHero from "../components/mvpblocks/mockup-hero";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import Techncert from "@/components/Techncert";

const About = () => {
    return (
        <div className="p-4 md:p-8 w-full max-w-full overflow-x-hidden">
            <div className="mx-auto container">
                <LucyHero />
                <Techncert />
                <ExperienceTabs />
                <AppleCardsCarousel />
            </div>
        </div>
    );
};

export default About;

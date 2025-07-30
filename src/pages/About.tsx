import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import AnimatedSection from "../components/SectionAnimation";
import ExperienceTabs from "../components/about/experienceTabs";
import LucyHero from "../components/mvpblocks/mockup-hero";
import Projects from "./Projects";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const About = () => {
    return (

        // <AnimatedSection>

        <div className="p-8">
            <LucyHero />
            <ExperienceTabs />
            <Projects />
        </div>
        


    );
};

export default About;
import { useState } from "react";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import AnimatedSection from "../components/SectionAnimation";
import ExperienceTabs from "../components/about/experienceTabs";

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
            
            <div className="flex items-center gap-8">
                {/* Text on the left */}
                               <div className="w-1/6 rounded-lg border-4 flex-shrink-0">
                    <img
                        src="images/steven_icon.jpg"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
                </div>
                
                <div className="text-left">
                    <h2 className="text-[3.2rem] mb-4">About Me</h2>
                    <p className="text-[1.2rem] leading-[1.6]">
                        Software Developer with hands-on experience building and maintaining web applications, digital platforms, and automated solutions.
                        Adept at translating complex requirements into scalable, maintainable code. Known for strong team leadership, Agile collaboration,
                        and a focus on performance, accessibility, and end-user experience
                    </p>
                </div>

                {/* Image on the right */}
 
            </div>
            <ExperienceTabs />
        </div>


    );
};

export default About;
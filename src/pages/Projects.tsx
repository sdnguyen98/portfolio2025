import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedBackground from "./components/animatedBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null); // Track hovered project

  // Project data
  const projectDescriptions: { [key: string]: string } = {
    project1: "Lead a team of developers to create the new engineering website for Oregon State University",
    project2: "The fast, easy and free tool for making digital scrapbooking layouts",
    project3: "Application that quizzes you on your knowledge of any Spotify playlist",
    project4: "Need to make reservation at Oregon State University Gym",
    project5: "Want to get the .CSV of your Age of Empire 2 Analytics",
  };

  const projectImages: { [key: string]: string } = {
    project1: "../media/osu.gif",
    project2: "https://placecats.com/300/200",
    project3: "https://placecats.com/300/200",
    project4: "../media/benny.gif",
    project5: "../media/villager.gif",
  };

  // Project names
  const projectNames: { [key: string]: string } = {
    project1: "Oregon State University College of Engineering",
    project2: "Scrapbook Maker",
    project3: "Spotify Quiz",
    project4: "Gym Reservation",
    project5: "Age of Empires Analytics Scrapper",
  };

  return (
    <div className="projects-container">
      <a id="Projects"></a>
      <h1 className="text-5xl">Projects</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <Card>
            <HoverCard>
              <HoverCardTrigger>
                <CardContent>
                  <AccordionTrigger><h2>Oregon State University College of Engineering Websites</h2></AccordionTrigger>
                  <AccordionContent className="text-left relative">
                    <p className="pb-5">Lead a team of developers to create the new engineering website for Oregon State University </p>
                    <a href="https://engineering.oregonstate.edu/" target="_blank" className="absolute bottom-0 left-0 font-bold text-white">
                      [Website]
                    </a>
                  </AccordionContent>
                </CardContent>
              </HoverCardTrigger>
              <HoverCardContent>
              <img
                        src="../media/osu.gif"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
              </HoverCardContent>
            </HoverCard>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-2">
          <Card>
            <CardContent>
              <AccordionTrigger>Scrapbook Maker</AccordionTrigger>
              <AccordionContent className="text-left">The fast, easy and free tool for making digital scrapbooking layouts
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-3">
          <Card>
            <CardContent>
              <AccordionTrigger>Spotify Quiz</AccordionTrigger>
              <AccordionContent className="text-left">Application that quizzes you on your knowledge of any Spotify playlist
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-4">
          <Card>
            <CardContent>
              <AccordionTrigger>Gym Reservation</AccordionTrigger>
              <AccordionContent className="text-left">Need to make reservation at Oregon State University Gym
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-5">
          <Card>
            <CardContent>
              <AccordionTrigger>Age of Empires Analytics Scrapper</AccordionTrigger>
              <AccordionContent className="text-left">Want to get the .CSV of your Age of Empire 2 Analytics
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Projects;

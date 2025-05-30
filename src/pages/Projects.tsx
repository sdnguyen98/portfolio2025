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
import React from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null); // Track hovered project

  // State to track mouse position for each card
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  // Handler for mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handler for mouse leave
  const handleMouseLeave = () => setHoverPos(null);

  return (
    <div className="projects-container">
      <a id="Projects"></a>
      <h1 className="text-5xl">Projects</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <Card>
            <HoverCard>
              <HoverCardTrigger
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ width: "100%" }}
              >
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
              <HoverCardContent
                style={
                  hoverPos
                    ? {
                        position: "absolute",
                        left: hoverPos.x,
                        top: hoverPos.y,
                        pointerEvents: "none",
                        zIndex: 1000,
                        transform: "translate(-150%, -100%)",
                      }
                    : { display: "none" }
                }
              >
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
          <HoverCard>
          <HoverCardTrigger
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ width: "100%" }}
          >
            <CardContent>
              <AccordionTrigger>Scrapbook Maker</AccordionTrigger>
              <AccordionContent className="text-left">The fast, easy and free tool for making digital scrapbooking layouts
              </AccordionContent>
            </CardContent>
            </HoverCardTrigger>
              <HoverCardContent
                style={
                  hoverPos
                    ? {
                        position: "absolute",
                        left: hoverPos.x,
                        top: hoverPos.y,
                        pointerEvents: "none",
                        zIndex: 1000,
                        transform: "translate(-150%, -100%)",
                      }
                    : { display: "none" }
                }
              >
              <img
                        src="../media/villager.gif"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
              </HoverCardContent>
            </HoverCard>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-3">
          <Card>
          <HoverCard>
          <HoverCardTrigger
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ width: "100%" }}
          >
            <CardContent>
              <AccordionTrigger>Spotify Quiz</AccordionTrigger>
              <AccordionContent className="text-left">Application that quizzes you on your knowledge of any Spotify playlist
              </AccordionContent>
            </CardContent>
            </HoverCardTrigger>
              <HoverCardContent
                style={
                  hoverPos
                    ? {
                        position: "absolute",
                        left: hoverPos.x,
                        top: hoverPos.y,
                        pointerEvents: "none",
                        zIndex: 1000,
                        transform: "translate(-150%, -100%)",
                      }
                    : { display: "none" }
                }
              >
              <img
                        src="../media/villager.gif"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
              </HoverCardContent>
            </HoverCard>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-4">
          <Card>
          <HoverCard>
          <HoverCardTrigger
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ width: "100%" }}
          >
            <CardContent>
              <AccordionTrigger>Gym Reservation</AccordionTrigger>
              <AccordionContent className="text-left">Need to make reservation at Oregon State University Gym
              </AccordionContent>
            </CardContent>
            </HoverCardTrigger>
              <HoverCardContent
                style={
                  hoverPos
                    ? {
                        position: "absolute",
                        left: hoverPos.x,
                        top: hoverPos.y,
                        pointerEvents: "none",
                        zIndex: 1000,
                        transform: "translate(-150%, -100%)",
                      }
                    : { display: "none" }
                }
              >
              <img
                        src="../media/villager.gif"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
              </HoverCardContent>
            </HoverCard>
          </Card>
        </AccordionItem>
        <AccordionItem value="item-5">
          <Card>
          <HoverCard>
          <HoverCardTrigger
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ width: "100%" }}
          >
            <CardContent>
              <AccordionTrigger>Age of Empires Analytics Scrapper</AccordionTrigger>
              <AccordionContent className="text-left">Want to get the .CSV of your Age of Empire 2 Analytics
              </AccordionContent>
            </CardContent>
            </HoverCardTrigger>
              <HoverCardContent
                style={
                  hoverPos
                    ? {
                        position: "absolute",
                        left: hoverPos.x,
                        top: hoverPos.y,
                        pointerEvents: "none",
                        zIndex: 1000,
                        transform: "translate(-150%, -100%)",
                      }
                    : { display: "none" }
                }
              >
              <img
                        src="../media/villager.gif"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover rounded-lg"

                    />
              </HoverCardContent>
            </HoverCard>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Projects;

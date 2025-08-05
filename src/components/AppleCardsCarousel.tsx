"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Define types for card data
export interface CardData {
  title: string;
  src: string;
  content: React.ReactNode;
}

// Define props interface for the component
interface AppleCardsCarouselProps {
  title?: string;
  cards?: CardData[];
  className?: string;
}

// Project links component
const ProjectLinks = ({ sourceUrl, demoUrl }: { sourceUrl: string; demoUrl: string }) => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card hover:bg-card/80 text-primary font-medium px-5 py-2 rounded-full border border-primary/20 transition-colors flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
      Source Code
    </a>
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 py-2 rounded-full transition-colors flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-external-link"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
      Live Demo
    </a>
  </div>
);

// OsuContent component with buttons
const OsuContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">OSU College of Engineering</span> Developed and
      maintained website solutions for Oregon State University's College of Engineering, focusing on
      accessibility, performance, and modern design principles.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Drupal
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        PHP
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        JavaScript
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        SASS
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Accessibility
      </span>
    </div>
    <img
      src="/media/osu.gif"
      alt="OSU College of Engineering website mockup"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/username/osu-project"
      demoUrl="https://engineering.oregonstate.edu/"
    />
  </div>
);

// ScrapbookContent component with buttons
const ScrapbookContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">Scrapbook Maker</span> A React-based digital
      scrapbooking application that allows users to create and share personalized digital memories
      with drag-and-drop functionality and export options.
    </p>
    <ul className="text-card-foreground text-sm md:text-base space-y-2 mb-6 list-disc pl-5">
      <li>Canvas-based drag and drop interface</li>
      <li>Image filtering and transformation tools</li>
      <li>Cloud storage integration</li>
      <li>Social sharing capabilities</li>
    </ul>
    <img
      src="https://assets.aceternity.com/demos/mockup-desktop.png"
      alt="Scrapbook Maker application interface"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/username/scrapbook-maker"
      demoUrl="https://scrapbook-demo.example.com"
    />
  </div>
);

// SpotifyQuizContent component with buttons
const SpotifyQuizContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">Spotify Quiz</span> An interactive web application
      that analyzes users' Spotify listening habits and creates personalized music quizzes based on
      their favorite artists and tracks.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="flex flex-col items-center">
        <div className="text-primary text-xl font-bold">Spotify API</div>
        <div className="text-card-foreground text-xs text-center">Integration</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-primary text-xl font-bold">React</div>
        <div className="text-card-foreground text-xs text-center">Frontend</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-primary text-xl font-bold">Node.js</div>
        <div className="text-card-foreground text-xs text-center">Backend</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-primary text-xl font-bold">OAuth</div>
        <div className="text-card-foreground text-xs text-center">Authentication</div>
      </div>
    </div>
    <img
      src="https://assets.aceternity.com/demos/dashboard-mockup.png"
      alt="Spotify Quiz dashboard"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/username/spotify-quiz"
      demoUrl="https://spotify-quiz.example.com"
    />
  </div>
);

// GymReservationContent component with buttons
const GymReservationContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">Gym Reservation System</span> A full-stack
      application for fitness centers that enables members to book equipment, classes, and
      facilities while helping staff manage capacity and scheduling.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        React Native
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Express
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        MongoDB
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Push Notifications
      </span>
    </div>
    <img
      src="https://assets.aceternity.com/demos/mobile-mockups.png"
      alt="Gym Reservation mobile app screens"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/username/gym-reservation"
      demoUrl="https://gym-reservation.example.com"
    />
  </div>
);

// AoeAnalyticsContent component with buttons
const AoeAnalyticsContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">Age of Empires Analytics</span> A data scraping and
      visualization tool for Age of Empires players that collects match statistics, analyzes
      gameplay patterns, and provides strategic insights to improve player performance.
    </p>
    <ul className="text-card-foreground text-sm md:text-base space-y-2 mb-6 list-disc pl-5">
      <li>Automated data collection from game APIs</li>
      <li>Interactive data visualizations with D3.js</li>
      <li>Personalized strategy recommendations</li>
      <li>Historical performance tracking</li>
    </ul>
    <img
      src="https://assets.aceternity.com/demos/analytics-dashboard.png"
      alt="Age of Empires Analytics dashboard"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/username/aoe-analytics"
      demoUrl="https://aoe-analytics.example.com"
    />
  </div>
);

// Default sample data with custom content for each project
const defaultCards: CardData[] = [
  {
    title: "Oregon State University College of Engineering Websites",
    src: "/media/osuweb.jpg",
    content: <OsuContent />,
  },
  {
    title: "Scrapbook Maker",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ScrapbookContent />,
  },
  {
    title: "Spotify Quiz",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <SpotifyQuizContent />,
  },
  {
    title: "Gym Reservation",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GymReservationContent />,
  },
  {
    title: "Age of Empires Analytics Scrapper",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AoeAnalyticsContent />,
  },
];

export function AppleCardsCarousel({
  title = "Featured Projects",
  cards = defaultCards,
  className = "w-full h-full py-20",
}: AppleCardsCarouselProps) {
  const cardElements = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className={className}>
      {title && (
        <h2 className="max-w-7xl pl-4 mx-auto text-foreground text-xl md:text-5xl font-bold dark:text-foreground font-sans">
          <a id="Projects"></a>
          {title}
        </h2>
      )}
      <Carousel items={cardElements} />
    </div>
  );
}

// Export the default cards and content components for easier customization
export {
  defaultCards,
  OsuContent,
  ScrapbookContent,
  SpotifyQuizContent,
  GymReservationContent,
  AoeAnalyticsContent,
};

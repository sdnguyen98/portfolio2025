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

// Project links component - conditionally renders buttons
const ProjectLinks = ({ sourceUrl, demoUrl }: { sourceUrl?: string; demoUrl?: string }) => {
  // Don't render anything if neither URL is provided
  if (!sourceUrl && !demoUrl) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {sourceUrl && (
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
      )}
      {demoUrl && (
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
          Visit Site
        </a>
      )}
    </div>
  );
};

// OsuContent component with buttons
const OsuContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      Led a Drupal 9 migration and developed accessible, high-performance websites for 15,000+ monthly users,
      focusing on modern design, performance optimization, and compliance with enterprise standards.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Drupal
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        PHP
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        HTML
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        CSS
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        COTS
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
      demoUrl="https://engineering.oregonstate.edu/"
    />
  </div>
);

// ScrapbookContent component with buttons
const ScrapbookContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      A JavaScript-powered digital scrapbook editor with support for .PSD files, enabling users to create and customize multi-layered designs. Developed the user interface and debugged core interaction logic to ensure smooth editing workflows.
      Key features include image placement, text editing, and layered content management, designed to provide an intuitive and responsive editing experience.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">

      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        JavaScript
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        PHP
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        CSS
      </span>
    </div>
    <img
      src="media/scrapbookmaker.jpg"
      alt="Scrapbook Maker application interface"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/sdnguyen98/miniPaint"
      demoUrl="https://www.digitalscrapbook.com/maker/"
    />
  </div>
);

// SpotifyQuizContent component with buttons
const SpotifyQuizContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      A React-based quiz application that leverages the Spotify API to create engaging, music-themed quizzes.
      The app dynamically fetches playlist content, including tracks, albums, and artists, and generates interactive questions to test user knowledge.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        React
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Node.js
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        JavaScript
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        OAuth
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Spotify API
      </span>
    </div>

    <img
      src="media/spotifyquiz.jpg"
      alt="Spotify Quiz dashboard"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/RoryMoeller/spotify-quiz"
      demoUrl="https://rorymoeller.github.io/spotify-quiz/#/home"
    />
  </div>
);

// GymReservationContent component with buttons
const GymReservationContent = () => (
  <div className="bg-card/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl mb-4 border border-border/30">
    <p className="text-card-foreground text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
      <span className="font-bold text-primary">Gym Reservation System</span> A Python-based automation tool that streamlines the process of booking high-demand gym reservations.
      The bot securely handles authentication, navigates scheduling workflows, and submits forms without manual input.
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Python
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        Selenium
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
        HTML
      </span>
    </div>
    <img
      src="/media/gymreservation.jpg"
      alt="Gym Reservation mobile app screens"
      height="500"
      width="500"
      className="md:w-2/3 h-auto mx-auto object-contain rounded-lg shadow-md"
    />
    <ProjectLinks
      sourceUrl="https://github.com/sdnguyen98/GymReservation"
    />
  </div>
);

// Carousel with cards
const defaultCards: CardData[] = [
  {
    title: "Oregon State University College of Engineering Websites",
    src: "/media/osuweb.jpg",
    content: <OsuContent />,
  },
  {
    title: "Scrapbook Maker",
    src: "media/sbweb.jpg",
    content: <ScrapbookContent />,
  },
  {
    title: "Spotify Quiz",
    src: "media/spotifyweb.jpg",
    content: <SpotifyQuizContent />,
  },
  {
    title: "Gym Reservation",
    src: "/media/gymweb.jpg",
    content: <GymReservationContent />,
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
};

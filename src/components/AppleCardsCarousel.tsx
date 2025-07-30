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

// Default dummy content component
const DummyContent: React.FC = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

// Default sample data
const defaultCards: CardData[] = [
  {
    title: "Oregon State University College of Engineering Websites",
    src: "/media/osuweb.jpg",
    content: <DummyContent />,
  },
  {
    title: "Scrapbook Maker",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Spotify Quiz",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Gym Reservation",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Age of Empires Analytics Scrapper",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
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
        <h2 className="max-w-7xl pl-4 mx-auto text-foreground mb-6 text-xl md:text-5xl font-bol dark:text-neutral-200 font-sans">
          {title}
        </h2>
      )}
      <Carousel items={cardElements} />
    </div>
  );
}

// Export the default cards and DummyContent for easier customization
export { defaultCards, DummyContent };
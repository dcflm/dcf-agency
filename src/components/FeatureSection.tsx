"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import image1 from "../imgs/mockup.jpeg";
import image2 from "../imgs/inin.png";

const imageUrls = [
  "imgs/kart1.png",
  "imgs/kart2.png",
  "imgs/kart3.png",
  "imgs/kart4.png",
];

export const FeaturePage = () => {
  return (
    <>
      <div className="relative bg-indigo-50">
        {" "}
        {/* Removed h-fit to ensure div takes only necessary space */}
        <Features />
      </div>

      {/* Removed h-[50vh] to eliminate forced height that might create unnecessary space */}
      <div className="bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 bg-slate-100">
      {" "}
      {/* Added py-12 for padding and ensure full height is utilized */}
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex flex-col justify-center w-full py-12 font-sans bg-slate-100 md:sticky md:top-0 md:h-screen">
      {" "}
      {/* Adjusted classes for alignment and spacing */}
      <span className="rounded-full w-fit bg-indigo-500 px-4 mr-9 py-2 text-sm text-indigo-100 uppercase">
        Neue Horizonte
      </span>
      <h2 className="mt-2 mb-4 text-5xl font-semibold leading-tight">
        Designlösungen
      </h2>
      <p className="text-lg text-indigo-950">
        Wir bieten maßgeschneiderte Designlösungen, die Ihre Marke hervorheben
        und den Nutzer in den Mittelpunkt stellen. Unser Ziel ist es, durch
        ansprechendes Design und intuitive Benutzererfahrungen den Wert Ihrer
        Produkte und Dienstleistungen zu steigern.{" "}
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full bg-slate-100">
      <Gradient />
      <div
        ref={ref}
        className="relative z-0 flex flex-col gap-6 bg-slate-100 md:gap-12"
      >
        {imageUrls.map((url, i) => (
          <CarouselItem
            scrollYProgress={scrollYProgress}
            position={i + 1}
            numItems={imageUrls.length}
            key={i}
            imageUrl={url} // Assuming imageUrl prop is properly handled within CarouselItem
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

interface CarouselItemProps {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  imageUrl: string;
}

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  imageUrl,
}: CarouselItemProps) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="relative w-full h-0 pb-[100%] shrink-0 rounded-2xl bg-neutral-900" // Use padding-bottom trick for square aspect ratio
    >
      <img
        src={imageUrl}
        alt="Carousel Feature"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl" // Positioning to cover the square
      />
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 h-24 w-full bg-gradient-to-b from-indigo-50 to-transparent md:block" /> // Adjusted gradient to fade to transparent
);

const Buffer = () => <div className="h-24 bg-slate-100 md:h-48" />; // Adjusted Buffer for spacing at the bottom

export default FeaturePage;

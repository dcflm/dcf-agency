"use client";
import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FiArrowRight, FiAward, FiCalendar, FiDatabase } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiChatSmile3Fill } from "react-icons/ri";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
    </>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>STARTEN</span>
        <FiArrowRight />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    Icon: FiCalendar,
    title: "Immer pünktlich",
    description:
      "Wir priorisieren effiziente Arbeitsabläufe, um Ihre Fristen ohne Qualitätsverlust einzuhalten. Unsere Hingabe zur Pünktlichkeit stellt sicher, dass Ihre Projekte termingerecht abgeschlossen werden.",
    ctaClasses: "bg-violet-300",
    routeTo: "/",
  },
  {
    id: 2,
    Icon: FaArrowTrendUp,
    title: "Bahnbrechende Kreativität",
    description:
      "Wir bleiben durch die Integration der neuesten Trends und Technologien in unsere Arbeit an der Spitze. Unser innovativer Ansatz bedeutet, dass Ihre Projekte nicht nur abgeschlossen, sondern in etwas Außergewöhnliches verwandelt werden.",
    ctaClasses: "bg-pink-300",
    routeTo: "/",
  },
  {
    id: 3,
    Icon: RiChatSmile3Fill,
    title: "Offen und Ehrlich",
    description:
      "Wir glauben an klare, transparente Kommunikation von Anfang bis Ende. Sie werden immer über den Fortschritt Ihrer Projekte informiert sein, was sicherstellt, dass Ihre Eingaben wertgeschätzt und im Endergebnis widergespiegelt werden.",
    ctaClasses: "bg-red-300",
    routeTo: "/",
  },
  {
    id: 4,
    Icon: FiAward,
    title: "Kundenzufriedenheit",
    description:
      "Unser Engagement für Exzellenz hat zu einer hohen Kundenzufriedenheitsrate geführt. Wir sind stolz darauf, langfristige Beziehungen zu unseren Kunden zu pflegen, die unsere Liebe zum Detail und unseren Kundenservice schätzen.",
    ctaClasses: "bg-amber-300",
    routeTo: "/",
  },
];

export default AboutSection;

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import logoCreating from "../imgs/logoCreating.jpeg";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-neutral-900 pb-10" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl h-2/5">
          <p className="mb-4 text-2xl font-semibold text-slate-100">
            Alles. <span className="text-slate-500">Ja, sogar das.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default Carousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: "../imgs/kart1.png",
    category: "Design",
    title: "Logo-Erstellung",
    description:
      "Einzigartiges, unvergessliches Logodesign, um Ihre Markenidentität zu etablieren.",
  },
  {
    id: 2,
    url: "../imgs/kart2.png",
    category: "UI/UX",
    title: "App-Mockups",
    description:
      "Interaktive App-Prototypen zur Visualisierung der Benutzererfahrung.",
  },
  {
    id: 3,
    url: "../imgs/kart3.png",
    category: "Design",
    title: "Posterdesign",
    description:
      "Blickfangende Poster, die Ihre Botschaft effektiv kommunizieren.",
  },
  {
    id: 4,
    url: "/imgs/kart4.png",
    category: "UI/UX",
    title: "Landing-Pages",
    description:
      "Hochkonvertierende Landing-Pages, zugeschnitten auf Ihr Publikum.",
  },
  {
    id: 5,
    url: "/imgs/kart5.png",
    category: "Branding",
    title: "Markenentwicklung",
    description:
      "Umfassende Branding-Lösungen, um Ihre Marktpräsenz zu verstärken.",
  },
  {
    id: 6,
    url: "/imgs/kart6.png",
    category: "Design",
    title: "Logo-Aktualisierung",
    description:
      "Erneuern Sie Ihr bestehendes Logo, um Ihre Marke zu modernisieren.",
  },
  {
    id: 7,
    url: "/imgs/kart7.png",
    category: "Design",
    title: "Design-Beratung",
    description:
      "Professionelle Beratung zur Optimierung Ihres visuellen Auftritts und Designs.",
  },
];

"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiSliders,
  FiChevronLeft,
  FiChevronRight,
  FiTerminal,
  FiTarget,
  FiTool,
  FiDollarSign,
} from "react-icons/fi";

const AdvantagesPage = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-slate-100 px-4 py-12 mb-0"> {/* Remove additional space at the bottom */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between items-center gap-4"> {/* Adjust the gap and margin if necessary */}
          <h2 className="text-4xl text-slate-800 font-bold leading-[1.2] md:text-5xl">
            Wir sind gut. <span className="text-neutral-400">Hier ist der Grund.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-gradient-to-br from-violet-600 to-violet-400 p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-gradient-to-br from-violet-600 to-violet-400 p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4"> {/* Check this for overflow or unnecessary space */}
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Feature = ({
  position,
  index,
  title,
  description,
  Icon,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${index % 2 ? "bg-violet-600 text-white" : "bg-white text-black"} `}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default AdvantagesPage;

const features = [
  {
    title: "Persönlicher Ansatz",
    description: "Individuelle Beratung und maßgeschneiderter Service, der sich an Ihren spezifischen Bedürfnissen orientiert.",
    Icon: FiSliders,
  },
  {
    title: "Gewinnsteigerung",
    description: "Unsere optimierten Web-Lösungen fördern die Konversionsraten und maximieren Ihren Profit.",
    Icon: FiDollarSign,
  },
  {
    title: "Hochwertiger Code",
    description: "Saubere, effiziente und wartbare Code-Basis für eine leichte Skalierbarkeit und Anpassung.",
    Icon: FiTerminal,
  },
  {
    title: "Zielgerichtete Lösungen",
    description: "Maßgeschneiderte Strategien, die genau auf Ihre Zielgruppe und Geschäftsziele abgestimmt sind.",
    Icon: FiTarget,
  },
  {
    title: "Technischer Support",
    description: "Zuverlässiger technischer Support, der sicherstellt, dass Ihre Webseite stets reibungslos funktioniert.",
    Icon: FiTool,
  },
];


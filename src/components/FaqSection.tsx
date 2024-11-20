"use client";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import anime from "animejs";
import { useAnimation, useInView, motion } from "framer-motion";

const FaqSektion = () => {
  return (
    <div className="px-4 py-12 h-screen flex justify-center items-center">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h3 className="mb-4 text-center text-3xl font-semibold">
            Häufig gestellte Fragen
          </h3>
        </Reveal>
        <Reveal>
          <div>
            <Question
              title="Was beinhaltet der Designentwicklungsprozess?"
              defaultOpen
            >
              <p>
                Unser Prozess beinhaltet Forschung, Konzepterstellung,
                Designentwicklung und finale Korrekturen, um Ihre Bedürfnisse
                und Ziele zu erfüllen.
              </p>
            </Question>
            <Question title="Wie lange dauert die Erstellung eines Designs?">
              <p>
                Die Dauer eines Projekts hängt von seiner Komplexität und dem
                Umfang ab, aber wir bemühen uns immer, effizient zu arbeiten, um
                Ihre Fristen einzuhalten.
              </p>
            </Question>
            <Question title="Welche Materialien muss ich bereitstellen?">
              <p>
                Um zu beginnen, benötigen wir Ihr Briefing, Logos, Corporate
                Designs und alle anderen Materialien, die Sie für das Projekt
                als notwendig erachten.
              </p>
            </Question>
            <Question title="Kann ich eigene Designideen einbringen?">
              <p>
                Selbstverständlich sind wir immer offen für Ihre Vorschläge und
                Ideen. Ihre Vision hilft uns, ein Design zu erstellen, das
                perfekt zu Ihren Wünschen und Zielen passt.{" "}
              </p>
            </Question>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

interface RevealProps {
  children: JSX.Element;
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
      />
    </div>
  );
};

export default FaqSektion;

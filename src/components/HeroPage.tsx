"use client";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import WaterButton from "./WaterButton";
import { FiArrowRight, FiGitPullRequest, FiArrowUpRight } from "react-icons/fi";
import { HLogo } from "@/media";

const CardWrapper = () => {
  return (
    <div className="p-8 flex flex-col md:flex-row justify-center items-center overflow-auto bg-slate-100 text-black gap-8 md:gap-12 h-auto md:h-screen">
      <div className="relative px-8 py-24 flex flex-col items-center md:items-start md:px-12 md:py-32 w-full md:max-w-md lg:max-w-lg text-center md:text-left">
        <Reveal>
          <h1 className="pointer-events-auto text-6xl font-black text-slate-800 md:text-8xl pl-2 md:pl-0">
            DCF<span className="text-indigo-500">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl pl-2 md:pl-0">
            <span className="font-semibold text-indigo-500">
              Willkommen bei DCF Agency
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="pointer-events-auto max-w-xl text-sm text-slate-600 md:text-base pl-2 md:pl-0">
            Ihrem verlässlichen Partner für die Erstellung moderner
            Landing-Pages für Unternehmen. Im digitalen Zeitalter wird der erste
            Eindruck Ihres Unternehmens online geformt, und es ist unsere
            Aufgabe, diesen Eindruck unvergesslich zu machen.
          </p>
        </Reveal>
        <WaterButton />
      </div>
      <Reveal>
        <div className="w-full mt-12 md:mt-0 md:flex-1 max-w-xl">
          <ThreeDHoverScreenCard />
        </div>
      </Reveal>
    </div>
  );
};

const ThreeDHoverScreenCard = () => {
  return (
    <motion.div whileHover="hovered" className="cursor-pointer">
      <ScreenMock />
      <CardCopy />
    </motion.div>
  );
};

const ScreenMock = () => {
  return (
    // Light Gradient Background
    <motion.div
      variants={{
        hovered: {
          rotateY: "15deg",
          rotateX: "2.5deg",
          x: -10,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: 0.35,
      }}
      className="w-full h-80 rounded-2xl p-4 bg-gradient-to-br from-violet-300 to-indigo-300"
    >
      {/* Browser Screen */}
      <div
        style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        className="w-full h-full bg-slate-900 rounded-xl shadow-lg p-2 relative"
      >
        {/* Browser Buttons */}
        <div className="flex gap-1 mt-1 relative">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        {/* Browser Mockup */}
        <div
          style={{
            transformStyle: "preserve-3d",
          }}
          className="p-2 rounded-md absolute top-8 bottom-2 left-2 right-2 bg-slate-800 grid gap-4 grid-cols-6 grid-rows-6"
        >
          <div
            style={{ transform: "translateZ(40px)" }}
            className="rounded-lg w-full col-span-6 row-span-1 bg-slate-700"
          />
          <div
            style={{ transform: "translateZ(20px)" }}
            className="rounded-lg w-full col-span-1 row-span-5 bg-slate-700"
          />
          <div
            style={{ transform: "translateZ(80px)" }}
            className="rounded-lg w-full col-span-3 row-span-5 bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"
          >
            <HLogo />
          </div>
          <div
            style={{ transform: "translateZ(120px)" }}
            className="rounded-lg w-full col-span-2 row-span-5 bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center"
          >
            <FiArrowUpRight className="text-slate-100 text-7xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CardCopy = () => {
  return (
    <div className="flex items-center mt-6">
      <motion.div
        variants={{
          hovered: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          x: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <FiArrowRight className="text-2xl mr-4" />
      </motion.div>
      <motion.div
        variants={{
          hovered: {
            x: 0,
          },
        }}
        style={{
          x: -40,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <h4 className="text-2xl font-bold mb-1">Modernes Design</h4>
        <span className="text-slate-400">
          Wir bleiben an der Spitze der Design-Trends, um sicherzustellen, dass
          Ihre Landing-Pages nicht nur Aufmerksamkeit erregen, sondern auch die
          Besucher binden und zu Kunden konvertieren.
        </span>
      </motion.div>
    </div>
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

export default CardWrapper;

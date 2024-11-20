"use client";
import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";
import { FaHandshake, FaLaptopCode } from "react-icons/fa";

const HowItWorksPage = () => {
  return (
    <>
      <SwapColumnFeatures />
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> println(
          <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
            "{featureInView.title}"
          </span>{" "}
          );
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default HowItWorksPage;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Design",
    title: "Design-Kreation",
    description:
      "In dieser Phase bestimmt unser Team die Zielgruppe der Website und erstellt ein individuelles Design, das deren Bedürfnisse und Erwartungen entspricht. Wir legen besonderen Wert auf visuelle Elemente, Farbschemata und die Benutzerfreundlichkeit der Navigation, um maximales Engagement der Besucher vom ersten Moment an zu gewährleisten.",
    contentPosition: "r",
    Icon: FiEye,
  },
  {
    id: 2,
    callout: "Teamwork",
    title: "Kundenfeedback",
    description:
      "In dieser Phase arbeiten wir eng mit dem Kunden zusammen, indem wir ihm Prototypen und Entwürfe zur Überprüfung vorlegen. Das Feedback des Kunden ist für uns sehr wichtig, da es uns ermöglicht, Änderungen am Projekt vorzunehmen, um sicherzustellen, dass das Endprodukt seinen Erwartungen und Geschäftszielen vollständig entspricht.",
    contentPosition: "l",
    Icon: FaHandshake,
  },
  {
    id: 3,
    callout: "Let's code",
    title: "Schreiben des Codes",
    description:
      "Nach der Genehmigung des Designs beginnt die Entwicklungsphase, in der unsere Entwickler die Entwürfe in eine funktionierende Website umwandeln. Wir verwenden fortschrittliche Webentwicklungstechnologien und -praktiken, um eine schnelle, zuverlässige und responsive Landing-Page zu erstellen, die auf allen Gerätetypen perfekt angezeigt wird.",
    contentPosition: "r",
    Icon: FaLaptopCode,
  },
  {
    id: 4,
    callout: "Wachstum",
    title: "Cha-ching!",
    description:
      "In der abschließenden Phase konzentrieren wir uns auf die Optimierung der Landing-Page für Suchmaschinen, die Verbesserung des Benutzererlebnisses und die Erhöhung der Konversionsrate. Wir analysieren das Nutzerverhalten, führen A/B-Tests durch und implementieren effektive Handlungsaufforderungen. All dies zielt darauf ab, den Gewinn und das Vertrauen in Ihr Unternehmen zu steigern und Ihnen einen Wettbewerbsvorteil auf dem Markt zu sichern.",
    contentPosition: "l",
    Icon: FiDollarSign,
  },
];

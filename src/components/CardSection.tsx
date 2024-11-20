"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
} from "react-icons/si";

const CardPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-24 px-4 mt-14 mb-14 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl font-semibold">What our customers think</h3>
        <p className="text-slate-500 my-4">
          Customer testimonials are a reflection of our excellence in the world
          of code and development.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <Icon className="text-7xl mx-auto" />
      <p className="text-lg lg:text-xl font-light italic my-8">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default CardPage;

interface Testimonial {
  Icon: IconType;
  title: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    Icon: SiNike,
    description:
      "Collaborating with VLCode exceeded all expectations. Their creativity and technical mastery brought a fresh perspective to our marketing.",
    name: "Jane Dodson",
    title: "Marketing Director, Nike",
  },
  {
    Icon: SiAtlassian,
    description:
      "VLCode is not just a development team; they are guides in the realm of code and user experience.",
    name: "Johnathan Rodriguez",
    title: "UX Research, Atlassian",
  },
  {
    Icon: SiDribbble,
    description:
      "Partnering with VLCode is a glimpse into the future of development. Their engineering expertise creates standout products.",
    name: "Phil Heath",
    title: "Staff Engineer, Dribbble",
  },
  {
    Icon: SiGrubhub,
    description:
      "VLCode is more than developers; they are a strategic partner fluent in the language of innovation in the tech world.",
    name: "Andrea Beck",
    title: "Marketing Manager, GrubHub",
  },
  {
    Icon: SiKaggle,
    description:
      "VLCode delivers flexible and scalable solutions in the world of code and engineering.",
    name: "Daniel Henderson",
    title: "Engineering Manager, Kaggle",
  },
  {
    Icon: SiSlack,
    description:
      "When it comes to innovation and technology, VLCode becomes your trusted partner. They create products that embody the future.",
    name: "Anderson Lima",
    title: "Product Manager, Slack",
  },
];

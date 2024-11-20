"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 bg-white">
      <div className="w-full mt-12 max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="text-4xl font-bold mb-8">Solutions</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
        >
          <span>STARTEN</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-violet-600 to-indigo-600"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "Optimized Efficiency, Enhanced Profitability",
    description:
      "Elevate your bottom line with VLCode's Integrated Systems Mastery. Our expertise in seamlessly integrating systems translates to heightened operational efficiency, ultimately boosting your profitability by maximizing resource utilization and minimizing overhead costs.",
    imgSrc:
      "https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  {
    id: 2,
    title: "Innovate for Success, Drive Revenue Growth",
    description:
      "Experience financial ascent with VLCode's Innovative Development Strategies. Our tailored approaches not only future-proof your projects but also ignite revenue growth. By staying ahead in technology, we ensure your investments translate into a competitive edge, attracting a broader audience and driving financial success.",
    imgSrc:
      "https://media3.giphy.com/media/3oz8xR9wKr8TaazlQc/giphy.gif?cid=ecf05e47izzshtedbk9y9dv6f5yvdsbakp7tth2n58vsdd7p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  {
    id: 3,
    title: "Secure Tech Ecosystems",
    description:
      "Safeguard your digital realm with VLCode's Secure Tech Ecosystems. Our cutting-edge solutions not only leverage the latest technologies but prioritize cybersecurity, ensuring your systems stand resilient against evolving threats.",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];

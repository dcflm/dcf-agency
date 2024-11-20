"use client"

import React, { useEffect, useRef } from "react";

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500; // Consider adjusting max size based on your design needs

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = `${mid}px`;

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = `${max}px`;
  };

  return (
    <div
      className=" inset-x-0 bottom-0 flex h-auto items-center overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <span
        className="mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
        ref={textRef}
      >
        Not just a website
      </span>
    </div>
  );
};

export default Footer;


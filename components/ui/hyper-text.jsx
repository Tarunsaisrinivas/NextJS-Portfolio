"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default function HyperText({
  text = "", // Default to empty string
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true
}) {
  const [displayText, setDisplayText] = useState(Array.from(text));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterations = useRef(0);
  const intervalRef = useRef(null);

  const triggerAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      iterations.current = 0;
    }
  };

  useEffect(() => {
    if (text.length === 0) {
      setDisplayText([]);
      return;
    }

    // Reset displayText when text prop changes
    setDisplayText(Array.from(text));

    if (animateOnLoad) {
      triggerAnimation();
    }
  }, [text, animateOnLoad]);

  useEffect(() => {
    if (!isAnimating) return;

    intervalRef.current = setInterval(() => {
      if (iterations.current < text.length) {
        setDisplayText((prev) =>
          prev.map((letter, index) =>
            index <= iterations.current
              ? text[index]
              : alphabets[getRandomInt(26)]
          )
        );
        iterations.current += 1;
      } else {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
      }
    }, duration / text.length);

    // Clean up interval on unmount
    return () => clearInterval(intervalRef.current);
  }, [isAnimating, text, duration]);

  return (
    <div
      className="overflow-hidden py-2 flex cursor-default scale-100"
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.h1
            key={index}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

import { motion } from "motion/react";

interface SandTextProps {
  text: string;
  className?: string;
}

export default function SandText({ text, className = "" }: SandTextProps) {
  const letters = Array.from(text);

  return (
    <motion.span
      className={`inline-flex cursor-pointer select-none py-1 overflow-hidden ${className}`}
      initial="rest"
      whileHover="hover"
    >
      {letters.map((char, index) => {
        if (char === " ") {
          return (
            <span key={index} className="inline-block w-2 sm:w-3">
              &nbsp;
            </span>
          );
        }

        // Sand grain drifting physics calculations
        const distanceFromCenter = index - letters.length / 2;
        // Letters near the center stay relatively still, letters towards outer edges drift further out
        const hoverX = distanceFromCenter * 4.5; 
        // Shifting downwards unevenly like sand grains sliding down a dune
        const hoverY = 4 + Math.sin(index * 1.5) * 3; 
        // Gentle rotation
        const hoverRotate = (index % 2 === 0 ? 1 : -1) * (8 + (index % 3) * 4);

        return (
          <motion.span
            key={index}
            variants={{
              rest: {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
              },
              hover: {
                y: hoverY,
                x: hoverX,
                rotate: hoverRotate,
                scale: 0.96,
                transition: {
                  type: "spring",
                  stiffness: 140,
                  damping: 12,
                  mass: 0.4,
                },
              },
            }}
            whileHover={{
              y: hoverY + 6,
              x: hoverX * 1.4,
              rotate: hoverRotate * 1.5,
              scale: 0.9,
              transition: {
                type: "spring",
                stiffness: 240,
                damping: 8,
              },
            }}
            className="inline-block transition-colors duration-250 hover:text-slate-900 dark:hover:text-white"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

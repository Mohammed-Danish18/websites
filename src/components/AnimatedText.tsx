import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, index) => {
        if (char === " ") {
          return <span key={index}> </span>;
        }
        return (
          <Character
            key={index}
            char={char}
            index={index}
            total={chars.length}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  key?: any;
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Character({ char, index, total, progress }: CharacterProps) {
  const start = index / total;
  // Let the glow duration of each letter overlap slightly to make the reveal smooth
  const end = Math.min(1, (index + 6) / total);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      <span className="opacity-0 pointer-events-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA] font-medium"
      >
        {char}
      </motion.span>
    </span>
  );
}

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  key?: any;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: any; // element type (e.g., 'div', 'section', 'nav', 'h1')
  className?: string;
  onClick?: () => void;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
  onClick,
}: FadeInProps) {
  // Use motion.create() to create animated elements dynamically
  const Component = motion.create(as);

  return (
    <Component
      id={`fade-in-container-${as}`}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}

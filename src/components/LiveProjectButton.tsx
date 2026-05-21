import { motion } from "motion/react";

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function LiveProjectButton({ onClick, className = "", href }: LiveProjectButtonProps) {
  const content = (
    <motion.button
      id="live-project-button"
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer transition-colors duration-200 ${className}`}
    >
      Live Project
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

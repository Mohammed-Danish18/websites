import { motion } from "motion/react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({ onClick, className = "" }: ContactButtonProps) {
  return (
    <motion.button
      id="contact-button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`contact-btn-glow text-white font-medium uppercase tracking-widest rounded-full transition-all duration-300 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      Contact Me
    </motion.button>
  );
}

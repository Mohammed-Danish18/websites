import { useState, useEffect, useRef, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate bounds with padding
      const minX = rect.left - padding;
      const maxX = rect.right + padding;
      const minY = rect.top - padding;
      const maxY = rect.bottom + padding;

      // Check if cursor is inside padded region
      const inBounds =
        e.clientX >= minX &&
        e.clientX <= maxX &&
        e.clientY >= minY &&
        e.clientY <= maxY;

      if (inBounds) {
        setIsActive(true);
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        setPosition({ x: dx / strength, y: dy / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, strength]);

  const transformStyle = `translate3d(${position.x}px, ${position.y}px, 0px)`;
  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      id="magnet-wrapper"
      ref={ref}
      style={{
        transform: transformStyle,
        transition: transitionStyle,
        willChange: "transform",
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}

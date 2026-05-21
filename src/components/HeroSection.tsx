import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

interface HeroSectionProps {
  onScrollTo: (elementId: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-12 pb-6 md:pb-10"
    >
      {/* Navbar Option */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full">
        <div className="flex justify-between items-center w-full pt-6 md:pt-8 border-b border-[#D7E2EA]/10 pb-4">
          <button
            onClick={() => onScrollTo("about-section")}
            className="text-sm md:text-lg lg:text-[1.4rem] uppercase tracking-wider text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onScrollTo("services-section")}
            className="text-sm md:text-lg lg:text-[1.4rem] uppercase tracking-wider text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Price
          </button>
          <button
            onClick={() => onScrollTo("projects-section")}
            className="text-sm md:text-lg lg:text-[1.4rem] uppercase tracking-wider text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onScrollTo("about-section")} // Contact triggers scroll to Contact Section (About button/footer)
            className="text-sm md:text-lg lg:text-[1.4rem] uppercase tracking-wider text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* Hero Portait - Centered absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <div className="w-[260px] sm:w-[350px] md:w-[410px] lg:w-[460px] xl:w-[500px] select-none pointer-events-none">
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Danish Portrait"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Heading Container */}
      <div className="w-full flex-grow flex items-center justify-center relative z-0 overflow-hidden mt-10 sm:mt-0">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[17vw] mt-6 sm:mt-4 md:-mt-5 select-none">
              Hi, i&apos;m Danish
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end relative z-20 pb-4 sm:pb-6 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left select-none" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => onScrollTo("about-section")} />
        </FadeIn>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";

interface ProjectItem {
  num: string;
  category: string;
  name: string;
  images: {
    col1_1: string;
    col1_2: string;
    col2: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    num: "01",
    category: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    num: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    num: "03",
    category: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

interface CardProps {
  key?: any;
  project: ProjectItem;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // We detect scroll progress relative to the card's container parent boundaries
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Transform scale from 1 (unscrolled) to targetScale (scrolled past)
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky w-full max-w-5xl mx-auto flex items-start justify-center"
      style={{
        top: `calc(96px + ${index * 28}px)`, // 96px translates to top-24 (on md it pushes beautifully)
        height: "85vh",
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Top row elements */}
        <div className="flex flex-row items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-4 shrink-0">
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            {/* Huge Number styling */}
            <div
              className="font-black text-[#D7E2EA] leading-none select-none shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.num}
            </div>

            {/* Metadata stack */}
            <div className="flex flex-col justify-center">
              <span className="text-xs sm:text-sm tracking-widest text-[#D7E2EA]/60 uppercase font-medium">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-[#D7E2EA] tracking-wide leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action button */}
          <LiveProjectButton className="hidden sm:inline-flex" />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex-grow flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 md:mt-6 overflow-hidden items-stretch">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6 justify-between h-full">
            <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full">
              <img
                src={project.images.col1_1}
                alt={`${project.name} Col1 Image 1`}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full">
              <img
                src={project.images.col1_2}
                alt={`${project.name} Col1 Image 2`}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="w-full md:w-[60%] flex flex-col h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
            <img
              src={project.images.col2}
              alt={`${project.name} Col2 Image Tall`}
              className="w-full h-full min-h-[160px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500 flex-grow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Small screen backup button (since we hide it in the top header on very small screens) */}
        <div className="mt-4 sm:hidden flex justify-center shrink-0">
          <LiveProjectButton className="w-full py-2.5" />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects-section"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-30 -mt-10 sm:-mt-12 md:-mt-14"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Sticky Cards */}
        <div className="flex flex-col gap-24 sm:gap-32 md:gap-40 pb-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

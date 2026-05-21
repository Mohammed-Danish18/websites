/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="main-wrapper" className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden md:overflow-x-clip relative">
      {/* 1. HeroSection */}
      <HeroSection onScrollTo={handleScrollTo} />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection />

      {/* 4. ServicesSection */}
      <ServicesSection />

      {/* 5. ProjectsSection */}
      <ProjectsSection />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

const IMAGE_URLS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      // Formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Row 1: First 11 images (tripled)
  const row1Srcs = IMAGE_URLS.slice(0, 11);
  const row1Images = [...row1Srcs, ...row1Srcs, ...row1Srcs];

  // Row 2: Remaining 10 images (tripled)
  const row2Srcs = IMAGE_URLS.slice(11);
  const row2Images = [...row2Srcs, ...row2Srcs, ...row2Srcs];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      id="marquee-section"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full flex flex-col gap-3"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 w-max transition-transform duration-100 ease-out"
          style={{
            transform: row1Transform,
            willChange: "transform",
          }}
        >
          {row1Images.map((src, index) => (
            <img
              key={`row1-${index}`}
              src={src}
              alt={`Marquee Row 1 - ${index}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 w-max transition-transform duration-100 ease-out"
          style={{
            transform: row2Transform,
            willChange: "transform",
          }}
        >
          {row2Images.map((src, index) => (
            <img
              key={`row2-${index}`}
              src={src}
              alt={`Marquee Row 2 - ${index}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

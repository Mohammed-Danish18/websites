import FadeIn from "./FadeIn";

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    title: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    title: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    title: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    title: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase tracking-tight text-[#0C0C0C] select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of Services */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.num}
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-row items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 w-full text-left">
                {/* Number on LHS */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none shrink-0 w-[80px] sm:w-[125px] md:w-[170px]"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.num}
                </div>

                {/* Name & Desc on RHS */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
                  <h3
                    className="font-semibold uppercase tracking-wide text-[#0C0C0C] select-none"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#0C0C0C]/70 font-light leading-relaxed max-w-2xl select-none"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

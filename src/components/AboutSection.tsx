import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

export default function AboutSection() {
  const text =
    "With more than five years of experience in design, I focus on branding, web design, and user experience, I truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Absolute Decorative 3D Images */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-bounce-slow"
            style={{ animationDuration: "6s" }}
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Custom 3D object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-pulse-slow"
            style={{ animationDuration: "8s" }}
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-bounce-slow"
            style={{ animationDuration: "5s" }}
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group object"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-pulse-slow"
            style={{ animationDuration: "7s" }}
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Main Content Column */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Animated Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16 select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-reveal scrolling text */}
        <div className="px-4 max-w-[560px]">
          <AnimatedText
            text={text}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* ContactButton with bottom gap */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={30}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

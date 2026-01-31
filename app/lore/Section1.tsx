import TypeText from "../components/TypeTest";
export default function Section1({ onFinish }: { onFinish?: () => void }) {
  return (
    <section
      style={{ top: `0px`, height: `calc(100vh + 50px)` }}
      className="
        sticky
        h-[calc(100vh + 50px)]
        bg-black
        flex items-center justify-center
        text-white
        shadow-2xl 
      "
    >
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-[url('/cage.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 space-y-6">
          {/* Title */}
          <TypeText
            text="Welcome to the Fighting Frenchie Fight Club"
            speed={55}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          />

          {/* Paragraph lines */}
          <TypeText
            text="In a world built on pressure, only the DAWGs keep standing."
            delay={3000}
            speed={55}
            className="text-sm md:text-base text-white/80 font-thin"
          />

          <TypeText
            text="They don’t fight for fame. They fight because quitting isn’t in their blood."
            delay={7000}
            className="text-sm md:text-base text-white/80 font-thin"
          />

          {/* CTA */}
          <TypeText
            text=" Are you ready to become a DAWG? Scroll to enter the Fight Club."
            delay={10000}
            className="text-sm md:text-base text-white font-semibold tracking-wide"
            onComplete={onFinish}
          />
        </div>
      </section>
    </section>
  );
}
1;

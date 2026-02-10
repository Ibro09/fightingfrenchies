"use client";

const lines = [
  { text: "Holder Identity", type: "title" },
  {
    text: "More Than a Holder. A DAWG.",
    className: "mt-8 text-lg md:text-xl font-medium",
  },

  {
    text: "Holding a Fighting Frenchie means you stand for discipline, resilience, and gratitude under pressure.",
    className:
      "mt-6 max-w-2xl text-sm md:text-base font-light leading-relaxed text-white/70",
  },

  { text: "You’re not here for trends.", className: "mt-6" },
  { text: "You’re here because quitting isn’t an option.", className: "" },

  {
    text: "DAWG",
    className: "mt-10 text-xs uppercase tracking-widest text-white/50",
  },
  {
    text: "Determined Attitude With Gratitude",
    className: "mt-1 text-white/80 text-sm md:text-base font-light",
  },
];

export default function Section6({ onFinish }: { onFinish?: () => void }) {
  return (
    <div className="h-screen">
      <section
        style={{ top: "100px", height: `calc(100vh - 100px)` }}
        className="sticky bg-[gray] rounded-t-3xl shadow-2xl flex items-center justify-center text-white mt-20"
        id="holders"
      >
        <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-full">
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/head.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6">
            <section className="py-28 space-y-4 text-sm md:text-base font-light">
              {lines.map((line, index) => (
                <p
                  key={index}
                  className={`
                    ${line.className || ""}
                    ${line.type === "title" ? "text-xl md:text-3xl font-semibold tracking-tight" : ""}
                  `}
                >
                  {line.text}
                </p>
              ))}
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

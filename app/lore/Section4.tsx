"use client";

const lines = [
  { text: "Characters / Species", type: "title" },

  {
    text: "Frenchies aren’t the only ones in this world.",
    className: "mt-8 max-w-xl",
  },

  {
    text: "Fighting Frenchies — compact, relentless, built for heart over hype",
  },
  {
    text: "Heavy DAWGs — larger breeds drawn to brute force and dominance",
  },
  {
    text: "Spectators — the crowd, the noise, the influence",
  },
  {
    text: "Strays — outsiders with nothing to lose",
  },

  {
    text: "Each species carries its own strengths — and its own flaws.",
    className: "mt-8 max-w-xl",
  },
];

export default function Section4({ onFinish }: { onFinish?: () => void }) {
  return (
    <section
      style={{ top: `60px`, height: `calc(100vh - 60px)` }}
      className="sticky bg-[gray] flex items-center justify-center text-white rounded-t-3xl shadow-2xl mt-20"
      id="species"
    >
      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden h-full">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/cinematic.png')] bg-cover bg-center bg-no-repeat" />

        <div className="absolute inset-0 bg-black/30 rounded-t-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <section className="py-28 space-y-4 text-sm md:text-base font-light">
            {lines.map((line, index) => (
              <p
                key={index}
                className={`
                  ${line.className || ""}
                  ${
                    line.type === "title"
                      ? "text-xl md:text-3xl font-semibold tracking-tight"
                      : ""
                  }
                `}
              >
                {line.text}
              </p>
            ))}
            <div>
              <button className="mt-2 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-2 px-6 rounded group transition duration-200">
                <a href="#mint" className="flex items-center">
                  Next
                  <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                    ›
                  </span>
                </a>
              </button>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

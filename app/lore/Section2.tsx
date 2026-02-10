"use client";

const lines = [
  { text: "The Origin", type: "title" },
  { text: "Before the crowds." },
  { text: "Before the belts." },
  { text: "Before the noise." },
  {
    text: "There was a small, stubborn dog that refused to stay down.",
    className: "mt-10 max-w-xl",
  },
  {
    text: "Born into chaos, underestimated by size, and shaped by discipline, the first Fighting Frenchie learned that strength isn’t about power — it’s about persistence.",
    className: "max-w-2xl",
  },
  {
    text: "That refusal to quit became a movement.",
    className: "font-medium",
  },
];

export default function Section2({ onFinish }: { onFinish?: () => void }) {
  return (
    <section
      style={{ top: `20px`, height: `calc(100vh - 20px)` }}
      className="sticky flex items-center justify-center text-white rounded-t-3xl shadow-2xl mt-10"
    >
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-full">
        <div className="absolute inset-0 bg-[url('/shadow-reveal.jpg')] bg-cover bg-center bg-no-repeat rounded-t-3xl" />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />

        <div className="relative z-10 max-w-4xl px-6">
          <section className="py-32 space-y-6 text-sm md:text-base font-light">
            {lines.map((line, index) => (
              <p
                key={index}
                className={`
                  ${line.className || ""}
                  ${
                    line.type === "title"
                      ? "text-2xl md:text-4xl font-semibold tracking-tight"
                      : ""
                  }
                `}
              >
                {line.text}
              </p>
            ))}
            <div>
              <button className="mt-2 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-2 px-6 rounded group transition duration-200">
                <a href="#world" className="flex items-center">
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

"use client";

import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayed, setDisplayed] = useState("");

  const SPEED = 55;
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length && !finished) {
      setFinished(true);
      if (onFinish) onFinish();
    }
  }, [currentLine, finished, onFinish]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || currentLine >= lines.length) return;

    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      const text = lines[currentLine].text;

      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);

        // move to next line AFTER finishing
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 300);
      }
    }, SPEED);

    return () => clearInterval(interval);
  }, [visible, currentLine]);

  return (
    <section
      ref={sectionRef}
      style={{ top: `20px`, height: `calc(100vh - 20px)` }}
      className="sticky flex items-center justify-center text-white rounded-t-3xl shadow-2xl mt-10"
    >
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-full">
        <div className="absolute inset-0 bg-[url('/shadow-reveal.jpg')] bg-cover bg-center bg-no-repeat rounded-t-3xl" />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />

        <div className="relative z-10 max-w-4xl px-6">
          <section className="py-32 space-y-6 text-sm md:text-base font-light">
            {lines.slice(0, currentLine + 1).map((line, index) => (
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
                {index === currentLine ? displayed : line.text}
              </p>
            ))}
            {currentLine >= lines.length && (
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
            )}
          </section>
        </div>
      </section>
    </section>
  );
}

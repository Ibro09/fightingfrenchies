"use client";

import { useEffect, useRef, useState } from "react";

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
        setTimeout(() => setCurrentLine((prev) => prev + 1), 300);
      }
    }, SPEED);

    return () => clearInterval(interval);
  }, [visible, currentLine]);

  return (
    <div className="h-screen">
      <section
        ref={sectionRef}
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
              {lines.slice(0, currentLine + 1).map((line, index) => (
                <p
                  key={index}
                  className={`
                    ${line.className || ""}
                    ${line.type === "title" ? "text-xl md:text-3xl font-semibold tracking-tight" : ""}
                  `}
                >
                  {index === currentLine ? (
                    <>
                      {displayed}
                      <span className="typing-cursor">|</span>
                    </>
                  ) : (
                    line.text
                  )}
                </p>
              ))}
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

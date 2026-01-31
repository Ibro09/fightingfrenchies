"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "The World", type: "title" },
  {
    text: "The world of Fighting Frenchies is loud, crowded, and constantly watching.",
    className: "mt-10 max-w-xl",
  },
  {
    text: "Combat sports fuel culture. Reputation is currency. Every fight night resets the hierarchy.",
    className: "mt-6 max-w-2xl",
  },
  { text: "Arenas glow." },
  { text: "Gyms sweat." },
  { text: "Cameras never turn off." },
  {
    text: "Only those who embrace pressure survive here.",
    className: "mt-10 font-medium",
  },
];

export default function Section3({ onFinish }: { onFinish?: () => void }) {
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
      style={{ top: `40px`, height: `calc(100vh - 40px)` }}
      className="sticky bg-black flex items-center justify-center text-white rounded-t-3xl shadow-2xl mt-10"
      id="world"
    >
      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden h-full">
        <div className="absolute inset-0 bg-[url('https://fightingfrenchies.io/wp-content/uploads/2025/10/ff-logo-icon-favicon.png')] bg-contain bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/80 rounded-t-3xl" />

        <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
          <section className="py-32 space-y-4 text-sm md:text-base font-light">
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
            {currentLine >= lines.length && (
              <div>
                <button className="mt-2 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-2 px-6 rounded group transition duration-200">
                  <a href="#species" className="flex items-center">
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

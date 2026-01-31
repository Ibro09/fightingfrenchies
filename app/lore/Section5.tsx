"use client";

import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "The Awakening", type: "title" },
  { text: "(Mint)", type: "subtitle" },

  {
    text: "The Awakening marks the moment you enter the Fight Club.",
    className: "mt-8 max-w-xl",
  },

  {
    text: "Minting isn’t ownership — it’s alignment.",
    className: "mt-4 max-w-xl",
  },

  {
    text: "By stepping in, you claim your place in the world, unlock your identity, and become part of the next chapter of the story as it unfolds across drops, events, and real-world culture.",
    className: "mt-6 max-w-2xl",
  },

  {
    text: "This is where spectators become DAWGs.",
    className: "mt-8 font-medium",
  },
];

export default function Section5({ onFinish }: { onFinish?: () => void }) {
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
        }, 350);
      }
    }, SPEED);

    return () => clearInterval(interval);
  }, [visible, currentLine]);

  return (
    <section
      ref={sectionRef}
      style={{ top: "80px", height: `calc(100vh - 80px)` }}
      className="sticky bg-black rounded-t-3xl shadow-2xl flex items-center justify-center text-white mt-20"
      id="mint"
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
                  ${
                    line.type === "title"
                      ? "text-xl md:text-3xl font-semibold tracking-tight"
                      : ""
                  }
                  ${
                    line.type === "subtitle"
                      ? "ml-2 text-white/50 text-sm font-normal"
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
                  <a href="#holders" className="flex items-center">
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

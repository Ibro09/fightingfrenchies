import React from "react";

export default function ComingSoon() {
  const text = "Coming   Soon...";

  return (
    <div className="w-full relative min-h-screen overflow-hidden bg-[green]/70 mt-[-100px]">
      <section className="flex h-[calc(100vh+100px)] items-center bg-[url('/bullhead.png')] bg-cover relative">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 p-6 text-white flex flex-col items-center justify-center w-full">
          {/* Iframe */}
         

          {/* Bouncy Loading Text */}
          <div className="flex space-x-1 text-3xl sm:text-4xl md:text-5xl font-bold">
            {text.split("").map((letter, idx) => (
              <span
                key={idx}
                className="inline-block animate-bounce"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

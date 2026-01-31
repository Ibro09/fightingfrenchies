import React from "react";

const Welcome = () => {
  return (
    <section className="relative w-full flex items-center justify-center text-center text-white overflow-hidden py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/shadow-reveal.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" aria-hidden />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Welcome to the <br />
          <span className="block mt-2">Fight.</span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed font-thin">
          You’ve made your way to something worth fighting for and you know
          this. We will rise together swinging at anything that tries us. You
          aren’t just a member, you are a DAWG. Dedicated, Aggressive, Willing,
          and Gallant. Together, there is nothing that can stop us.
        </p>
      </div>

  
    </section>
  );
};

export default Welcome;

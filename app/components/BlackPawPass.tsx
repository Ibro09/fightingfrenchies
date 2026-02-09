export default function PawPassSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center py-20"
      style={{
        backgroundImage: `
         linear-gradient(180deg, rgba(56, 56, 56, 0.93) 2%, #000000 100%),
          url('/cage.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl flex-col-inverse mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Paw Pass iframe */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-2">
          <div className="">
            <iframe src="https://my.spline.design/pawpassreddisplay-63P5JRIkEcwLq0JKeBhHvCOV/"  className="pointer-events-none"  width="650px" height="650px"></iframe>
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="text-white max-w-xl order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Black Paw Print
            <br />
            Pass
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-8">
           As it’s said, “Give a dawg a bone,” so we did. We gave every underdawg a fair fighting chance—1,000 of our Green Paw Print Passes minted out in the first 48hrs! Now, the Fighting Frenchie Fight Club unleashes 1,000 Black Paw Print Passes. These aren’t just pretty little videos of a pretty little tickets. This is real utility, lasting value and notably some of the best hand drawn art to ever come to the space.
            <br />
            <br />
           You can get far by yourself, but together we go further. Embark with us on the Fighting Frenchie World Wide Takeover. Mint to take the center of the ring, HODL, or flip if you dare—your move, just don’t tap out. Will you be our next Alpha Dawg? The second rule of Fighting Frenchie Fight Club: Talk about Fighting Frenchie Fight Club. Keep fighting forward.
          </p>

          <button className="bg-[#7CFF00] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
            VISIT COLLECTION →
          </button>
        </div>
      </div>
    </section>
  );
}

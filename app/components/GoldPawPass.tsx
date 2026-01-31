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
            <iframe
              src="https://my.spline.design/pawpassgolddisplay-2XQZlBRaC8EllIx5dWPZ2C5J/"  className="pointer-events-none"
              width="650px"
              height="650px"
            ></iframe>
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="text-white max-w-xl order-2 lg:order-1">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Gold Paw Print
            <br />
            Pass
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-8">
           Green gave every underdawg a fair fighting chance, Black raised the stakes, Red ante’d up and scarcity raises the stakes once again with 1,000 Gold Paw Print Passes.
            <br />
            <br />
           You’ve only made it this far because you can handle the grind to the top. The competition is only getting better, the pressure is on and the crown shines brighter than ever. Gold doesn’t just embed you as another contender—Gold crowns you as one who might be next in line for GOAT status. Every belt and every victory brings you that much closer to the Goated club. Step in with a Diamond Minded mentality, walk with D.A.W.G. energy, and be the standard for the Fighting Frenchie Worldwide Takeover. Gold is proof that you belong in the fight to the top. The Fourth Rule of Fighting Frenchie Fight Club: Only two dawgs to a fight. Keep Fighting Forward.


          </p>

          <button className="bg-[#7CFF00] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
           Mint Loading →
          </button>
        </div>
      </div>
    </section>
  );
}

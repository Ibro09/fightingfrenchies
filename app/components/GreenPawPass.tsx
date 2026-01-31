export default function PawPassSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center py-20"
      style={{
        backgroundImage: `
          linear-gradient(10deg, rgba(10,10,10,0.2) 0%, #81cc00ae 70%),
          url('/head.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl flex-col-inverse mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Paw Pass iframe */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="  rounded-2xl overflow-hidden">
            <iframe src="https://my.spline.design/pawpassgreendsplay-SGJYyGubEZ3gY3iFs6au7gmD/" className="pointer-events-none"  width="650px" height="650px"></iframe>
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="text-white max-w-xl order-2 lg:order-2">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Green Paw Print
            <br />
            Pass
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-8">
            In the heart of the Fighting Frenchie Fight Club, where underdogs
            like us paw our way to a Worldwide Takeover. This first set of Paw
            Print Passes is yours for the taking! This first drop unleashes
            1,000 Green Paw Print Passes! FREE to mint and packed with unmarked
            value—Guaranteeing a Fighting Frenchie NFT airdropped to your
            wallet, plus the pass as your key to entry.
            <br />
            <br />
            But entry to what exactly? Mint, hold, or sell if you dare—F*ck
            around and find out for yourself!
          </p>

          <button className="bg-[#7CFF00] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
            VISIT COLLECTION →
          </button>
        </div>
      </div>
    </section>
  );
}

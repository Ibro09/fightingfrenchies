export default function PawPassSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center py-20"
      style={{
           backgroundImage: "radial-gradient(circle at top left, rgba(255, 255, 255, 0) 0%, #4c0000ab 80%), url('/head.png') !important;",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Paw Pass iframe */}
        <div className="flex justify-center lg:justify-start">
          <div className=" flex items-center justify-center">
<iframe src="https://my.spline.design/pawpassreddisplay-4SgrxfwcE9DM8zJtfa5JBQen/" className="pointer-events-none"  width="500px" height="700px"></iframe>          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="text-white max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Red Paw Print
            <br />
            Pass
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-8">
           Green gave every dawg a fair fighting chance—1,000 minted out in 48 hours.. Now we ante up with 1,000 of our Red Paw Print Passes, imprinted on chain forever. Forged in the fire, our Red Paw Print Passes are for a true D.A.W.G.: Determined Attitude With Gratitude. Because every dawg knows that with gratitude, comes more blessings, more wins and more abundance in all areas of our lives.
            <br />
            <br />
           Mint to fuel the fire, make a fearless flip, or HODL if you’re Diamond Minded.Gold may be the glory that lies ahead, but when it’s time to fight, “I Se3 R3d D@wG!” The third rule of Fighting Frenchie Fight Club: If someone yelps, lays down, or paws out.. the fight is over. Keep Fighting Forward.
          </p>

          <button className="bg-[#7CFF00] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
            Mint Loading→
          </button>
        </div>
      </div>
    </section>
  );
}

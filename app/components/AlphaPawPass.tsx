export default function PawPassSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover flex items-center py-20"
      style={{
        backgroundBlendMode: "multiply",
        backgroundImage:
          "radial-gradient(circle at top left, #df52ff 6%, #072130 79%), url('https://fightingfrenchies.io/wp-content/uploads/2025/08/paw-pass_FF_bg.png')",
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT — Paw Pass iframe */}
        <div className="flex justify-center lg:justify-start">
          <div className="
            scale-[1]
            md:scale-[1]
            lg:scale-[1]
            origin-center
          ">
            <iframe
              src="https://my.spline.design/pawpassgolddisplay-2XQZlBRaC8EllIx5dWPZ2C5J/"
              className="pointer-events-none w-[650px] h-[650px]"
            />
          </div>
        </div>

        {/* RIGHT — Text content */}
        <div className="text-white max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Gold Paw Print
            <br />
            Pass
          </h2>

          <button className="
            bg-[#7CFF00]
            text-black
            font-semibold
            px-8
            py-4
            rounded-full
            hover:scale-105
            transition
          ">
            Mint Loading →
          </button>
        </div>

      </div>
    </section>
  );
}

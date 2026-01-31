import Image from "next/image";

export default function PassHero() {
  return (
<section
  className="
    relative
    w-full
    min-h-screen
    overflow-hidden
    mt-[-100px]
    pt-[140px]
  "
  style={{
      backgroundColor: "#000000",
    backgroundImage: `
      linear-gradient(180deg, #0a0a0a13 21%, #81cc005d 75%),
      url('/head.png')
    `,
    backgroundSize: "contain",
    backgroundPosition: "right 42% top",
    backgroundRepeat: "no-repeat",
  }}
>

      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a33]/10 to-[#7CFF00]/60 " />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-white font-extrabold uppercase tracking-wider
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                       mb-14">
          Your Pass to the <br />
          Fighting Frenchieverse
        </h1>

        {/* Passes image (single image) */}
        <div className="flex justify-center">
          <Image
            src="/pawpasses.webp"
            alt="Fighting Frenchieverse Passes"
            width={1400}
            height={700}
            priority
            className="w-full max-w-5xl object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

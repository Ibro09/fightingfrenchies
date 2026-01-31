import Image from "next/image";

export default function PrintPasses() {
  return (
    <section className="relative w-full h-[90vh] bg-[#212121] flex items-center justify-center text-center text-white overflow-hidden py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/head.png')] bg-cover z-10"></div>
      {/* Card */}
      <div className="relative z-10 bg-[#0b0b0b] rounded-2xl w-[400px] p-5 py-10 text-center shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-5">
          Paw Print Passes
        </h1>

        {/* Pass images */}
        <div className="flex justify-center gap-5 mb-5">
          <Image
            src="/pawpasses.webp"
            alt="Pass 1"
            width={300}
            height={300}
          ></Image>
        </div>

        {/* Description */}
        <p className="text-white text-[12px] mb-5">
          Dawg Passes will release in rounds. once all passes have been released
          we will begin airdropping your Frenchies.
        </p>

        {/* Button */}
        <button className=" bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-3 px-6 rounded group transition duration-200">
          <a className="flex items-center">
            Mint Green Passes
            <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
              ›
            </span>
          </a>
        </button>
      </div>
    </section>
  );
}

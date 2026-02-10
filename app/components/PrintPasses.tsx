import Image from "next/image";

export default function PrintPasses() {
  return (
    <section className="relative w-full h-[90vh] bg-[#212121] flex items-center justify-center text-center text-white overflow-hidden py-20 ">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/head.png')] bg-cover z-10"></div>
      {/* Card */}
      <div className="relative z-10 rounded-2xl w-[90%] md:w-[400px] p-5 py-10 text-center shadow-2xl bg-[url('/flyer.jpg')] bg-cover bg-center overflow-hidden">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl z-10"></div>

        {/* Content */}
        <div className="relative z-20">
          <h1 className="text-2xl font-bold text-[#6eee07] mb-5">
            Paw Print Passes
          </h1>

          <p className="text-white text-[12px] mb-5">
            Dawg Passes will release in rounds. once all passes have been
            released we will begin airdropping your Frenchies.
          </p>

          <button className="bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-3 px-6 rounded group transition duration-200">
            <a
              href="https://magiceden.io/collections/ethereum/fighting-frenchies-179485061?gr"
              className="flex items-center"
            >
              Mint Green Passes
              <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                ›
              </span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

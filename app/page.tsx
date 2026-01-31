import PrintPasses from "./components/PrintPasses";
import SplineHero from "./components/SplineHero";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col  dark:bg-black w-full  bg-cover mt-[-100px]         overflow-hidden">
      <section className="flex min-h-screen items-center  bg-zinc-50 dark:bg-black w-full bg-[url('/cage.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-3 md:p-6 text-white flex flex-col items-center  w-full mt-[100px]">
          <div
            className="w-[100%] md:w-[90%] h-auto mb-8 border-1 border-[gray]/40 rounded-3xl shadow-lg p-10 pt-20 bg-[#424242]/30 backdrop-blur-sm flex flex-col md:flex-row         overflow-visible
"
          >
            <div className="w-full  md:w-1/4 text-left mb-6">
              <h1 className="text-2xl text-[#5b5b5b]">
                Welcome to Fighting Frenchies!
              </h1>
              <h1 className="text-[70px] font-bold text-[#5b5b5b] leading-none">
                Keep
              </h1>
              <h1 className="text-[70px] font-bold text-[#5b5b5b] leading-none">
                Fighting
              </h1>
              <h1 className="text-[70px] font-bold text-[#5b5b5b]  leading-none">
                Foward
              </h1>

              <div>
                <button className="mt-4 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-3 px-6 rounded group transition duration-200">
                  <a href="" className="flex items-center">
                    Mint Green Passes
                    <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                      ›
                    </span>
                  </a>
                </button>
              </div>
              <div>
                <button className="mt-4 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-3 px-6 rounded group transition duration-200">
                  <a href="" className="flex items-center">
                    Mint Black Passes
                    <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                      ›
                    </span>
                  </a>
                </button>
              </div>
              <div>
                <button className="mt-4 bg-[#5b5b5b]  text-black font-semibold py-3 px-6 rounded group transition duration-200">
                  <a className="flex items-center">
                    Mint Red Passes
                    <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                      ›
                    </span>
                  </a>
                </button>
              </div>
              <div>
                <button className="mt-4 bg-[#5b5b5b]  text-black font-semibold py-3 px-6 rounded group transition duration-200">
                  <a className="flex items-center">
                    Mint Gold Passes
                    <span className="scale-0 origin-left group-hover:scale-100 transition duration-200  -mr-2 ml-2">
                      ›
                    </span>
                  </a>
                </button>
              </div>
              <div>
                <button className="mt-4 bg-[#5b5b5b]  text-black font-semibold py-3 px-6 rounded group transition duration-200">
                  <a className="flex items-center">
                    Alpha Dawg Passes
                    <span className="scale-0 origin-left group-hover:scale-100 transition duration-200  -mr-2 ml-2">
                      ›
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full md:w-full h-auto flex items-center justify-center">
              <SplineHero />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <Welcome />
      </section>
      <section className="w-full mb-20">
        <PrintPasses />
      </section>
      <Footer />
    </div>
  );
}

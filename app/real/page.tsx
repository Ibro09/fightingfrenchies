import Footer from "../components/Footer";
import AnimateOnView from "../components/AnimateOnView";

export default function Home() {
  return (
    <div className="bg-black w-full mt-[-100px] pt-20 overflow-hidden flex flex-col items-center bg-black">
      <main className="w-full text-white mx-auto overflow-hidden">
        <WhyWeBuiltThis />
        <AnimateOnView
          animationClass="animate-slide-in-left"
          delayClass="delay-100"
        >
          <Vision />
        </AnimateOnView>
        <AnimateOnView
          animationClass="animate-slide-in-right"
          delayClass="delay-200"
        >
          <Mission />
        </AnimateOnView>

        {/* Founder Message */}
        <AnimateOnView animationClass="animate-slide-up" delayClass="delay-200">
          <FoundersMessage />
        </AnimateOnView>

        {/* Founder Funnel */}
        <AnimateOnView animationClass="animate-slide-up" delayClass="delay-200">
          <FounderFunnel />
        </AnimateOnView>

        {/* Roadmap */}
        <AnimateOnView animationClass="animate-slide-up" delayClass="delay-200">
          <Roadmap />
        </AnimateOnView>

        <Footer />
      </main>
    </div>
  );
}

function WhyWeBuiltThis() {
  return (
    <section
      className="
            h-screen
            bg-black
            flex items-center justify-center
            text-white
            shadow-2xl
          "
    >
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden h-full ">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/final.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />

        <div className="px-6 gap-8 items-center flex  items-center justify-between sm:px-10 md:max-w-5xl   mx-auto z-10">
          {/* Text */}
          <div>
            <h2 className="text-5xl font-bold mb-4 text-left  uppercase">
              More than art.
              <br />
              Less than hype.
            </h2>
            <div className="space-y-3">
              <p className="text-gray-300 text-left animate-slide-in-left delay-200">
                {" "}
                This started as an idea, turned into an NFT, and is slowly
                becoming something real. We’re here to build, experiment, and be
                honest about what’s ready — and what’s not. Below you’ll find
                why we built this, what holders can expect, what we won’t
                promise, and where we’re heading next.
              </p>
            </div>
            <div className="text-left">
              <button className="mt-4 bg-[#6eee07] hover:bg-[#6eee07]/70 text-black font-semibold py-3 px-6 rounded group transition duration-200 animate-fade-in delay-400">
                <a href="#vision" className="flex items-center">
                  Explore Vision
                  <span className="scale-0 origin-left group-hover:scale-100 transition duration-200 -mr-2 ml-2">
                    ›
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function Vision() {
  return (
    <section
      className="relative bg-black text-white py-24 overflow-hidden"
      id="vision"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6eee07]/10 via-transparent to-[#6eee07]/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-[#6eee07]/70 animate-fade-in delay-100">
            Our Vision
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight animate-slide-up delay-200">
            Build the world’s most iconic <br />
            <span className="text-[#6eee07]">
              fight-culture character brand
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/80 animate-slide-in-left delay-300">
            Fighting Frenchies is a culturally native IP built at the
            intersection of combat sports, digital ownership, and physical
            commerce — designed to scale from on-chain fandom to global retail
            shelves.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="rounded-2xl bg-black border border-white/10 p-6 animate-slide-up delay-200"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Cultural First</h3>
            <p className="text-white/70">
              We anchor the brand in fight culture — UFC, MMA, gyms, athletes,
              and fight-week rituals — creating nonstop narrative energy and
              community relevance.
            </p>
          </div>

          <div
            className="rounded-2xl bg-black border border-white/10 p-6 animate-slide-up delay-300"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Web3 → Web2 Bridge</h3>
            <p className="text-white/70">
              Digital passes, collectibles, and tokens seed the core community,
              while plush, apparel, and pet fashion scale the IP to mainstream
              audiences.
            </p>
          </div>

          <div
            className="rounded-2xl bg-black border border-white/10 p-6 animate-slide-up delay-400"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Enduring IP</h3>
            <p className="text-white/70">
              Our goal is timeless character equity — a brand that lives across
              content, products, live events, and digital rails for decades, not
              cycles.
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="mt-20 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">
            DAWG Philosophy
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-bold">
            Determined Attitude With Gratitude.
          </p>
          <p className="mt-2 text-[#6eee07]/70 font-semibold">
            Keep Fighting Forward.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Green Accent Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6eee07]/15 via-transparent to-[#6eee07]/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-[#6eee07]">
            Our Mission
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Turn fandom into <br />
            <span className="text-[#6eee07]">
              culture, commerce, and community
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Our mission is to build a globally scalable character ecosystem that
            rewards participation, fuels creativity, and transforms digital
            ownership into real-world value.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-[#6eee07]">
              Empower the Community
            </h3>
            <p className="text-white/70">
              Give fans real access, status, and upside through passes,
              collectibles, live experiences, and shared narratives.
            </p>
          </div>

          <div
            className="rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-[#6eee07]">
              Ship Real Products
            </h3>
            <p className="text-white/70">
              Translate on-chain energy into physical goods — plush, apparel,
              and pet fashion — designed to win in both DTC and retail.
            </p>
          </div>

          <div
            className="rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-[#6eee07]">
              Sustain the Flywheel
            </h3>
            <p className="text-white/70">
              Use content, fight-week moments, and live activations to
              continuously convert attention into loyalty and demand.
            </p>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-20 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">
            Our Commitment
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-bold">
            Build loud. Build fair. Build forward.
          </p>
          <p className="mt-2 text-[#6eee07] font-semibold">
            For the culture. For the community.
          </p>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Extremely Subtle Green Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6eee07]/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-white/50">
            Roadmap
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            How we build, step by step
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Our roadmap prioritizes shipping real products, growing responsibly,
            and compounding culture over time. Timelines guide direction —
            execution defines progress.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Phase 1 */}
          <div
            className="relative rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <div className="mb-4 text-sm font-semibold text-[#6eee07]">
              Phase 1
            </div>
            <h3 className="text-xl font-semibold mb-3">Foundation</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Core community formation</li>
              <li>• Pass launches & early access utilities</li>
              <li>• Brand, lore, and content engine</li>
              <li>• Live streams & fight-week rituals</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div
            className="relative rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <div className="mb-4 text-sm font-semibold text-[#6eee07]">
              Phase 2
            </div>
            <h3 className="text-xl font-semibold mb-3">Expansion</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Plush & apparel prototypes</li>
              <li>• DTC storefront launch</li>
              <li>• Athlete & creator collaborations</li>
              <li>• Predict-to-win product beta</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div
            className="relative rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <div className="mb-4 text-sm font-semibold text-[#6eee07]">
              Phase 3
            </div>
            <h3 className="text-xl font-semibold mb-3">Scale</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Retail line reviews & pilots</li>
              <li>• Pet fashion vertical rollout</li>
              <li>• Fight-week brand activations</li>
              <li>• Sponsored community events</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div
            className="relative rounded-2xl bg-black border border-white/10 p-6"
            style={{
              boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
            }}
          >
            <div className="mb-4 text-sm font-semibold text-[#6eee07]">
              Phase 4
            </div>
            <h3 className="text-xl font-semibold mb-3">Endurance</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Global retail expansion</li>
              <li>• Live festivals & IRL experiences</li>
              <li>• Institutional-grade infrastructure</li>
              <li>• Long-term IP licensing & media</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundersMessage() {
  return (
    <section className="relative bg-black text-white py-24">
      {/* Very Subtle Green Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6eee07]/5 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <span className="text-sm uppercase tracking-widest text-white/50">
          An Honest Message
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          From the Founders
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-white/10" />

        {/* Message */}
        <p className="mt-10 text-lg text-white/80 leading-relaxed">
          Fighting Frenchies didn’t start as a pitch deck or a roadmap. It
          started as a belief — that culture still matters, that community
          should be rewarded, and that brands should be built in the open.
        </p>

        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          We’re not here to promise perfection or overnight outcomes. We’re here
          to show up consistently, ship real products, listen to our community,
          and grow this brand the right way — step by step.
        </p>

        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          Some things will work. Some things won’t. We’ll be transparent about
          both. What won’t change is our commitment to the people building
          alongside us.
        </p>

        {/* Signature */}
        <div className="mt-12">
          <p className="font-semibold">
            — Josh Dim A.K.A Slum Dog Billionare (founder of Fighting frenchies)
          </p>
          <p className="mt-2 text-sm text-white/50">
            Determined Attitude With Gratitude
          </p>
        </div>
      </div>
    </section>
  );
}

function FounderFunnel() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Subtle Green Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6eee07]/5 via-transparent to-[#6eee07]/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-white/50">
            Resources
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Explore the Universe
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-6 h-px w-24 bg-white/10" />
        </div>

        {/* PDF Cards Flex Container */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Founder Funnel PDF Card */}
          <a
            href="/founder-funnel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-sm"
          >
            <div
              className="rounded-2xl bg-black border border-white/10 p-12 hover:border-[#6eee07]/50 transition duration-300 cursor-pointer group h-full flex flex-col"
              style={{
                boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
              }}
            >
              {/* PDF Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-6xl group-hover:scale-110 transition duration-300">
                  📄
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3">Founder Funnel</h3>
              <p className="text-white/70 mb-6 flex-grow">
                Access the complete founder funnel guide and strategy document
              </p>

              {/* Button */}
              <button className="bg-[#6eee07] hover:bg-[#6eee07]/80 text-black font-semibold py-3 px-6 rounded group/btn transition duration-200 flex items-center gap-2 mx-auto">
                Open PDF
                <span className="scale-0 origin-left group-hover/btn:scale-100 transition duration-200">
                  →
                </span>
              </button>
            </div>
          </a>

          {/* Lore PDF Card */}
          <a
            href="/lore.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-sm"
          >
            <div
              className="rounded-2xl bg-black border border-white/10 p-12 hover:border-[#6eee07]/50 transition duration-300 cursor-pointer group h-full flex flex-col"
              style={{
                boxShadow: `8px 8px 0px #6fee077a, 8px 8px 12px rgba(0,0,0,0.35)`,
              }}
            >
              {/* PDF Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-6xl group-hover:scale-110 transition duration-300">
                  📖
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3">
                Lore & Art History
              </h3>
              <p className="text-white/70 mb-6 flex-grow">
                Discover the story behind Fighting Frenchies art and character
                evolution
              </p>

              {/* Button */}
              <button className="bg-[#6eee07] hover:bg-[#6eee07]/80 text-black font-semibold py-3 px-6 rounded group/btn transition duration-200 flex items-center gap-2 mx-auto">
                Open PDF
                <span className="scale-0 origin-left group-hover/btn:scale-100 transition duration-200">
                  →
                </span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

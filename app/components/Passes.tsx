export default function Passes() {
  const passes = [
    {
      name: "Green Paw Pass",
      accent: "#6eee07",
      description:
        "The starting point. Built for early believers and core community energy.",
    },
    {
      name: "Black Paw Pass",
      accent: "#111111",
      description:
        "Deeper access. Stronger signal. For those who lean further in.",
    },
    {
      name: "Red Paw Pass",
      accent: "#c81e1e",
      description:
        "High-intensity access tied to premium drops and activations.",
    },
    {
      name: "Gold Paw Pass",
      accent: "#d4af37",
      description:
        "Scarce by design. Long-term alignment with the brand’s future.",
    },
   
  ];

  return (
    <section className="relative bg-black text-white py-32">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-24">
          <span className="text-sm uppercase tracking-widest text-white/50">
            Passes
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Designed as collectibles, not checkboxes
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Each pass is part of a connected system — growing in depth,
            expression, and access as the ecosystem evolves.
          </p>
        </div>

        {/* Wavy Connector Line */}
        <svg
          className="absolute top-1/2 left-0 w-full h-48 pointer-events-none"
          viewBox="0 0 1200 200"
          fill="none"
        >
          <path
            d="M0 100 C 150 20, 300 180, 450 100 C 600 20, 750 180, 900 100 C 1050 20, 1200 180, 1350 100"
            stroke="#6eee07"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>

        {/* Pass Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {passes.map((pass, index) => (
            <div
              key={pass.name}
              className="relative rounded-3xl bg-black border border-white/10 p-8 transition-all duration-200
             hover:-translate-x-1 hover:-translate-y-1"
              style={{
                boxShadow: `
      8px 8px 0px ${pass.accent},
      8px 8px 12px rgba(0,0,0,0.35)
    `,
              }}
            >
              {/* Accent Dot */}
              <div
                className="mb-6 h-3 w-3 rounded-full"
                style={{ backgroundColor: pass.accent }}
              />

              <h3 className="text-xl font-semibold mb-4">{pass.name}</h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {pass.description}
              </p>

              {/* Decorative Wave */}
              <div className="mt-10 h-1 w-16 rounded-full overflow-hidden bg-white/10">
                <div
                  className="h-full w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pass.accent}, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function LorePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = {
    "Why we're building this": [
      {
        id: "why-built",
        title: "Why we're building this",
        content:
          "We saw a community of fighters, builders, and believers who deserved more than just another project. Fighting Frenchies is a movement—a digital ecosystem where the underdog mentality meets Web3 innovation. We're building a platform that rewards loyalty, transparency, and genuine community engagement.",
        icon: "🔥",
      },
    ],
    "What we believe in": [
      {
        id: "vision",
        title: "Our Vision",
        content:
          "To create the most transparent, community-driven NFT ecosystem in Web3. We envision a future where holders aren't just spectators—they're stakeholders in a thriving metaverse that celebrates fighter mentality and collective strength.",
        icon: "🎯",
      },
      {
        id: "values",
        title: "Our Values",
        content:
          "Transparency. Community First. Authenticity. Delivering Results. We don't make promises we can't keep. Every decision we make is filtered through these core values, and we won't compromise them for short-term gains.",
        icon: "⭐",
      },
    ],
    "What we're committing to": [
      {
        id: "can-promise",
        title: "What We CAN Promise",
        content:
          "Consistent development and updates. Regular community communication and transparency reports. A clear roadmap with achievable milestones. Protection of holder interests. Innovative features built on actual utility, not hype.",
        icon: "✅",
      },
      {
        id: "cant-promise",
        title: "What We CAN'T Promise",
        content:
          "We can't guarantee price appreciation—crypto markets are volatile. We can't promise overnight success—sustainable projects take time. We can't eliminate all risks—Web3 is inherently risky. But we can promise to be transparent about risks and work tirelessly to mitigate them.",
        icon: "⚠️",
      },
      {
        id: "commitment",
        title: "Our Commitment to Holders",
        content:
          "Your investment—financial and emotional—matters to us. We commit to monthly transparency reports, direct founder communication, fair governance, continuous innovation, and never abandoning ship when things get tough. You're not just holders; you're family.",
        icon: "💪",
      },
    ],
  };

  const founders = [
    {
      name: "Dim AKA SlumDog",
      title: "Founder, Artist, Visionary, C.E.O.",
      story: "From the streets to the metaverse",
      background:
        "A self-made visionary with a passion for art and community building. Dim saw a gap in the Web3 space and decided to fill it with authenticity and real action.",
      experience:
        "Decades of experience in creative industries and community leadership. Built multiple successful ventures focused on bringing people together.",
      message:
        "We're not here to hype and dump. We're here to build a legacy that our kids will be proud of. Every decision is made with the long-term vision in mind. This is for the fighters, the believers, and the underdogs.",
      color: "#7CFF00",
    },
  ];

  const teamMembers = [
    {
      name: "Dim AKA SlumDog",
      role: "Billionaire",
      description: "Founder, Artist, Visionary, C.E.O.",
      color: "#CCFF00",
    },
    {
      name: "Club AKA Eddie",
      role: "Designer",
      description: "",
      color: "#CCFF00",
    },
    {
      name: "Nico Rocha",
      role: "The Big Kids Inc. C.O.D",
      description: "",
      color: "#CCFF00",
    },
    {
      name: "Soleiman Ahmadyar",
      role: "Professional Mixed Martial Artist",
      description: "",
      color: "#FF3333",
    },
    {
      name: "Kody Vogels",
      role: "Professional Mixed Martial Artist",
      description: "",
      color: "#FF3333",
    },
    {
      name: "King Vosh",
      role: "Lead Community Curator",
      description: "",
      color: "#FF00FF",
    },

    {
      name: "Kris Dim",
      role: "The Big Kidz Inc. Board Member",
      description: "",
      color: "#FF0000", // red
    },
    {
      name: "John Cristian",
      role: "Community Curator",
      description: "",
      color: "#005BFF", // blue
    },
    {
      name: "Queen Sheila",
      role: "Lead Community Curator",
      description: "",
      color: "#6B4BA3", // purple
    },
    {
      name: "Pearl",
      role: "Community Curator",
      description: "",
      color: "#39FF14", // green
    },
    {
      name: 'Omar "187" Hussein',
      role: "Professional Mixed Martial Artist",
      description: "",
      color: "#FF0000", // red
    },
    {
      name: "Coach Marcus Reaves",
      role: "World Renowned UFC Coach",
      description: "",
      color: "#39FF14", // green
    },
  ];

  return (
    <div className="w-full text-white bg-black overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen overflow-hidden w-full bg-cover flex items-center py-20"
        style={{
          backgroundBlendMode: "multiply",
          backgroundImage:
            "radial-gradient(circle at top left, #FF00FF 0%, #072130 60%), linear-gradient(135deg, #1a0033 0%, #0a0000 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#7CFF00] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF00FF] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
            Real <span className="text-[#7CFF00]">Talk</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            No BS. No empty promises. Just the real story behind Fighting
            Frenchies.
          </p>
          <div className="flex justify-center gap-4">
            <div className="inline-block px-8 py-3 bg-[#7CFF00] text-black font-bold rounded-full hover:scale-105 transition transform cursor-pointer">
              ↓ Scroll to Learn More
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION - Grid of Cards */}
      <section className="relative py-20 px-6">
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(127, 255, 0, 0.3), inset 0 0 20px rgba(127, 255, 0, 0.1);
            }
            50% {
              box-shadow: 0 0 40px rgba(127, 255, 0, 0.6), inset 0 0 40px rgba(127, 255, 0, 0.2);
            }
          }

          .card-hover:hover {
            box-shadow: 0 0 40px rgba(127, 255, 0, 0.8), inset 0 0 20px rgba(127, 255, 0, 0.2);
          }

          .section-card {
            animation: slideInUp 0.6s ease-out forwards;
          }

          .section-card:nth-child(1) { animation-delay: 0.1s; }
          .section-card:nth-child(2) { animation-delay: 0.2s; }
          .section-card:nth-child(3) { animation-delay: 0.3s; }
          .section-card:nth-child(4) { animation-delay: 0.4s; }
          .section-card:nth-child(5) { animation-delay: 0.5s; }
          .section-card:nth-child(6) { animation-delay: 0.6s; }
        `}</style>

        <div className="max-w-7xl mx-auto">
          {/* Loop through each main category */}
          {Object.entries(sections).map(
            ([category, categoryItems], catIndex) => (
              <div key={category} className="mb-24">
                {/* Category Title */}
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
                    <span className="text-[#FF00FF]">├</span> {category}
                  </h2>
                  <div className="h-1 w-20 bg-[#7CFF00] rounded-full"></div>
                </div>

                {/* Cards Grid for this category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((section, itemIndex) => (
                    <div
                      key={section.id}
                      className="section-card cursor-pointer group"
                      style={{
                        animationDelay: `${catIndex * 0.3 + itemIndex * 0.1}s`,
                      }}
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === section.id ? null : section.id,
                        )
                      }
                    >
                      <div
                        className={`relative h-full border-2 rounded-2xl p-8 bg-black/60 backdrop-blur transition-all duration-300 card-hover overflow-hidden ${
                          expandedSection === section.id
                            ? "border-[#7CFF00]"
                            : "border-gray-700 group-hover:border-[#FF00FF]"
                        }`}
                      >
                        {/* Background animated gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF00]/5 to-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="text-4xl mb-4 group-hover:animate-bounce">
                            {section.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-[#7CFF00] mb-4 group-hover:text-[#FF00FF] transition-colors">
                            {section.title}
                          </h3>

                          {/* Expandable content */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedSection === section.id
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {section.content}
                            </p>
                          </div>

                          {/* Click indicator */}
                          {expandedSection !== section.id && (
                            <p className="text-gray-500 text-xs mt-4 group-hover:text-[#7CFF00] transition-colors">
                              Click to expand →
                            </p>
                          )}
                        </div>

                        {/* Animated border on active */}
                        {expandedSection === section.id && (
                          <div
                            className="absolute inset-0 border-2 border-[#7CFF00] rounded-2xl pointer-events-none"
                            style={{
                              animation: "glow 2s ease-in-out infinite",
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black via-[#0a0a0a]/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
              <span className="text-[#FF00FF]">└</span> Meet the Founders
            </h2>
            <div className="h-1 w-20 bg-[#7CFF00] rounded-full"></div>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 100}ms both`,
                }}
              >
                {/* Founder Card */}
                <div className="relative border-2 border-gray-700 rounded-3xl p-10 bg-black/60 backdrop-blur group-hover:border-[#FF00FF] transition-all duration-300 h-full">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF00]/10 to-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div
                      className="w-32 h-32 rounded-full mb-8 flex items-center justify-center bg-black border-4 mx-auto group-hover:shadow-lg transition-all duration-300"
                      style={{ borderColor: founder.color }}
                    >
                      <div className="text-5xl">🥊</div>
                    </div>

                    {/* Name & Title */}
                    <h3
                      className="text-2xl font-bold text-center mb-2"
                      style={{ color: founder.color }}
                    >
                      {founder.name}
                    </h3>
                    <p className="text-sm font-semibold text-center text-gray-300 mb-6">
                      {founder.title}
                    </p>

                    {/* Founder Story */}
                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h4 className="text-[#7CFF00] font-bold mb-2">
                          📖 Story
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {founder.story}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[#7CFF00] font-bold mb-2">
                          🎯 Background
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {founder.background}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[#7CFF00] font-bold mb-2">
                          🏆 Experience
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {founder.experience}
                        </p>
                      </div>

                      <div className="border-l-4 border-[#FF00FF] pl-4 py-4 bg-[#FF00FF]/5 rounded">
                        <h4 className="text-[#FF00FF] font-bold mb-2">
                          💬 Message to Holders
                        </h4>
                        <p className="text-sm leading-relaxed italic">
                          "{founder.message}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-[#7CFF00] rounded-3xl p-12 bg-black/40 backdrop-blur relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7CFF00]/10 to-[#FF00FF]/10 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                This is our <span className="text-[#FF00FF]">Commitment</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We're not asking you to believe in promises. We're asking you to
                hold us accountable to our actions. Every decision, every
                update, every dollar is traceable. Every failure is an
                opportunity to learn and come back stronger.
              </p>
              <p className="text-[#7CFF00] font-semibold text-lg">
                We're in this together. 🐾
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// app/components/Footer.tsx
"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm md:text-base mb-6 text-gray-200 tracking-wide">
          <Link href="/" className="hover:text-[#6eee07] transition-colors">
            HOME
          </Link>
          <Link
            href="/passes"
            className="hover:text-[#6eee07] transition-colors"
          >
            PASSES
          </Link>
          <Link href="/lore" className="hover:text-[#6eee07] transition-colors">
            LORE
          </Link>
          <Link href="/real" className="hover:text-[#6eee07] transition-colors">
            REAL-TALK
          </Link>
          <Link
            href="/loading"
            className="hover:text-[#6eee07] transition-colors"
          >
            SHOP
          </Link>
        </nav>

        {/* Divider line */}
        <div className="w-full border-t border-gray-600 my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            aria-label="X (formerly Twitter)"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#6eee07] hover:text-[#6eee07] transition-all duration-300 hover:scale-105"
          >
            <Twitter className="w-5 h-5" />
          </a>

          <a
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#6eee07] hover:text-[#6eee07] transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            aria-label="Discord"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#6eee07] hover:text-[#6eee07] transition-all duration-300 hover:scale-105"
          >
            <FaDiscord className="w-5 h-5" />
          </a>

          <a
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#6eee07] hover:text-[#6eee07] transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0e0e0e] text-center py-3 text-sm text-gray-200">
        © 2026 All rights reserved.
      </div>
    </footer>
  );
}

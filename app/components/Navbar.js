"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Paw Print Passes", url: "/passes" },
    { name: "Lore", url: "/lore" },
    { name: "Real Talk", url: "/real" },
    { name: "Shop", url: "/loading" },
  ];

  const mobileLinks = [
    { name: "Home", url: "/" },
    { name: "Paw Print Passes", url: "/passes" },
    { name: "Lore", url: "/lore" },
    { name: "Real Talk", url: "/real" },
    { name: "Shop", url: "/loading" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? `fixed top-3 left-1/2 shadow-lg bg-[#424242]/60 border border-gray-700 ${isOpen ? "-translate-x-1/2" : " -translate-x-1/2"}`
          : "bg-[#424242]/80 border border-gray-800"
      } ${
        isOpen ? "z-40" : "z-50"
      } w-[90%] rounded-[40px] transition-all duration-300 mt-4`}
    >
      <div className="container mx-auto flex items-center justify-between  px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white  h-[60px] flex  py-3 w-auto">
          <Image
            src={"/fflogo.png"}
            alt="iGaming content writer at work"
            width={40}
            height={100}
            className="border"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex mr-6">
          <ul className="flex space-x-6 text-white text-[14px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.url;
              return (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className={
                      isActive ? "text-[#6eee07]/70" : "hover:text-[#6eee07]/40"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-[100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-[#6eee07]/70" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* ✅ Full-Screen Mobile Menu with "dot expanding" animation */}
      <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence >
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
            className="fixed left-0 bottom-0 right-0 top-0 bg-black/80 flex flex-col items-center justify-center space-y-8 text-xl z-50 text-white border rounded-[20px] h-[100vh] w-[100vw]"
          >
            {mobileLinks.map((link, index) => {
              const isActive = pathname === link.url;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.url}
                    className={
                      isActive
                        ? "text-[#6eee07]/70 uppercase"
                        : "hover:text-[#6eee07]/70 uppercase text-white"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence></div>
    </header>
  );
};

export default Navbar;

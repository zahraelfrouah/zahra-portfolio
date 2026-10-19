
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  type Section = (typeof links)[number]["name"];

const [activeSection, setActiveSection] =
  useState<Section>("Home");

const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleLinkClick = (name: Section) => {
  setActiveSection(name);
  setIsMenuOpen(false);
};

  return (
    <header className="relative z-[999]">
      {/* Navbar background */}
     <motion.div
  className="fixed top-0 left-1/2  h-18 w-full rounded-none border border-white border-opacity-40  bg-white bg-opacity-80 shadow-lg shadow-black/3 backdrop-blur-sm
    sm:top-6 sm:block sm:h-13 sm:w-xl sm:rounded-full"
  initial={{ y: -100, x: "-50%", opacity: 0 }}
  animate={{ y: 0, x: "-50%", opacity: 1 }}
/>

      <nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto flex items-center justify-center rounded-full p-2 text-gray-700 transition hover:bg-gray-100 sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <ul className="hidden items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500 sm:flex">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center rounded-full p-3 transition hover:text-gray-950",
                  {
                    "text-gray-950": activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed left-0 right-0 top-16 z-40 mx-3 rounded-2xl border border-gray-200/70 bg-white/95 p-3 shadow-lg backdrop-blur-md sm:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950",
                      {
                        "bg-gray-100 text-gray-950":
                          activeSection === link.name,
                      },
                    )}
                    href={link.hash}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

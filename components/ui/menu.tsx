"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JerryLogo } from "@/components/ui/jerryLogo";

export const Menu = () => {
  // Animation variants
  const staggerChildren = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full px-6 py-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <JerryLogo />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-zinc-600 hover:text-[#8B0000] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#FAFAFA] z-50 p-6 flex flex-col items-center justify-center space-y-6 md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-2xl text-zinc-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center space-y-6"
          >
            <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
              <Link
                href="/about"
                className="text-zinc-600 transition-colors hover:text-[#8B0000]"
              >
                About
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
              <Link
                href="/gallery"
                className="text-zinc-600 transition-colors hover:text-[#8B0000]"
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
              <Link
                href="/writing"
                className="text-zinc-600 transition-colors hover:text-[#8B0000]"
              >
                Written Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Menu Links for Desktop */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="hidden md:flex items-center space-x-6 md:flex md:items-center"
        >
          <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/about"
              className="text-zinc-600 transition-colors hover:text-[#8B0000]"
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/gallery"
              className="text-zinc-600 transition-colors hover:text-[#8B0000]"
            >
              Portfolio
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/writing"
              className="text-zinc-600 transition-colors hover:text-[#8B0000]"
            >
              Written Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { HoverCarousel } from "@/components/ui/hoverCarousel";

export function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-red-200"
    >
      <header className="w-full">
        <Menu />
      </header>

      {/*
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          JERRY ZHANG
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-gray-400"
        >
          Capturing the human condition through <span className="text-[#8B0000]">lens & light</span>.
        </motion.p>
      </section> */}

      <section className="w-full">
        <HoverCarousel/>
      </section>

      <Footer />
    </motion.main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

export function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <header className="w-full">
        <Menu />
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center">
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
      </section>

      {/* Gallery Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-6xl">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: num * 0.1 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              src={`/images/photo${num}.jpg`}
              alt={`Photo ${num}`}
              width={500}
              height={350}
              className="w-full h-auto object-cover rounded-lg transition-transform transform group-hover:scale-105"
            />
          </motion.div>
        ))}
      </section>

      <Footer />
    </motion.main>
  );
}

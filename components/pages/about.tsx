"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

export function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col"
    >
      <Menu />

      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 max-w-5xl mx-auto gap-10">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-4xl font-bold mb-3">About Jerry Zhang</h1>
          <p className="leading-relaxed">
            Jerry Zhang is a third-year photography student at Toronto Metropolitan University and a news editor at <span className="italic">The Eyeopener</span>.
          </p>
          <p className="mt-3 leading-relaxed">
            Combining photojournalism with writing, his work explores themes of cultural identity and the human condition.
          </p>
          <p className="mt-3 leading-relaxed">
            Originally from Vancouver, Jerry has documented stories across Canada and abroad, using both photography and storytelling to capture untold narratives with curiosity and depth.
          </p>
          <p className="mt-3 leading-relaxed">
            Aspiring to be a foreign correspondent, he is dedicated to connecting with people and places, one story at a time.
          </p>
        </motion.div>

        {/* Headshot Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/about/headshot.png"
            alt="Jerry Zhang"
            width={300}
            height={400}
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { Mail, Linkedin, Instagram } from "lucide-react";

export function About() {
  // Animation Variants
  const staggerChildren = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

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
            Jerry Zhang is a third-year photography student at Toronto Metropolitan University and a news editor at{" "}
            <span className="italic">The Eyeopener</span>.
          </p>
          <p className="mt-3 leading-relaxed">
            Combining photojournalism with writing, his work explores themes of cultural identity and the human condition.
          </p>
          <p className="mt-3 leading-relaxed">
            Originally from Vancouver, Jerry has documented stories across Canada and abroad, using both photography and storytelling to
            capture untold narratives with curiosity and depth.
          </p>
          <p className="mt-3 leading-relaxed">
            Aspiring to be a foreign correspondent, he is dedicated to connecting with people and places, one story at a time.
          </p>

          {/* Contact & Socials Wrapper */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="mt-6 flex flex-row justify-between"
          >
            {/* Contact Button */}
            <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
              <Link
                href="mailto:jerryzhangchartwell@gmail.com"
                className="bg-[#8B0000] text-white py-3 px-6 rounded-3xl text-lg font-semibold shadow-md hover:bg-[#B22222] transition focus:outline-none"
                >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerChildren} className="flex space-x-6 mt-2">
              <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
                <Link href="mailto:jerryzhangchartwell@gmail.com" className="text-gray-600 hover:text-[#8B0000] transition">
                  <Mail size={30} />
                </Link>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
                <Link href="https://www.linkedin.com/in/jerryxuzhizhang/" target="_blank" className="text-gray-600 hover:text-[#8B0000] transition">
                  <Linkedin size={30} />
                </Link>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
                <Link href="https://www.instagram.com/jxz_photography/" target="_blank" className="text-gray-600 hover:text-[#8B0000] transition">
                  <Instagram size={30} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
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

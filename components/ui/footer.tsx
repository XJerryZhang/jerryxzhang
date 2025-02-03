"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { JerryLogo } from "@/components/ui/jerryLogoLarge";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full p-6 mt-auto flex flex-col md:flex-row justify-between items-center px-10 space-y-6 md:space-y-0"
    >
      {/* Branding */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center md:items-start space-y-4"
      >
        <Link href="/" className="flex items-center">
          <JerryLogo className="cursor-pointer" />
        </Link>
        <div className="flex space-x-6">
            <Link href="mailto:jerryzhangchartwell@gmail.com" className="hover:text-[#8B0000] transition">
            <Mail size={22} className="text-gray-600" />
            </Link>
            <Link href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="hover:text-[#8B0000] transition">
            <Linkedin size={22} className="text-gray-600" />
            </Link>
            <Link href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" className="hover:text-[#8B0000] transition">
            <Instagram size={22} className="text-gray-600" />
            </Link>
        </div>

      </motion.div>

      {/* Social Links + Navigation */}
      <motion.div 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ delay: 0.4 }} 
  className="flex flex-col items-end space-y-4"
>
  {/* Navigation Links */}
  <nav className="flex space-x-6">
  <Link
        href="/about"
        className="text-zinc-600 transition-colors hover:text-[#8B0000]"
    >
        About
    </Link>
    <Link
        href="/portfolio"
        className="text-zinc-600 transition-colors hover:text-[#8B0000]"
    >
        Portfolio
    </Link>
    <Link
        href="/writing"
        className="text-zinc-600 transition-colors hover:text-[#8B0000]"
    >
        Written Work
    </Link>
  </nav>
  <div className="flex space-x-6">
  <p className="text-xs text-gray-600 mt-1">© {new Date().getFullYear()} JXZ Photography</p>
  </div>


</motion.div>
    </motion.footer>
  );
}

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface JerryLogoProps {
  className?: string;
}

export const JerryLogo: FC<JerryLogoProps> = ({ className }) => (
  <Link href="/" className={cn(className, "group flex items-center space-x-1")}>
    <motion.span
      whileHover={{ scale: 1.01 }}
      className="text-6xl font-semibold tracking-tight flex items-center"
    >
      Jerry
      <span className="ml-1 text-[#911313] transition-colors">x</span>
      <span className="ml-1 text-[#8B0000] transition-colors">Zhang</span>
    </motion.span>
  </Link>
);

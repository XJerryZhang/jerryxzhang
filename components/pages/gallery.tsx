"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

export function Gallery() {
  const [projects, setProjects] = useState<Record<string, string[]>>({});

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/gallery"); // Fetch from API
      const data = await res.json();
      setProjects(data.projects);
    }
    fetchImages();
  }, []);

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

      <section className="p-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Gallery
        </motion.h1>

        {Object.entries(projects).map(([projectName, images], index) => (
          <motion.div
            key={projectName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-4">{projectName}</h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    width={500} // Retains natural size
                    height={500}
                    className="object-cover w-full h-auto shadow-lg rounded-lg"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </motion.main>
  );
}

"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import projects from "@/lib/galleryData";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

export default function GalleryFolderPage() {
  const { folder } = useParams();
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const matchingFolder = Object.keys(projects).find(
    (name) => name.replace(/\s+/g, "-").toLowerCase() === (folder as string).toLowerCase()
  );

  if (!matchingFolder) {
    return <p className="text-center mt-10">Gallery not found.</p>;
  }

  const images = projects[matchingFolder];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const handleImageClick = (index) => {
    setFullscreenIndex(index);
  };

  const handleFullscreenClose = useCallback(() => {
    setFullscreenIndex(null);
  }, []);

  const handlePrevImage = useCallback((e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNextImage = useCallback((e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (fullscreenIndex === null) return;

      switch (event.key) {
        case "ArrowLeft":
          handlePrevImage(event);
          break;
        case "ArrowRight":
          handleNextImage(event);
          break;
        case "Escape":
          handleFullscreenClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenIndex, handlePrevImage, handleNextImage, handleFullscreenClose]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col min-h-screen bg-gradient-to-b from-white to-red-200"
    >
      <Menu/>
      <motion.header 
        className="w-full text-center my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold capitalize">{matchingFolder}</h1>
      </motion.header>

      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((src, imgIndex) => (
            <motion.div key={imgIndex} variants={imageVariants} onClick={() => handleImageClick(imgIndex)}>
              <Image
                src={src}
                alt={`Gallery Image ${imgIndex + 1}`}
                width={500}
                height={300}
                className="h-[180px] w-auto object-cover rounded-md shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer/>

      {fullscreenIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleFullscreenClose}
        >
          <button 
            onClick={handlePrevImage} 
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            &larr;
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[fullscreenIndex]}
              alt={`Fullscreen Image ${fullscreenIndex + 1}`}
              width={1000}
              height={1000}
              objectFit="contain"
              className="max-h-[90vh] w-auto"
            />
          </div>
          <button 
            onClick={handleNextImage} 
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            &rarr;
          </button>
        </div>
      )}
    </motion.main>
  );
}

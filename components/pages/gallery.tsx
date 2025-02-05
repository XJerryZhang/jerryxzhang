"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";

const galleryPath = "/gallery";

// Fetch images from the API
async function fetchGalleryImages(): Promise<Record<string, string[]>> {
  const res = await fetch("/api/gallery");
  if (!res.ok) return {};
  return await res.json();
}

export function Gallery() {
  const [projects, setProjects] = useState<Record<string, string[]>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchGalleryImages().then(setProjects);
  }, []);

  const openImage = (folder: string, index: number) => {
    setCurrentFolder(folder);
    setCurrentIndex(index);
    setSelectedImage(projects[folder][index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    setCurrentFolder(null);
  };

  const navigateImage = useCallback(
    (direction: "left" | "right") => {
      if (currentFolder && currentIndex !== null) {
        const images = projects[currentFolder];
        let newIndex =
          direction === "left"
            ? (currentIndex - 1 + images.length) % images.length
            : (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
      }
    },
    [currentFolder, currentIndex, projects]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") navigateImage("left");
      if (event.key === "ArrowRight") navigateImage("right");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateImage]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col min-h-screen"
    >
      <header className="w-full">
        <Menu />
      </header>

      <section className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Gallery
        </motion.h1>

        {Object.entries(projects).map(([folderName, images], index) => (
          <motion.div
            key={folderName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-4 capitalize">{folderName}</h2>

            <div className="flex flex-wrap gap-2 justify-start">
              {images.map((src, imgIndex) => (
                <div
                  key={imgIndex}
                  className="flex items-center cursor-pointer"
                  onClick={() => openImage(folderName, imgIndex)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${imgIndex + 1}`}
                    width={500}
                    height={300}
                    className="h-[180px] w-auto object-cover rounded-md shadow-md transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />

      {selectedImage !== null && currentFolder !== null && currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("left");
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl px-6 py-4"
          >
            ←
          </button>

          <div className="relative w-full max-w-screen-lg mx-auto p-4 flex justify-center">
            <Image
              src={selectedImage}
              alt="Selected Image"
              layout="intrinsic"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg w-full max-h-screen object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("right");
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl px-6 py-4"
          >
            →
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </motion.main>
  );
}

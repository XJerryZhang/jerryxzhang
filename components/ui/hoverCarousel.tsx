"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Folder {
  id: number;
  name: string;
  mainImage: string;
}

export function HoverCarousel() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 800,
    height: 600,
  });

  useEffect(() => {
    async function fetchFolders() {
      try {
        const res = await fetch("/api/covers");
        const data: Folder[] = await res.json();
        setFolders(data);
        setActiveImage(data[0]?.mainImage || null);
        if (data[0]?.mainImage) updateImageSize(data[0]?.mainImage);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    }
    fetchFolders();
  }, []);

  const updateImageSize = async (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
    };
  };

  return (
    <div className="flex w-full h-screen p-6 items-center justify-center">
      {/* Spotlight Image */}
      <motion.div
        key={activeImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-full max-h-full flex justify-center items-center"
        style={{ width: imageSize.width, height: imageSize.height }}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Highlighted Folder Image"
            width={imageSize.width}
            height={imageSize.height}
            className="rounded-lg"
          />
        )}
      </motion.div>

      {/* Folder Names (on the right side) */}
      <div className="flex flex-col justify-center items-end w-1/4 gap-4 p-6">
        {folders.map((folder) => (
          <button
            key={folder.id}
            onMouseEnter={() => {
              setActiveImage(folder.mainImage);
              updateImageSize(folder.mainImage);
            }}
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors text-right"
          >
            {folder.name}
          </button>
        ))}
      </div>
    </div>
  );
}

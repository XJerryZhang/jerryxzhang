"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface Folder {
  id: number;
  name: string;
  mainImage: string;
}
export function HoverCarousel() {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [activeFolder, setActiveFolder] = useState<Folder | null>(null);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
    const router = useRouter();
  
    useEffect(() => {
      async function fetchFolders() {
        try {
          const res = await fetch("/api/covers");
          const data: Folder[] = await res.json();
          setFolders(data);
          if (data.length > 0) {
            setActiveFolder(data[0]);
          }
        } catch (error) {
          console.error("Error fetching folders:", error);
        }
      }
      fetchFolders();
    }, []);
  
    const handleImageClick = () => {
      if (activeFolder) {
        const formattedName = activeFolder.name.replace(/\s+/g, "-").toLowerCase();
        router.push(`/gallery/#${formattedName}`);
      }
    };
  
    return (
      <>
        <div className="relative flex md:flex-row w-full mx-auto h-[80vh] md:h-[100vh] p-6 items-center justify-between overflow-hidden">
          <motion.div
            key={activeFolder?.id || hoveredImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-grow flex justify-center items-center cursor-pointer"
            onClick={handleImageClick}
            style={{ width: "800px", height: "600px" }} // Set fixed dimensions
          >
            {activeFolder?.mainImage && (
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={hoveredImage || activeFolder.mainImage}
                  alt="Highlighted Folder Image"
                  width={800} // Fixed width
                  height={600} // Fixed height
                  className="object-contain"
                />
              </div>
            )}
          </motion.div>
  
          {/* Vertical Scroll for Web */}
          <div className="w-[20%] h-full overflow-y-scroll mt-4 p-6 md:block hidden">
            <div className="flex flex-col space-y-4">
              {folders.map((folder) => (
                <div
                  key={folder.id}
                  onMouseEnter={() => setHoveredImage(folder.mainImage)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => {
                    setActiveFolder(folder);
                    setHoveredImage(null);
                  }}
                  className="w-[150px] h-[150px] cursor-pointer"
                >
                  <Image
                    src={folder.mainImage}
                    alt={folder.name}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Horizontal Scroll for Mobile */}
        <div className="md:hidden w-full mt-4 overflow-x-scroll py-2">
          <div className="flex space-x-4">
            {folders.map((folder) => (
              <div
                key={folder.id}
                onMouseEnter={() => setHoveredImage(folder.mainImage)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => {
                  setActiveFolder(folder);
                  setHoveredImage(null);
                }}
                className="flex-shrink-0 w-[150px] h-[100px] cursor-pointer"
              >
                <Image
                  src={folder.mainImage}
                  alt={folder.name}
                  width={150}
                  height={100}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
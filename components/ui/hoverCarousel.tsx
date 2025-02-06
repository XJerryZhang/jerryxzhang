"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Folder {
  id: number;
  name: string;
  mainImage: string;
}

export function HoverCarousel() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [activeFolder, setActiveFolder] = useState<Folder | null>(null);
  const [hoveredFolder, setHoveredFolder] = useState<Folder | null>(null);
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

  const handleFolderClick = () => {
    if (activeFolder) {
      const formattedName = activeFolder.name.replace(/\s+/g, "-").toLowerCase();
      router.push(`/gallery/${formattedName}`);
    }
  };

  return (
    <>
      <div className="relative flex md:flex-row w-full mx-auto h-[80vh] md:h-[100vh] p-6 items-center justify-between overflow-hidden">
        <motion.div
          key={hoveredFolder?.id || activeFolder?.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-grow flex justify-center items-center cursor-pointer"
          onClick={handleFolderClick}
          style={{ width: "700px", height: "700px" }}
        >
          {(hoveredFolder?.mainImage || activeFolder?.mainImage) && (
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src={hoveredFolder?.mainImage || activeFolder?.mainImage}
                alt="Highlighted Folder Image"
                width={700}
                height={700}
                className="max-w-full max-h-full w-auto h-auto"
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
                onClick={() => setActiveFolder(folder)}
                onMouseEnter={() => setHoveredFolder(folder)}
                onMouseLeave={() => setHoveredFolder(null)}
                className={`w-full h-[50px] flex items-center justify-center cursor-pointer rounded-md p-2 transition truncate ${activeFolder?.id === folder.id ? "text-black" : "text-gray-500 hover:text-red-800"}`}
                title={folder.name}
              >
                {folder.name}
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
              onClick={() => setActiveFolder(folder)}
              className="flex-shrink-0 w-[150px] h-[50px] flex items-center justify-center cursor-pointer rounded-md p-2 transition truncate"
              title={folder.name}
            >
              {folder.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
"use client";

import { useRouter } from "next/navigation";
import projects from "@/lib/galleryData";
import { Menu } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-red-200">
      <Menu />
      <div className="max-w-6xl mx-auto px-6">
        <header className="w-full">
          <h1 className="text-4xl font-bold my-8">Gallery</h1>
        </header>

        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(projects).map(([folderName, images], index) => {
              const formattedName = folderName.replace(/\s+/g, "-").toLowerCase();
              const previewImage = images.length > 0 ? images[0] : "/default-placeholder.jpg";

              return (
                <motion.div
                  key={folderName}
                  className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-all"
                  onClick={() => router.push(`/gallery/${formattedName}`)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={previewImage}
                    alt={`${folderName} preview`}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-2xl font-semibold capitalize text-center">{folderName}</h2>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public/carousel_covers");

  if (!fs.existsSync(galleryPath)) {
    return NextResponse.json({ error: "Covers folder not found" }, { status: 404 });
  }

  // Read and filter folders
  const folders = fs.readdirSync(galleryPath).filter((file) =>
    fs.statSync(path.join(galleryPath, file)).isDirectory()
  );

  // Process folders and extract numbers
  const processedFolders = folders
    .map((folder) => {
      const match = folder.match(/^(\d+)\.\s*(.*)$/); // Extract number and name
      const order = match ? parseInt(match[1], 10) : Infinity;
      const name = match ? match[2] : folder;

      const folderPath = path.join(galleryPath, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .sort(); // Ensure consistent order

      return files.length > 0 ? { id: folder, name, mainImage: `/carousel_covers/${folder}/${files[0]}`, order } : null;
    })
    .filter(Boolean) // Remove null values
    .sort((a, b) => a.order - b.order); // Sort numerically

  return NextResponse.json(processedFolders);
}

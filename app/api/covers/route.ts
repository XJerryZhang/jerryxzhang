import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public/carousel_covers");

  if (!fs.existsSync(galleryPath)) {
    return NextResponse.json({ error: "Covers folder not found" }, { status: 404 });
  }

  const folders = fs.readdirSync(galleryPath).filter((file) =>
    fs.statSync(path.join(galleryPath, file)).isDirectory()
  );

  const images = folders.map((folder) => {
    const folderPath = path.join(galleryPath, folder);
    const files = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .sort(); // Sort to ensure consistency

    return files.length > 0
      ? { id: folder, name: folder, mainImage: `/gallery/${folder}/${files[0]}` }
      : null;
  }).filter(Boolean); // Remove null values

  return NextResponse.json(images);
}
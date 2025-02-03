import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  if (!fs.existsSync(galleryPath)) {
    return NextResponse.json({ error: "Gallery folder not found" }, { status: 404 });
  }

  const folders = fs.readdirSync(galleryPath).filter((file) =>
    fs.statSync(path.join(galleryPath, file)).isDirectory()
  );

  const images: Record<string, string[]> = {};

  folders.forEach((folder) => {
    const folderPath = path.join(galleryPath, folder);
    const files = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map((file) => `/gallery/${folder}/${file}`);

    if (files.length > 0) {
      images[folder] = files;
    }
  });

  return NextResponse.json(images);
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface FolderInfo {
  id: string;
  name: string;
  mainImage: string;
  order: number;
}

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public/carousel_covers");

  if (!fs.existsSync(galleryPath)) {
    return NextResponse.json({ error: "Covers folder not found" }, { status: 404 });
  }

  const folders = fs.readdirSync(galleryPath).filter((file) =>
    fs.statSync(path.join(galleryPath, file)).isDirectory()
  );

  const processedFolders: FolderInfo[] = folders
    .map((folder): FolderInfo | null => {
      const match = folder.match(/^(\d+)\.\s*(.*)$/);
      const order = match ? parseInt(match[1], 10) : Infinity;
      const name = match ? match[2] : folder;

      const folderPath = path.join(galleryPath, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .sort();

      return files.length > 0 ? { id: folder, name, mainImage: `/carousel_covers/${folder}/${files[0]}`, order } : null;
    })
    .filter((folder): folder is FolderInfo => folder !== null)
    .sort((a, b) => a.order - b.order);

  return NextResponse.json(processedFolders);
}

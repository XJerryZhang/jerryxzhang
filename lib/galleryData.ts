const baseGalleryPath = "/gallery";

const categories = [
  "C Suite",
  "Chongqing 2018",
  "Chongqing 2019",
  "Chongqing 2023",
  "EPR Caledone Fir",
  "Fashion Art Toronto",
  "Fisherman & Skyline",
  "International Day",
  "Japan 2019",
  "Landscapes",
  "Lion Dance",
  "MengHua Studio",
  "Porters",
  "Porters 2",
  "Portraits",
  "Product",
  "River Swimmer",
  "University Projects",
  "XueXiaWu Assit",
];

const projects: Record<string, string[]> = {};
categories.forEach((category) => {
  const folderPath = `${baseGalleryPath}/${category}`;
  
  // Convert category name to match file format
  const formattedCategory = category.replace(/\s+/g, "_"); // Replace spaces with underscores

  // Assuming images are named as: Jerry_Zhang_FolderName-1.jpg, Jerry_Zhang_FolderName-2.jpg, etc.
  projects[category] = Array.from({ length: 10 }, (_, i) => `${folderPath}/Jerry_Zhang_${formattedCategory}-${i + 1}.jpg`);
});

export default projects;

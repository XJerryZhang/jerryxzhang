const baseGalleryPath = "/gallery";

// Manually list the gallery folders & their image counts
const categories: Record<string, number> = {
  "C Suite": 16,
  "Chongqing 2018": 6,
  "Chongqing 2019": 25,
  "Chongqing 2023": 14,
  "ERP Caledon Fire Station": 37,
  "Fashion Art Toronto": 12,
  "Fisherman & Skyline": 24,
  "International Day of Action": 13,
  "Japan 2019": 18,
  "Landscapes": 7,
  "Lion Dance": 28,
  "MengHua Street": 30,
  "Porters": 19,
  "Porters 2": 14,
  "Portraits": 16,
  "Product": 2,
  "River Swimmer": 36,
  "University Projects": 10,
  "XueXiaWu Assit": 15,
};

const projects: Record<string, string[]> = {};
Object.entries(categories).forEach(([category, imageCount]) => {
  const folderPath = `${baseGalleryPath}/${category}`;

  const formattedCategory = category.replace(/\s+/g, "_");

  projects[category] = Array.from({ length: imageCount }, (_, i) => `${folderPath}/Jerry_Zhang_${formattedCategory}-${i + 1}.jpg`);
});

export default projects;
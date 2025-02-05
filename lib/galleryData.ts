const baseGalleryPath = "/gallery";

// Manually list the gallery folders & their image counts
const categories: Record<string, number> = {
  "C Suite": 5,
  "Chongqing 2018": 6,
  "Chongqing 2019": 25,
  "Chongqing 2023": 16,
  "EPR Caledone Fir": 38,
  "Fashion Art Toronto": 10,
  "Fisherman & Skyline": 9,
  "International Day": 4,
  "Japan 2019": 11,
  "Landscapes": 15,
  "Lion Dance": 6,
  "MengHua Studio": 3,
  "Porters": 8,
  "Porters 2": 10,
  "Portraits": 14,
  "Product": 7,
  "River Swimmer": 5,
  "University Projects": 9,
  "XueXiaWu Assit": 6,
};

const projects: Record<string, string[]> = {};
Object.entries(categories).forEach(([category, imageCount]) => {
  const folderPath = `${baseGalleryPath}/${category}`;

  const formattedCategory = category.replace(/\s+/g, "_");

  projects[category] = Array.from({ length: imageCount }, (_, i) => `${folderPath}/Jerry_Zhang_${formattedCategory}-${i + 1}.jpg`);
});

export default projects;
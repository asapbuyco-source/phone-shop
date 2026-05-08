import fetch from 'node-fetch';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/data/products.ts', 'utf-8').replace(/^export const products.*=/, '').replace(/];$/, ''));
const imageMap = {};
const duplicates = [];

for (const p of data) {
  if (imageMap[p.image]) {
    duplicates.push({ id: p.id, name: p.name, image: p.image, existing: imageMap[p.image] });
  } else {
    imageMap[p.image] = p.id + ' - ' + p.name;
  }
}

console.log('Duplicate images found:', duplicates.length);
duplicates.forEach(d => console.log(`- ${d.id} (${d.name}) uses same as ${d.existing}`));
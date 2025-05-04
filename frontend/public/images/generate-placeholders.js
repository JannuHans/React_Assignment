import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = ['#1976d2', '#2196f3', '#64b5f6'];
const sizes = [
  { width: 800, height: 600, name: 'card1.jpg' },
  { width: 800, height: 600, name: 'card2.jpg' },
  { width: 800, height: 600, name: 'card3.jpg' }
];

sizes.forEach((size, index) => {
  const canvas = createCanvas(size.width, size.height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = colors[index];
  ctx.fillRect(0, 0, size.width, size.height);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Feature ${index + 1}`, size.width / 2, size.height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(__dirname, size.name), buffer);
}); 
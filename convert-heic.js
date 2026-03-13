const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const imagesDir = path.join(__dirname, 'public', 'images');

async function convertHeicToJpg() {
  try {
    const files = fs.readdirSync(imagesDir);
    const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));

    for (const file of heicFiles) {
      console.log(`Converting ${file}...`);
      const heicPath = path.join(imagesDir, file);
      const jpgPath = path.join(imagesDir, file.replace(/\.HEIC$/i, '.jpg'));
      
      if (fs.existsSync(jpgPath)) {
        console.log(`Skipping ${file}, JPG already exists.`);
        continue;
      }

      
      const inputBuffer = fs.readFileSync(heicPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });
      
      fs.writeFileSync(jpgPath, outputBuffer);
      console.log(`Success: ${file} -> ${path.basename(jpgPath)}`);
    }
    console.log('All conversions complete.');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertHeicToJpg();

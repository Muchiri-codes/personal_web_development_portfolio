
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "public",);
const outputDir = path.join(__dirname, "public", "images-optimized");

// Maximum width/height for website images
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1200;

// WebP quality
const QUALITY = 82;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages(dir, relativeDir = "") {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);

    // Process folders recursively
    if (stat.isDirectory()) {
      const newRelativeDir = path.join(relativeDir, file);

      const newOutputDir = path.join(
        outputDir,
        newRelativeDir
      );

      if (!fs.existsSync(newOutputDir)) {
        fs.mkdirSync(newOutputDir, { recursive: true });
      }

      await convertImages(inputPath, newRelativeDir);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    // Only process PNG/JPG/JPEG
    if (![".png", ".jpg", ".jpeg"].includes(ext)) {
      continue;
    }

    const outputFolder = path.join(
      outputDir,
      relativeDir
    );

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    const outputPath = path.join(
      outputFolder,
      path.basename(file, ext) + ".webp"
    );

    try {
      await sharp(inputPath)
        .resize({
          width: MAX_WIDTH,
          height: MAX_HEIGHT,
          fit: "inside",
          withoutEnlargement: true
        })
        .webp({
          quality: QUALITY
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;

      const originalMB =
        originalSize / 1024 / 1024;

      const newMB =
        newSize / 1024 / 1024;

      const reduction =
        ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(
        `${file} → ${path.basename(outputPath)}`
      );

      console.log(
        `   ${originalMB.toFixed(2)} MB → ${newMB.toFixed(2)} MB`
      );

      console.log(
        `   Reduction: ${reduction}%`
      );

      console.log("");
    } catch (error) {
      console.error(
        `❌ Failed: ${file}`
      );

      console.error(
        `   ${error.message}`
      );

      console.log("");
    }
  }
}

console.log("======================================");
console.log(" GIS IMAGE OPTIMIZATION");
console.log("======================================");
console.log(`Maximum size: ${MAX_WIDTH} × ${MAX_HEIGHT}`);
console.log(`WebP quality: ${QUALITY}`);
console.log(`Output: ${outputDir}`);
console.log("======================================\n");

convertImages(inputDir)
  .then(() => {
    console.log("======================================");
    console.log("✅ OPTIMIZATION COMPLETE");
    console.log("======================================");
    console.log(`Optimized images are in:`);
    console.log(outputDir);
  })
  .catch((error) => {
    console.error("\n❌ Optimization failed:");
    console.error(error);
  });


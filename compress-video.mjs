import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const inputDir = path.join(__dirname, "public");
const outputDir = path.join(__dirname, "public", "optimized");
const CRF = 25;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const FPS = 30;


if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


const videos = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(mp4|mov|mkv|avi|webm)$/i.test(file));

console.log("Input folder :", inputDir);
console.log("Output folder:", outputDir);
console.log();

console.log(" VIDEO OPTIMIZATION");
console.log(`Videos found: ${videos.length}`);
console.log(`CRF: ${CRF}`);
console.log(`Maximum resolution: ${MAX_WIDTH} × ${MAX_HEIGHT}`);
console.log();


function compressVideo(filename) {
  return new Promise((resolve) => {
    const inputPath = path.join(inputDir, filename);
    const outputPath = path.join(outputDir, filename);

    console.log(`🎬 Processing: ${filename}`);

    const args = [
      "-i",
      inputPath,

      // Resize without enlarging
      "-vf",
      `scale='min(${MAX_WIDTH},iw)':'min(${MAX_HEIGHT},ih)':force_original_aspect_ratio=decrease,fps=${FPS}`,

      // Video
      "-c:v",
      "libx264",

      "-crf",
      String(CRF),

      "-preset",
      "medium",

      // Audio
      "-c:a",
      "aac",

      "-b:a",
      "96k",

      // Better web playback
      "-movflags",
      "+faststart",

      // Overwrite existing optimized file
      "-y",
      outputPath,
    ];

    const ffmpeg = spawn("ffmpeg", args);

    let errorOutput = "";

    ffmpeg.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    ffmpeg.on("close", (code) => {
      if (code !== 0) {
        console.log(`   ❌ FFmpeg failed`);
        console.log(errorOutput);
        console.log();
        resolve();
        return;
      }

      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;

      const originalMB = originalSize / 1024 / 1024;
      const optimizedMB = optimizedSize / 1024 / 1024;


      if (optimizedSize < originalSize) {
        const reduction =
          ((originalSize - optimizedSize) / originalSize) * 100;

        console.log(`    ✅ Optimized`);
        console.log(
          `   ${originalMB.toFixed(2)} MB → ${optimizedMB.toFixed(2)} MB`
        );
        console.log(`   Reduction: ${reduction.toFixed(1)}%`);
        console.log();

      } else {
        const increase =
          ((optimizedSize - originalSize) / originalSize) * 100;

        console.log(`   ⚠️ Optimization made it larger`);
        console.log(
          `   ${originalMB.toFixed(2)} MB → ${optimizedMB.toFixed(2)} MB`
        );
        console.log(`   Increase: ${increase.toFixed(1)}%`);

        // Delete the larger optimized version
        fs.unlinkSync(outputPath);

        console.log(`   ↩️ Original kept`);
        console.log();
      }

      resolve();
    });
  });
}

async function main() {
  for (const video of videos) {
    await compressVideo(video);
  }

  console.log("✅ VIDEO OPTIMIZATION COMPLETE");
  console.log(`Optimized folder: ${outputDir}`);
}

main();
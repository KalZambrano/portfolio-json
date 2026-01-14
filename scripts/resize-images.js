import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.join(__dirname, "../public/me.webp");
const sizes = [128, 256, 512];

async function run() {
  for (const size of sizes) {
    const out = path.join(__dirname, `../public/me-${size}.webp`);
    await sharp(input)
      .resize(size, size, { fit: "cover" })
      .webp({ quality: 90 })
      .toFile(out);
    console.log(`Wrote ${out}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

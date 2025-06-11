import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, relative, parse, extname, dirname } from 'path';
import { createHash } from 'crypto';

const PUBLIC_DIR = join(process.cwd(), 'public');
const OPTIMIZED_DIR = join(process.cwd(), 'public', 'optimized');

async function ensureOptimizedDir() {
  try {
    await fs.mkdir(OPTIMIZED_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

function generateUniqueFilename(filePath) {
  // Get the relative path from PUBLIC_DIR
  const relativePath = relative(PUBLIC_DIR, filePath);
  // Create a hash of the relative path
  const hash = createHash('md5').update(relativePath).digest('hex').slice(0, 8);
  // Get the original filename without extension
  const { name } = parse(filePath);
  // Preserve directory structure
  const relativeDir = dirname(relativePath);
  
  return {
    uniqueName: `${name}-${hash}`,
    relativeDirPath: relativeDir === '.' ? '' : relativeDir
  };
}

async function ensureDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

async function optimizeImage(filePath) {
  const stats = await fs.stat(filePath);
  if (!stats.isFile()) return;

  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const { uniqueName, relativeDirPath } = generateUniqueFilename(filePath);
  
  // Create the optimized subdirectory if it doesn't exist
  const optimizedSubDir = join(OPTIMIZED_DIR, relativeDirPath);
  await ensureDirectory(optimizedSubDir);
  
  // Create the optimized file path
  const optimizedPath = join(optimizedSubDir, `${uniqueName}.webp`);

  try {
    // Generate WebP version
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(optimizedPath);

    // Generate blur placeholder
    const blurPlaceholder = await sharp(filePath)
      .resize(10)
      .blur(5)
      .toBuffer();

    const blurDataURL = `data:image/webp;base64,${blurPlaceholder.toString('base64')}`;

    return {
      original: filePath,
      optimized: optimizedPath,
      blurDataURL
    };
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'optimized') {
      const subResults = await processDirectory(fullPath);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const result = await optimizeImage(fullPath);
      if (result) results.push(result);
    }
  }

  return results;
}

async function generateImageManifest(results) {
  const manifest = {
    images: results.reduce((acc, img) => {
      const relativePath = relative(PUBLIC_DIR, img.original);
      acc[relativePath] = {
        optimizedPath: relative(PUBLIC_DIR, img.optimized),
        blurDataURL: img.blurDataURL
      };
      return acc;
    }, {})
  };

  await fs.writeFile(
    join(process.cwd(), 'src/image-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
}

async function main() {
  try {
    // Save the game pad image first
    const gamePadBuffer = Buffer.from(`
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 250C400 331.797 331.797 400 250 400C168.203 400 100 331.797 100 250C100 168.203 168.203 100 250 100C331.797 100 400 168.203 400 250Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="100" y1="100" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stop-color="#86EFAC"/>
            <stop offset="1" stop-color="#93C5FD"/>
          </linearGradient>
        </defs>
      </svg>
    `);
    await fs.writeFile(join(PUBLIC_DIR, 'game-pad.png'), gamePadBuffer);

    await ensureOptimizedDir();
    const results = await processDirectory(PUBLIC_DIR);
    await generateImageManifest(results);
    console.log(`Successfully optimized ${results.length} images`);
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

main(); 
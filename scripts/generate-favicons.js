import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';

const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 70, name: 'mstile-70x70.png' },
  { size: 150, name: 'mstile-150x150.png' },
  { size: 310, name: 'mstile-310x310.png' },
  { width: 310, height: 150, name: 'mstile-310x150.png' },
];

const SOURCE_ICON = join(process.cwd(), 'public/favicon-clarivue/web-app-manifest-512x512.png');
const OUTPUT_DIR = join(process.cwd(), 'public/favicon-clarivue');

async function generateFavicons() {
  try {
    // Ensure source file exists
    await fs.access(SOURCE_ICON);
    
    // Generate each size
    for (const config of FAVICON_SIZES) {
      const outputPath = join(OUTPUT_DIR, config.name);
      
      if (config.width && config.height) {
        // For rectangular icons
        await sharp(SOURCE_ICON)
          .resize(config.width, config.height)
          .png()
          .toFile(outputPath);
      } else {
        // For square icons
        await sharp(SOURCE_ICON)
          .resize(config.size, config.size)
          .png()
          .toFile(outputPath);
      }
      
      console.log(`Generated ${config.name}`);
    }
    
    console.log('Successfully generated all favicon sizes');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 
/**
 * OG Image Generator Script
 * Generates a 1200x630px OG image with black background and centered logo
 * 
 * Usage: node scripts/generate-og-image.js
 * 
 * Requirements: npm install sharp
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const LOGO_MAX_WIDTH = 800;
const LOGO_MAX_HEIGHT = 350;

async function generateOGImage() {
  const publicDir = path.join(__dirname, '..', 'public');
  const logoPath = path.join(publicDir, 'oldtownlogo.webp');
  const outputPath = path.join(publicDir, 'og-image.png');

  // Check if logo exists
  if (!fs.existsSync(logoPath)) {
    console.error('Error: Logo not found at', logoPath);
    process.exit(1);
  }

  console.log('Generating OG image...');

  try {
    // Get logo metadata
    const logoMeta = await sharp(logoPath).metadata();
    console.log(`Original logo size: ${logoMeta.width}x${logoMeta.height}`);

    // Calculate resize dimensions to fit within max bounds while maintaining aspect ratio
    let resizeWidth = LOGO_MAX_WIDTH;
    let resizeHeight = Math.round((logoMeta.height / logoMeta.width) * LOGO_MAX_WIDTH);

    if (resizeHeight > LOGO_MAX_HEIGHT) {
      resizeHeight = LOGO_MAX_HEIGHT;
      resizeWidth = Math.round((logoMeta.width / logoMeta.height) * LOGO_MAX_HEIGHT);
    }

    console.log(`Resized logo: ${resizeWidth}x${resizeHeight}`);

    // Resize logo
    const resizedLogo = await sharp(logoPath)
      .resize(resizeWidth, resizeHeight, { fit: 'contain' })
      .toBuffer();

    // Calculate position to center the logo
    const left = Math.round((OG_WIDTH - resizeWidth) / 2);
    const top = Math.round((OG_HEIGHT - resizeHeight) / 2) - 20; // Slightly above center for tagline

    // Create black background and composite logo
    await sharp({
      create: {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
      .composite([
        {
          input: resizedLogo,
          left: left,
          top: top
        }
      ])
      .png()
      .toFile(outputPath);

    console.log(`✅ OG image generated successfully: ${outputPath}`);
    console.log(`   Size: ${OG_WIDTH}x${OG_HEIGHT}px`);
    console.log('\nNext steps:');
    console.log('1. Update index.html og:image to use /og-image.png');
    console.log('2. Deploy with: vercel --prod');
    console.log('3. Clear Facebook cache: https://developers.facebook.com/tools/debug/');

  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

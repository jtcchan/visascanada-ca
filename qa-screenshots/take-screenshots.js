const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const STAGING = 'https://visascanada-staging.netlify.app';
const LIVE = 'https://visascanada.ca';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

async function takeScreenshot(page, url, outPath) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  // Wait a bit for fonts to load
  await page.waitForTimeout(2000);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved:', outPath);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  
  for (const vp of viewports) {
    const outDir = path.join(__dirname, vp.name);
    fs.mkdirSync(outDir, { recursive: true });
    
    const page = await browser.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    
    console.log(`\nViewport: ${vp.name} (${vp.width}x${vp.height})`);
    
    await takeScreenshot(page, STAGING, path.join(outDir, 'staging.png'));
    await takeScreenshot(page, LIVE, path.join(outDir, 'live.png'));
    
    await page.close();
  }
  
  await browser.close();
  console.log('\nAll screenshots done!');
}

main().catch(console.error);

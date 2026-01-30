const { chromium } = require('playwright');

const ORIGINAL = 'https://www.visascanada.ca';
const STAGING = 'https://visascanada-staging.netlify.app';

const BREAKPOINTS = [
  { width: 1440, height: 900, name: '1440' },
  { width: 375, height: 812, name: '375' },
];

const PAGES = [
  { path: '/', name: 'homepage' },
];

async function captureScreenshots() {
  const browser = await chromium.launch();
  
  for (const site of [{ url: ORIGINAL, folder: 'original-v3' }, { url: STAGING, folder: 'staging-v3' }]) {
    for (const bp of BREAKPOINTS) {
      const context = await browser.newContext({
        viewport: { width: bp.width, height: bp.height },
      });
      const page = await context.newPage();
      
      for (const pg of PAGES) {
        const fullUrl = site.url + pg.path;
        console.log(`Capturing ${site.folder}/${bp.name}/${pg.name}...`);
        
        try {
          await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 });
          await page.waitForTimeout(2000);
          
          await page.screenshot({
            path: `${site.folder}/${bp.name}/${pg.name}.png`,
            fullPage: true,
          });
        } catch (err) {
          console.error(`Failed: ${fullUrl} - ${err.message}`);
        }
      }
      
      await context.close();
    }
  }
  
  await browser.close();
  console.log('Done!');
}

captureScreenshots();

#!/usr/bin/env node
/**
 * Capture portfolio screenshots using Puppeteer.
 *
 * Usage:
 *   npx puppeteer browsers install chrome   # one-time setup
 *   node scripts/capture-portfolio-screenshots.mjs
 *
 * This saves a 1440×810 JPEG screenshot of every portfolio project
 * into public/images/portfolio/{slug}.jpg
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '..', 'public', 'images', 'portfolio');

const sites = [
  { slug: 'tenx-and-company',    url: 'https://www.tenxandcompany.com' },
  { slug: 'building-with-valor', url: 'https://www.buildingwithvalor.com' },
  { slug: 'true-gritt-sports',   url: 'https://truegrittsports.org' },
  { slug: 'mainish',             url: 'https://www.mainish.com' },
  { slug: 'valhalla-roofing',    url: 'https://www.redemit1.com/demos/valhalla-roofing' },
  { slug: 'treasure-valley-baseball', url: 'https://www.redemit1.com/demos/treasure-valley-baseball' },
];

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1440, height: 810 },
  });

  for (const { slug, url } of sites) {
    console.log(`Capturing ${slug}...`);
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Extra wait for animations / lazy images
      await new Promise(r => setTimeout(r, 2000));
      const path = resolve(outDir, `${slug}.jpg`);
      await page.screenshot({ path, type: 'jpeg', quality: 85 });
      console.log(`  ✓ Saved ${path}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to public/images/portfolio/');
}

main().catch(console.error);

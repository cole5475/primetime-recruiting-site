import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';

const sections = [
  { id: 'pitch', name: 'pitch' },
  { id: 'math', name: 'math' },
  { id: 'offer', name: 'offer' },
  { id: 'stack', name: 'stack' },
  { id: 'mpireu', name: 'mpireu' },
  { id: 'straight-talk', name: 'straight-talk' },
  { id: 'book', name: 'final-cta' },
  { id: 'site-footer', name: 'footer', selector: 'footer.site-footer' },
];

const outDir = path.join(process.cwd(), 'screenshots');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

for (const section of sections) {
  const selector = section.selector || `#${section.id}`;
  const el = await page.$(selector);
  if (!el) {
    console.error(`Missing: ${selector}`);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const file = path.join(outDir, `${section.name}.png`);
  await el.screenshot({ path: file });
  console.log(`Saved ${file}`);
}

await browser.close();

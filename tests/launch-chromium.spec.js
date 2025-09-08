// A tiny Playwright test that launches a Chromium browser and prints "hello world"
// to the Node console and to the browser console (captured and forwarded to Node).
import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('launch chromium and print hello world', async () => {
  // Launch Chromium (headless by default)
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Forward browser console messages to the Node console so you can see them in test output
  page.on('console', (msg) => {
    console.log(`PAGE LOG: ${msg.text()}`);
  });

  // Evaluate a script in the page that logs to the browser console
  await page.evaluate(() => {
    console.log('hello world from page');
  });

  // Also print to the Node console directly
  console.log('hello world');

  await browser.close();
});
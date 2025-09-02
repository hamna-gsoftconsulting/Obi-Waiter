const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://develop.d20aue3nu6xt33.amplifyapp.com/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('12@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://develop.d20aue3nu6xt33.amplifyapp.com/venue');
  await page.getByText('Add').click();
  await page.locator('div').filter({ hasText: /^Logo \*Choose image$/ }).locator('div').click();
  await page.getByText('Drag image here').click();
  await page.getByText('Upload Image Drag image').setInputFiles('Screenshot from 2025-08-25 12-22-22.png');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByTestId('AddPhotoAlternateOutlinedIcon').click();
  await page.getByText('Drag image here').click();
  await page.getByText('Upload Image Drag image').setInputFiles('Screenshot from 2025-08-25 10-41-02.png');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
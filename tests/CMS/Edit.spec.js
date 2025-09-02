import { test, expect } from "@playwright/test";
import path from 'path';
import fs from 'fs';

// Test: logs in and fills basic venue details
test("Venue creation – fill basic details", async ({ page }) => {
  // Navigate to login
  const baseUrl = 'https://develop.d20aue3nu6xt33.amplifyapp.com';
  const LOGIN_URL_RE = /\/login$/;
  const VENUE_URL_GLOB = '**/venue';
  const EMAIL = '12@gmail.com';
  const PASSWORD = '12345678';

  await page.goto(`${baseUrl}/login`);
  await expect(page).toHaveURL(LOGIN_URL_RE, { timeout: 15000 }); // assert we are on the login page

  // Frequently used locators
  const emailInput = page.getByRole('textbox', { name: 'Email' });
  const passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
  const signInButton = page.locator('button:has-text("Sign in")');

  // Enter credentials with visibility checks for stability
  await expect(emailInput).toBeVisible();
  await emailInput.fill(EMAIL);
  await expect(emailInput).toHaveValue(EMAIL);

  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(PASSWORD);
  await expect(passwordInput).toHaveValue(PASSWORD);

  // Click Sign in and wait for redirect to /venue in parallel (best practice)
  await Promise.all([
    page.waitForURL(VENUE_URL_GLOB, { timeout: 30000 }),
    signInButton.click(),
  ]);

  // Add menu – open create venue form
  await page.locator('div.MuiBox-root:has(svg[data-testid="AddSharpIcon"]) >> text=Add').click();
  await expect(page).toHaveURL(`${baseUrl}/venue`, { timeout: 10000 });

  // Fill basic venue fields
  await page.getByRole('textbox', { name: 'Venue name' }).fill('Eco');
  await page.getByRole('combobox', { name: 'Venue type' }).click();
  await page.getByRole('option', { name: 'Restaurant' }).click();

  await emailInput.fill(EMAIL);
  await page.getByRole('combobox', { name: 'Venue default language' }).click();
  await page.getByText('English').click();
  await page.getByRole('combobox', { name: 'Time zone' }).click();
  await page.getByRole('option', { name: '(UTC+02:00) Eastern European' }).click();
  await page.getByRole('combobox', { name: 'Currency' }).click();
  await page.getByRole('option', { name: 'Euro' }).click();
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('German ');
  await page.getByRole('textbox', { name: 'Venue description' }).fill('Auto');
  await page.getByRole('textbox', { name: 'Slug' }).fill('eco');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').nth(1).check();
  await page.getByPlaceholder('Tip Percentage').fill('30');
  await page.getByPlaceholder('Dine-In Tax Percentage').fill('19');
  await page.getByPlaceholder('Take-Away Tax Percentage').fill('7');
  await page.screenshot({ path: 'screenshot.png' });
  // // NEW: File upload section
  //   // Step 1: Resolve a valid image path from multiple known locations to avoid ENOENT
  //   const candidates = [
  //     path.join(process.cwd(), 'tests', 'assets', 'Screenshot from 2025-08-21 11-35-28.png'),
  //     path.join(process.cwd(), 'tests', 'assets', 'logo1.png'),
  //     '/home/gsc/Desktop/CMS/tests/assets/logo1.png',
  //     '/home/gsc/Pictures/Screenshots/Screenshot from 2025-08-21 11-35-28.png',
  //   ];
  //   const imagePath = candidates.find(p => fs.existsSync(p));
  //   if (!imagePath) {
  //     throw new Error(`Upload image not found. Checked: ${candidates.join(' | ')}`);
  //   }

  //   // Step 2: Locate the file input element within the open dialog for reliability.
  //   const fileInput = page.getByRole('dialog').locator('input[type="file"]');
     
  //   // Step 3: Use setInputFiles() to upload the file directly.
  //   await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();
  //   // Step 4: Verify that the file was successfully associated with the input field.
  //   // We will use the exact text you provided to locate the confirmation message.
  //   await page.getByRole('button', { name: 'Upload' }).click();
  //   // ... (Your existing code to pause)
    await page.pause();
});

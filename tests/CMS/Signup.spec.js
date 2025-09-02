import { test, expect } from "@playwright/test";

test("", async ({ page }) => {
    // await page.setViewportSize({ width: 1280, height: 720 });
    // sign up CMS
    // await page.goto("https://develop.d20aue3nu6xt33.amplifyapp.com/signup");
    // await page.locator('div').filter({ hasText: 'First name *Last name *Email' }).nth(1).click();
    // await page.getByRole('textbox', { name: 'First name' }).click();
    // await page.getByRole('textbox', { name: 'First name' }).fill('Hamna');
    // await page.getByRole('textbox', { name: 'Last name' }).click();
    // await page.getByRole('textbox', { name: 'Last name' }).fill('Noor');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('gsoft@gmail.com');
    // await page.getByRole('textbox', { name: 'Company name' }).click();
    // await page.getByRole('textbox', { name: 'Company name' }).fill('Global');
    // await page.getByRole('textbox', { name: 'Password', exact: true }).click();
    // await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
    // await page.getByRole('textbox', { name: 'Confirm password' }).click();
    // await page.getByRole('textbox', { name: 'Confirm password' }).fill('12345678');
    // await page.locator('button:has-text("Sign up")').click();
    // await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/login', { timeout: 10000 });
    // // await page.pause();
    //    login CMS
    await page.goto("https://develop.d20aue3nu6xt33.amplifyapp.com/login");
    await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/login', { timeout: 10000 });
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('hamnasqa@gmail.com');
    await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('hamnasqa@gmail.com');
    await page.getByRole('textbox', { name: 'Password', exact: true }).click();
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
    await expect(page.getByRole('textbox', { name: 'Password', exact: true })).toHaveValue('12345678');
    await page.locator('button:has-text("Sign in")').click();
    await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/venue', { timeout: 10000 });
    // // Click on menus
    // await page.locator('.MuiBox-root > a').first().click();
    // await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/menus', { timeout: 10000 });
    
    await page.pause();
});

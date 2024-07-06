import { test, expect } from '@playwright/test';
import { Application } from '../app';


test('has title', async ({ page}) => {

  await page.goto('https://playwright.dev/');
  const app = new Application(page);

  await app.signUp.open();
  await app.signUp.expectLoaded();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


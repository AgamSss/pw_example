import { test, expect } from '@playwright/test';
import { Application } from '../app';
import { createARandomUser, generateOnlyRequiredUserData } from '../data/user-data';

const newUserData = createARandomUser();


test('has title', async ({ page}) => {

  await page.goto('https://playwright.dev/');
  const app = new Application(page);

  await app.signUp.open();
  await app.signUp.expectLoaded();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await app.signIn.open();
  await app.signIn.fillSignInForm(newUserData);
  await expect(app.signIn).toHaveProperty('user', newUserData.email);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByLabel('npm install playwright').fill('TEST');


});


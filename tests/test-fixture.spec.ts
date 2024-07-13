import {test} from '../fixture';
import { expect } from '@playwright/test';

test('has title', async ({ app }) => {
  await app.signIn.open();
  await app.signIn.expectLoaded();
  await expect(app.signIn).toBeTruthy();
  await app.contacts.pagePath.length.toFixed()
});

test('get started link', async ({ app: {signIn, contacts}, newUser }) => {
  await signIn.open();
  await signIn.expectLoaded();
  await expect(signIn).toBeTruthy();
  await contacts.open();
  await newUser.showUserInfo()
});
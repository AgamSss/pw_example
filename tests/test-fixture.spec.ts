import {test} from '../fixture';
import { expect } from '@playwright/test';
import { createARandomUser, generateOnlyRequiredUserData } from '../data/user-data';

const newUserData = createARandomUser();
const userWithREquiredData = generateOnlyRequiredUserData();

test('has title', async ({ app }) => {
  await app.signIn.open();
  await app.signIn.expectLoaded();
  await expect(app.signIn).toBeTruthy();
  await app.contacts.pagePath.length.toFixed()
});

test('get started link', async ({ app: {signIn, contacts}, newUser }) => {
  newUser.createdUser(newUserData);
  newUser.showUserInfo();
    
  await signIn.open();
  await signIn.expectLoaded();
  await expect(signIn).toBeTruthy();
  await contacts.open();
  await newUser.showUserInfo()
  await newUser.createdUser(newUserData)
await expect(signIn.header).toContain(newUserData.username);
});



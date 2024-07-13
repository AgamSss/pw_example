import { randomUUID } from "crypto";
import { Application } from "../app";
import {test as pwTest} from "@playwright/test";

type UserDataType = {
    isSubscribed: boolean;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

interface UserContext {
    userModel: UserDataType;
    createdUser: any;
    showUserInfo: any;
}

export const test = pwTest.extend<
  // test level
  {
    app: Application;
    newUser: UserContext;
    homePage: Application;
  }
  // worker level
  //{ db: DB }
>({
  

  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },

  newUser: async ({ app }, use) => {
    const userModel = {
      isSubscribed: false,
      email: `test+${randomUUID()}@test.com`,
      firstName: "test",
      lastName: "test",
      password: "admin1234",
    };

    const createdUser = await app.api.auth.register(userModel);
    await app.headlessLogin(userModel);
    await app.home.open();

    const showUserInfo = await console.log(`User: ${userModel.email} created`);

    const newMethodInnerForFixtures = {key: 'value'};

    await use({ userModel, createdUser, showUserInfo});
  },

});






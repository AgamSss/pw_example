import { randomUUID } from "crypto";
import { Application } from "../app";
import {test as pwTest} from "@playwright/test";
import { count } from "console";
import { Country } from "../data/enum/country";
import { UserModel } from "../data/models/user-model";

type UserDataType = {
    isSubscribed: boolean;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

interface UserContext {
    userModel: UserModel;
    createdUser: any;
    showUserInfo: any;
    useHedlessLogin: any;
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
      username: "test",
      password: "admin1234",
      email: `test+${randomUUID()}@test.com`,
      age: 25,
      country: Country.USA,
    };

    const createdUser = await app.api.auth.register(userModel);

    const useHedlessLogin = 
        await app.headlessLogin(createdUser.token)
        await app.signUp.open();
    
    const showUserInfo = await console.log(`User: ${userModel.email} created`);

    await use({ userModel, createdUser, showUserInfo, useHedlessLogin});
  },

});






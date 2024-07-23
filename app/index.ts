import { SignIn } from "./Pages/signin.page";
import { SignUp } from "./Pages/signup.page";
import { PageHolder } from "./abstractClasses";
import { Contacts } from "./Pages/contacts.page";
import { API } from "../api";


export class Application extends PageHolder {
    // API
    public api = new API(this.page.request)
    // POMs
    public signIn = new SignIn(this.page)
    public signUp = new SignUp(this.page)
    public contacts = new Contacts(this.page)
   
    async headlessLogin(token: string){
        await this.setTokenToLocalStorage(token)
    }

    async setTokenToLocalStorage(token: string){
        await this.page.evaluate((token) => {
            localStorage.setItem('token', token)
        }, token)
    }
}


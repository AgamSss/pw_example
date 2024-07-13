import { SignIn } from "./Pages/signin.page";
import { SignUp } from "./Pages/signup.page";
import { PageHolder } from "./abstractClasses";
import { Contacts } from "./Pages/contacts.page";


export class Application extends PageHolder {
    public signIn = new SignIn(this.page)
    public signUp = new SignUp(this.page)
    public contacts = new Contacts(this.page)
    
    async headlessLogin(){
        const token = ''// get token from somewhere  
        await this.setTokenToLocalStorage(token)
    }

    async setTokenToLocalStorage(token: string){
        await this.page.evaluate((token) => {
            localStorage.setItem('token', token)
        }, token)
    }
}


import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../Components/header.component";

export class SignUp extends AppPage {
    public pagePath = '/login'
    public header = new Header(this.page)

    private signInButton = this.page.getByRole('button', { name: 'Login' })
    private emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email')
    private passwordInput = this.page.getByPlaceholder('Please Enter Your Password')

    async expectLoaded() {
        await expect(this.signInButton).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
    }

    async signUp(user: { email: string, password: string }) {
        await this.expectLoaded();
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password)
        await this.signInButton.click()
    }

    async openPageAndHeader(){
        await this.open()
        await this.header.expectLoaded()
        await this.header.openCart()
    }
}
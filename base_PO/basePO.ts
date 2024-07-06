import type {Page, test} from '@playwright/test';

export class BasePO {
  private page : Page

  constructor(page: Page) {
    this.page = page
  }

  async getByRole(role: string, selector: string) {
    return this.page.locator(`[role=${role}] >> ${selector}`)
  }
}


class LoginPage {
    private page: Page
    
    constructor(page: Page) {
        this.page = page
    }
    
    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username)
        await this.page.fill('input[name="password"]', password)
        await this.page.click('button[type="submit"]')
    }
}

const loginPage = new LoginPage(page)



//

abstract class AppComponent {
    constructor(protected page: Page) {}
}

class LoginPageNEW extends AppComponent {
    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username)
        await this.page.fill('input[name="password"]', password)
        await this.page.click('button[type="submit"]')
    }
}

class HomePage extends AppComponent {
    async open() {
        await this.page.goto('https://playwright.dev/')
    }
}
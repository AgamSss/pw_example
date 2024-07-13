import type {Page, test} from '@playwright/test';
import { request } from 'http';

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
    constructor(private page: Page) {}
    
    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username)
        await this.page.fill('input[name="password"]', password)
        await this.page.click('button[type="submit"]')
    }
}

//

abstract class AppComponent {
    constructor(protected page: Page) {}
}

class HeaderComponent extends AppComponent {
    async openCart() {
        await this.page.click('button[name="cart"]')
    }
}

class LoginPageNEW extends HeaderComponent {
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

// header component -> cart component -> footer component -> search component

// class HomePage extends AppComponent, Header, Cart, Footer, Search {}

interface User {
    username: string,
    password: string
}
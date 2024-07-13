import { Component } from "../abstractClasses";
import {expect} from "@playwright/test";

export class Header extends Component{
    
    async expectLoaded() {
       //TO DO will be implemented later
    }

    async openCart() {
        await this.page.click('button[name="cart"]')
    }
}
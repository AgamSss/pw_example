import type { Page } from "@playwright/test";

export abstract class PageHolder {
    constructor(protected page: Page) {}
}

export abstract class Component extends PageHolder {
    //show that this is a method that needs to be implemented
    abstract expectLoaded(): Promise<void>;
}

export abstract class AppPage extends Component {
    public abstract pagePath: string;

    //abstract open(): Promise<void>;

    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }
}







import { Page } from "@playwright/test";

export class CheckoutComplete {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get title() {
        return this.page.locator('[data-test="title"]');
    }

    
}
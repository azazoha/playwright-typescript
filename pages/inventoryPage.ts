import { Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get pageTitle() {
        return this.page.locator('.title');
    }
}
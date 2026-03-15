import { Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
     
    async addToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    get pageTitle() {
        return this.page.locator('.title');
    }
}
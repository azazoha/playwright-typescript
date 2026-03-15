import { Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
     
    async addToCart(product: string) {
        await this.page.locator(`[data-test="add-to-cart-${product}"]`).click();
    }

    get pageTitle() {
        return this.page.locator('.title');
    }
}
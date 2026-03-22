import { Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async removeItem(product: string) {
        await this.page.locator(`[data-test="remove-${product}"]`).click();
    }

    async checkout() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    get itemQuantity() {
        return this.page.locator('[data-test="item-quantity"]');
    }
}
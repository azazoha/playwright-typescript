import { Page } from "@playwright/test";

export class CheckoutStepTwo {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async finish() {
        await this.page.locator('[data-test="finish"]').click();
    }

    
}
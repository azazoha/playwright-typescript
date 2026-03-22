import { Page } from "@playwright/test";

export class CheckoutStepOne {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillYourInfo() {
        await this.page.locator('[data-test="firstName"]').fill('John');
        await this.page.locator('[data-test="lastName"]').fill('Doe');
        await this.page.locator('[data-test="postalCode"]').fill('123546');
    }

    async continue() {
        await this.page.locator('[data-test="continue"]').click();
    }
}
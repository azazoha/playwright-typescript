import { Page } from "@playwright/test";

export class CheckoutStepOne {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillYourInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async firstNameEmpty(lastName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill("");
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async lastNameEmpty(firstName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill("");
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async postalCodeEmpty(firstName: string, lastName: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill("");
    }

    async continue() {
        await this.page.locator('[data-test="continue"]').click();
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]')
    }
}
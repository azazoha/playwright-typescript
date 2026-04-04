import { chromium } from "@playwright/test";
import { LoginPage } from "../../../pages/loginPage";
import { users } from "../../../test-data/users";

(async () => {
    const browser = await chromium.launch({ headless: false});

    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    console.log('✅ Logged in as standard_user. Ready for exploratory testing.')

    await page.pause();

    await browser.close();
})();









/*
test('logged in for exploratary testing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    console.log("Logged in as standard_user. Ready for testing.")

    await page.pause();
});
*/
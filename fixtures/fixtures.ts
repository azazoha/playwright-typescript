import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { users } from '../test-data/users';

type MyFixtures = {
    loggedInPage: Page;
}

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await use(page);
  }
});

export { expect } from '@playwright/test';
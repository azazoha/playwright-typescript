import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage'
import { CartPage } from '../pages/cartPage'
import { users } from '../test-data/users';
import { products } from '../test-data/products';

type MyFixtures = {
    loggedInPage: Page;
    cartPageWithItem: CartPage;
}

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await use(page);
  },

  cartPageWithItem: async ({ loggedInPage }, use) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.addToCart(products.backpack);
    await inventoryPage.openCart();

    await use(new CartPage(loggedInPage));
  }
});


export { expect } from '@playwright/test';
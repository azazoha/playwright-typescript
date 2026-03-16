import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { users } from '../test-data/users';
import { products } from '../test-data/products';


test('add to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addToCart(products.backpack);

  await inventoryPage.openCart();

  await expect(cartPage.itemQuantity).toBeVisible();
});
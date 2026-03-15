import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { users } from '../test-data/users';

test('add to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addToCart();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="item-quantity"]')).toBeVisible();
});
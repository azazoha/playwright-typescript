import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { users } from '../test-data/users';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(inventoryPage.pageTitle).toHaveText('Products');
});

test('wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.wrongPassword.username, users.wrongPassword.password);

  await expect(loginPage.errorMessage).toContainText('Epic sadface:');
});

test('locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.locked.username, users.locked.password);

  await expect(loginPage.errorMessage).toContainText('Epic sadface');
});
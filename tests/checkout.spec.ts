import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutStepOne } from '../pages/checkoutStepOne';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo';
import { CheckoutComplete } from '../pages/checkoutComplete';
import { users } from '../test-data/users';
import { products } from '../test-data/products';


test('checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutStepOne = new CheckoutStepOne(page);
  const checkoutStepTwo = new CheckoutStepTwo(page);
  const checkoutComplete = new CheckoutComplete(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password)
  await inventoryPage.addToCart(products.backpack);
  await inventoryPage.openCart();
  await cartPage.checkout();
  await checkoutStepOne.fillYourInfo();
  await checkoutStepOne.continue();
  await checkoutStepTwo.finish();
  await expect(checkoutComplete.title).toContainText('Checkout: Complete!');
});
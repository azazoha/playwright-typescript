import { test, expect } from '../fixtures/fixtures';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { products } from '../test-data/products';


test('add to cart', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  await inventoryPage.addToCart(products.backpack);
  await inventoryPage.openCart();

  await expect(cartPage.itemQuantity).toBeVisible();
});

test('remove item', async ({ cartPageWithItem }) => {
  await cartPageWithItem.removeItem(products.backpack);
  await expect(cartPageWithItem.itemQuantity).toBeHidden();
});

test('cart persists after reload', async ({ cartPageWithItem }) => {
  await expect(cartPageWithItem.itemQuantity).toBeVisible();
  await cartPageWithItem.page.reload()

  await expect(cartPageWithItem.itemQuantity).toBeVisible();
});
import { test, expect } from '../fixtures/fixtures';
import { CheckoutStepOne } from '../pages/checkoutStepOne';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo';
import { CheckoutComplete } from '../pages/checkoutComplete';
import { checkout } from '../test-data/checkout';


test('successful checkout', async ({ cartPageWithItem, page }) => {
  const checkoutStepOne = new CheckoutStepOne(page);
  const checkoutStepTwo = new CheckoutStepTwo(page);
  const checkoutComplete = new CheckoutComplete(page);

  await cartPageWithItem.checkout();
  await checkoutStepOne.fillYourInfo(checkout.firstName, checkout.lastName, checkout.postalCode);
  await checkoutStepOne.continue();
  await checkoutStepTwo.finish();
  await expect(checkoutComplete.title).toContainText('Checkout: Complete!');
});

test('checkout validation error when fields are empty', async ({ cartPageWithItem, page }) => {
  const checkoutStepOne = new CheckoutStepOne(page);

  await cartPageWithItem.checkout();
  await checkoutStepOne.continue();
  await expect(checkoutStepOne.errorMessage).toBeVisible();
});

test('firstName is empty checkout validation', async ({ cartPageWithItem, page }) => {
  const checkoutStepOne = new CheckoutStepOne(page);

  await cartPageWithItem.checkout();
  await checkoutStepOne.firstNameEmpty(checkout.lastName, checkout.postalCode);
  await checkoutStepOne.continue();
  await expect(checkoutStepOne.errorMessage).toHaveText('Error: First Name is required');
});

test('lastName is empty checkout validation', async ({ cartPageWithItem, page }) => {
  const checkoutStepOne = new CheckoutStepOne(page);

  await cartPageWithItem.checkout();
  await checkoutStepOne.lastNameEmpty(checkout.firstName, checkout.postalCode);
  await checkoutStepOne.continue();
  await expect(checkoutStepOne.errorMessage).toHaveText('Error: Last Name is required');
});

test('zipCode is empty checkout validation', async ({ cartPageWithItem, page }) => {
  const checkoutStepOne = new CheckoutStepOne(page);

  await cartPageWithItem.checkout();
  await checkoutStepOne.postalCodeEmpty(checkout.firstName, checkout.lastName);
  await checkoutStepOne.continue();
  await expect(checkoutStepOne.errorMessage).toHaveText('Error: Postal Code is required');
});
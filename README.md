# Playwright SauceDemo Automation

End-to-end UI test automation project built with Playwright and TypeScript.

This project demonstrates a clean and scalable automation architecture using Page Object Model, Fixtures, structured test data, state setup scripts, and realistic UI test scenarios.

The goal of this repository is to showcase practical Playwright skills and automation design practices used in real QA environments.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- tsx

---

## Application Under Test

https://www.saucedemo.com

SauceDemo is a demo e-commerce application commonly used for UI automation practice.

---

## Test Scenarios

### Authentication

- Successful login
- Login with wrong password
- Login with locked user

### Cart functionality

- Add item to cart
- Remove item
- Cart persists after reload

### Checkout flow

- complete checkout
- validation error when fields missing


Future scenarios will include:

- UI validations

---

## Project Structure

fixtures/ → test fixtures

pages/ → Page Object Model classes

scripts/ → setup scrits for manual testing

test-data/ → reusable test data

tests/ → test cases


```
├── fixtures
│   └── fixtures.ts
├── pages
│   ├── cartPage.ts
│   ├── checkoutComplete.ts
│   ├── checkoutStepOne.ts
│   ├── checkoutStepTwo.ts
│   ├── inventoryPage.ts
│   └── loginPage.ts
├── scripts
│   └── setup
│       └── auth
│           └── loggedIn.ts
├── test-data
│   ├── customers.ts
│   ├── products.ts
│   └── users.ts
├── tests
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── login.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

---

## Running Tests

Install dependencies
```
npm install
```

Run tests
```
npx playwright test
```

Run tests with visible browser
```
npx playwright test --headed
```

Run Playwright UI mode
```
npx playwright test --ui
```

---

## Scripts
These scripts prepare application state for exploratory testing
using Playwright and tsx (no build step required).

```
npm run setup:auth
```


## Why tsx?

tsx allows running TypeScript scripts directly without
additional configuration, making setup scripts simple and fast.

## Future Improvements

Planned improvements to evolve this project into a full automation framework:

- API + UI hybrid testing
- Parallel execution configuration
- CI pipeline using GitHub Actions
- Allure reporting
- Visual regression testing

---

## Author

QA Engineer focused on API and backend testing with growing expertise in UI automation using Playwright.

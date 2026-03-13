# Playwright SauceDemo Automation

End-to-end UI test automation project built with Playwright and TypeScript.

This project demonstrates a clean and scalable automation architecture using Page Object Model, structured test data, and realistic UI test scenarios.

The goal of this repository is to showcase practical Playwright skills and automation design practices used in real QA environments.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner

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

Future scenarios will include:

- Cart functionality
- Checkout flow
- UI validations

---

## Project Structure


tests/ → test cases

pages/ → Page Object Model classes

test-data/ → reusable test data


Example structure:

```
project-root
│
├── tests
│ └── login.spec.ts
│
├── pages
│ └── loginPage.ts
│
├── test-data
│ └── users.ts
│
└── playwright.config.ts

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

## Future Improvements

Planned improvements to evolve this project into a full automation framework:

- Cart and checkout test scenarios
- API + UI hybrid testing
- Test fixtures
- Parallel execution configuration
- CI pipeline using GitHub Actions
- Allure reporting
- Visual regression testing

---

## Author

QA Engineer focused on API and backend testing with growing expertise in UI automation using Playwright.

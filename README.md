# Calculator QA Testing Project

A demonstration project for QA automation testing capabilities, featuring a calculator web application with intentionally introduced test failures to showcase testing system functionality. This project focuses on demonstrating QA testing practices and methodologies.

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

3. Run the development server:
```bash
npm run dev
```

4. Run tests:
```bash
npm test           # Run all tests
npm run test:ui    # Run tests with UI mode
npm run test:report # View test report
```

## 🧪 Testing Features

- Live test report viewer (click the 🧪 button)
- Intentional test failures for demonstration
- Comprehensive test coverage
- Visual regression testing

## 📁 Project Structure

```
├── src/              # Source code
│   ├── components/   # React components
│   └── tests/        # Test files
├── playwright/       # Playwright configuration
├── DOCUMENTATION.md  # Detailed documentation
└── README.md         # This file
```

## ✨ Features

- Basic arithmetic operations
- Decimal number support
- Error handling
- Comprehensive test suite with intentional failures
- Live test report access

## 📚 Documentation

For detailed information about the project, testing strategy, and intentional test failures, please see [DOCUMENTATION.md](./DOCUMENTATION.md).

## 🛠️ Tech Stack

- React + TypeScript
- Playwright for testing
- Vite for building

## 📝 Note on Test Failures

This project intentionally includes test failures to demonstrate:
- Test system reliability
- Edge case detection
- Feature coverage tracking
- Regression testing capabilities

For details about specific test failures and their purposes, refer to the documentation.

## 📊 Test Report Access

1. Development Environment:
   - Click the 🧪 button in the app
   - Or run `npm run test:report`
   - Reports available at `/playwright-report/index.html`

2. Test Report Features:
   - Detailed test execution logs
   - Screenshots of failures
   - Test duration and performance metrics
   - Failure analysis and debugging information 
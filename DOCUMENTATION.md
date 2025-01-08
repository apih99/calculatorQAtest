# Calculator QA Testing Project Documentation

## Project Overview
This project demonstrates QA automation capabilities through a calculator web application with intentionally introduced edge cases and test failures to showcase testing system functionality. The focus is on demonstrating comprehensive testing practices and methodologies.

## Technical Stack
- **Frontend**: React + TypeScript
- **Testing Framework**: Playwright
- **Build Tool**: Vite
- **Development Server**: Vite Dev Server

## Application Features
1. Basic Calculator Operations
   - Addition, subtraction, multiplication, division
   - Decimal number support
   - Positive/negative toggle
   - Percentage calculation
   - All clear (AC) functionality

2. Display Features
   - Current number display
   - Equation history
   - Error state handling

3. Testing Features
   - Live test report viewer (🧪 button)
   - Intentional test failures for demonstration
   - Comprehensive test coverage display

## Test Coverage and Known Issues

### 1. Basic Arithmetic Tests
✅ Addition (PASS)
```typescript
test('basic addition', async ({ page }) => {
  // 2 + 3 = 5 passes successfully
})
```

❌ Multiplication (FAIL)
```typescript
test('multiplication with decimals', async ({ page }) => {
  // 2.5 × 2 = 5.00 fails due to rounding precision
  // Expected: 5.00, Actual: 5
})
```

### 2. Error Handling Tests
✅ Division by Zero (PASS)
```typescript
test('division by zero', async ({ page }) => {
  // Shows "Error" message as expected
})
```

❌ Large Number Handling (FAIL)
```typescript
test('large number calculations', async ({ page }) => {
  // Numbers > 999999999 cause display overflow
  // Expected: Scientific notation, Actual: Truncated number
})
```

### 3. UI/UX Tests
✅ Button Interactions (PASS)
- All buttons clickable
- Proper visual feedback on hover/click

❌ Keyboard Input (FAIL)
```typescript
test('keyboard number input', async ({ page }) => {
  // Keyboard input not implemented yet
  // Test fails as expected to demonstrate missing feature
})
```

## Known Limitations (Intentional)
1. **Precision Issues**
   - Decimal calculations may show rounding errors
   - Demonstrates need for proper floating-point handling

2. **Missing Features**
   - No keyboard input support
   - No memory functions (M+, M-, MR)
   - Intentionally omitted to showcase test coverage for missing features

3. **Edge Cases**
   - Large number handling is limited
   - Multiple decimal points not properly handled
   - Used to demonstrate error detection capabilities

## Development Environment

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn
- Modern web browser

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running the Application
```bash
npm run dev
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# View test report
npm run test:report
```

## Test Report Features

### 1. Interactive Report Viewer
- Access via 🧪 button in application
- Detailed test execution logs
- Visual test results

### 2. Test Categories
- Unit Tests
- Integration Tests
- End-to-End Tests
- Visual Regression Tests

### 3. Failure Analysis
- Stack traces
- Screenshots
- Step-by-step reproduction
- Error messages

### 4. Performance Metrics
- Test execution time
- Test suite duration
- Resource usage

## Test Report Analysis
- Total Tests: 15
- Passed: 10
- Failed: 5 (Intentional)
- Skipped: 0

## QA Value Demonstration
This project intentionally includes test failures to demonstrate:

1. **Test System Reliability**
   - Accurately catches and reports issues
   - Provides detailed failure information

2. **Edge Case Detection**
   - Identifies boundary conditions
   - Reports unexpected behaviors

3. **Feature Coverage**
   - Tracks implemented vs missing features
   - Documents known limitations

4. **Regression Testing**
   - Ensures core functionality remains stable
   - Catches unintended side effects

## Future Improvements
1. Implement keyboard input support
2. Add memory functions
3. Improve decimal precision handling
4. Add scientific notation for large numbers
5. Implement proper error boundary testing
6. Enhance test reporting features

## Best Practices Demonstrated
1. **Test Organization**
   - Clear test hierarchy
   - Meaningful test descriptions
   - Proper test isolation

2. **Error Handling**
   - Edge case coverage
   - Error state management
   - Graceful failure handling

3. **Test Report Generation**
   - Detailed failure information
   - Visual evidence
   - Performance metrics

4. **Code Quality**
   - TypeScript type safety
   - Modern React practices
   - Clean code principles

## Conclusion
This project successfully demonstrates QA testing capabilities by:
- Including intentional test failures
- Documenting edge cases
- Showing comprehensive test coverage
- Demonstrating proper test reporting
- Highlighting the importance of negative testing
- Providing clear test documentation 
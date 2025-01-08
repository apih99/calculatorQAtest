# Calculator QA Testing Project Documentation

## Project Overview
This project demonstrates QA automation capabilities through a calculator web application with intentionally introduced edge cases and test failures to showcase testing system functionality. It includes a live test report viewer and is deployable to Railway.

## Technical Stack
- **Frontend**: React + TypeScript
- **Testing Framework**: Playwright
- **Build Tool**: Vite
- **CI/CD**: GitHub Actions
- **Deployment**: Railway

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

## Testing Strategy

### 1. Unit Tests
- Individual button functionality
- Number formatting
- Operation calculations

### 2. Integration Tests
- Operation sequences
- State management
- Display updates

### 3. End-to-End Tests
- Complete calculation workflows
- Error scenarios
- UI responsiveness

### 4. Visual Regression Tests
- Button layout
- Display formatting
- Color schemes

## Test Failure Analysis

### Intentional Test Failures
1. **Decimal Precision Tests**
   - Purpose: Demonstrate handling of floating-point precision
   - Expected Failure: Shows limitation in number formatting

2. **Keyboard Input Tests**
   - Purpose: Document unimplemented feature
   - Expected Failure: Highlights missing functionality

3. **Large Number Tests**
   - Purpose: Show display limitations
   - Expected Failure: Demonstrates overflow handling

## Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# View test report
npm run test:report
```

## Deployment

### Railway Deployment
1. Prerequisites:
   - Railway account
   - GitHub repository connected to Railway

2. Configuration:
   ```bash
   # Install Railway CLI
   npm i -g @railway/cli

   # Login to Railway
   railway login

   # Initialize project
   railway init

   # Deploy
   railway up
   ```

3. Environment Variables:
   - `PORT`: 3000 (default)
   - `NODE_ENV`: production

4. Build Command:
   ```bash
   npm run build
   ```

5. Start Command:
   ```bash
   npm run preview
   ```

### Automatic Deployments
- Railway automatically deploys when changes are pushed to the main branch
- Test reports are generated during the build process
- Live test report is accessible via the "View Test Report" button

## Test Report Access
The test report can be accessed in two ways:
1. Local Development:
   - Click the 🧪 button after running tests
   - Reports available at `/playwright-report/index.html`

2. Production:
   - Test reports are generated during deployment
   - Accessible via the deployed application's UI

## Test Report Analysis
- Total Tests: 15
- Passed: 10
- Failed: 5 (Intentional)
- Skipped: 0

### Failed Test Categories
1. Input Validation (2 failures)
2. Number Precision (2 failures)
3. Feature Coverage (1 failure)

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

## Conclusion
This project successfully demonstrates QA testing capabilities by:
- Including intentional test failures
- Documenting edge cases
- Showing comprehensive test coverage
- Demonstrating proper test reporting
- Highlighting the importance of negative testing 
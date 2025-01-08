import { test, expect } from '@playwright/test';

test.describe('Calculator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('basic arithmetic operations', async ({ page }) => {
    // Addition
    await page.getByTestId('two').click();
    await page.getByTestId('add').click();
    await page.getByTestId('three').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('5');

    // Multiplication
    await page.getByTestId('clear').click();
    await page.getByTestId('four').click();
    await page.getByTestId('multiply').click();
    await page.getByTestId('five').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('20');

    // Division
    await page.getByTestId('clear').click();
    await page.getByTestId('eight').click();
    await page.getByTestId('divide').click();
    await page.getByTestId('two').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('4');

    // Subtraction
    await page.getByTestId('clear').click();
    await page.getByTestId('nine').click();
    await page.getByTestId('subtract').click();
    await page.getByTestId('four').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('5');
  });

  test('handles decimal numbers', async ({ page }) => {
    await page.getByTestId('two').click();
    await page.getByTestId('decimal').click();
    await page.getByTestId('five').click();
    await page.getByTestId('multiply').click();
    await page.getByTestId('two').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('5.00');
  });

  test('handles division by zero', async ({ page }) => {
    await page.getByTestId('five').click();
    await page.getByTestId('divide').click();
    await page.getByTestId('zero').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('Error');
  });

  test('maintains equation history', async ({ page }) => {
    await page.getByTestId('two').click();
    await page.getByTestId('add').click();
    await page.getByTestId('three').click();
    await expect(page.getByTestId('equation')).toHaveText('2 + 3');
  });

  test('clears display and equation', async ({ page }) => {
    await page.getByTestId('two').click();
    await page.getByTestId('add').click();
    await page.getByTestId('three').click();
    await page.getByTestId('clear').click();
    await expect(page.getByTestId('current')).toHaveText('0');
    await expect(page.getByTestId('equation')).toHaveText('0');
  });

  test('handles multiple operations', async ({ page }) => {
    await page.getByTestId('two').click();
    await page.getByTestId('add').click();
    await page.getByTestId('three').click();
    await page.getByTestId('multiply').click();
    await page.getByTestId('four').click();
    await page.getByTestId('equals').click();
    await expect(page.getByTestId('current')).toHaveText('20');
  });
}); 
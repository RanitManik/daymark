import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 text to match the updated page title (Web-first assertion style).
  await expect(page.locator('h1')).toHaveText('Hello world!', {
    useInnerText: true,
  });
});

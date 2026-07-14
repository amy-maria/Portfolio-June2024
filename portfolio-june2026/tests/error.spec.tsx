import { test, expect } from '@playwright/test';

test('shows fallback UI instead of crashing when a component throws an error', async ({ page }) => {
    await page.goto('/?crashtest=true');
    await expect(page.getByText(/something went wrong/i)).toBeVisible();
})
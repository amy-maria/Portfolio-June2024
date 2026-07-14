import { test, expect } from '@playwright/test';

test('homepage loads and shows the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portfolio for Amy Rowell/);
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
        
}
);
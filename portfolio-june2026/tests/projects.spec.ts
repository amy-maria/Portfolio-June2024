import { test, expect } from '@playwright/test';

test('clicking a project card navigates to its detail page', async ({ page }) => {
    await page.goto('/');

    const firstCard = page.getByTestId('project-card').first();
    await expect(firstCard).toBeVisible();
    await firstCard.click();
    await expect(page).toHaveURL(/\/project\/.+/);
});
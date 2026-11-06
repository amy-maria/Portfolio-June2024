import { test, expect } from '@playwright/test';

test('homepage loads and shows the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Amy Rowell | Healthcare IT, Full-stack Development, Software QA/);
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
        
}
);
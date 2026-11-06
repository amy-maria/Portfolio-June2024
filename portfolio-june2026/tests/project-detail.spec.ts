import { test, expect } from '@playwright/test';



test.describe('Project detail page shows extended description and View Full Project button', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/project/2');
    });

    test('shows the project title and description', async ({ page }) => {
        
        await expect(page.getByRole('heading', {name: 'Good News'})).toBeVisible();
        await expect(page.getByText(/Good News started/i)).toBeVisible();
    });

    test('shows project screenshot and contains alt text', async ({ page }) => {
        const screenshot = page.getByAltText('screen shot of Good News site');
        await expect(screenshot).toBeVisible();
    
    });
    test('external link button has a valid external href for the project', async ({ page }) => {
        const externalLink = page.locator('a[href^="http"]').first();

        await expect(externalLink).toBeVisible();
        await expect(externalLink).toHaveAttribute('target', '_blank');
    });
});

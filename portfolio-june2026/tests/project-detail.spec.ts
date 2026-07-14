import { test, expect } from '@playwright/test';



test.describe('Project detail page shows extended description and View Full Project button', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/project/1');
    });

    test('shows the project title and description', async ({ page }) => {
        
        await expect(page.getByText('Trip Planner')).toBeVisible();
        await expect(page.getByText(/planning a trip/i)).toBeVisible();
    });

    test('shows project screenshot and contains alt text', async ({ page }) => {
        const screenshot = page.getByAltText('screen shot of trip planner app using Python and AI');
        await expect(screenshot).toBeVisible();
    
    });
    test('external link button has a valid external href for the project', async ({ page }) => {
        const externalLink = page.locator('a[href^="http"]').first();

        await expect(externalLink).toBeVisible();
        await expect(externalLink).toHaveAttribute('target', '_blank');
    });
});
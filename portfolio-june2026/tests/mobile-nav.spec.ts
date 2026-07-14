import { test, expect } from '@playwright/test';

test.describe('Mobile hamburger menu', () => {
    test.use({ viewport: { width: 375, height: 812 } });
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('opens and closes, toggling aria-expanded', async ({ page }) => {
        const openButton = page.getByRole('button', {
            name: 'Open menu'
        });
        await expect(openButton).toBeVisible();
        await expect(openButton).toHaveAttribute('aria-expanded', 'false');
        await openButton.click();

        const closeButton = page.getByRole('button', { name: 'Close menu' });
        await expect(closeButton).toHaveAttribute('aria-expanded', 'true');
        await expect(page.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
        await closeButton.click();
        await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
    });

    test('clicking a menu link navigates and closes the menu window', async ({ page }) => {
        await page.getByRole('button', { name: 'Open menu' }).click();
        await page.getByRole('link', {
            name: 'Projects', exact: true
        }).click();
        await expect(page.locator('#projects')).toBeInViewport();
        await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();

    });
});
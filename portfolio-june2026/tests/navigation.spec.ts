import { test, expect } from '@playwright/test';

test.describe('Nav bar scrolling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('clicking Projects nav link will scroll to projects section', async ({ page }) => {
        await page.getByRole('link', { name: /projects/i }).click();
        await expect(page.locator('#projects')).toBeInViewport();
    });
    test('clicking About nav link scrolls to about section', async ({ page }) => {
        await page.getByRole('link', { name: /about/i }).click();
        await expect(page.locator('#about')).toBeInViewport();
    });
    test('clicking Contact nav link scrolls to contact section', async ({ page }) => {
        await page.getByRole('link', { name: /contact/i }).click();
        await expect(page.locator('#contact')).toBeInViewport();
    });
    test('clicking Education nav link scrolls to education section', async ({ page }) => {
        await page.getByRole('link', { name: /education/i }).click();
        await expect(page.locator('#education')).toBeInViewport();
    });
})
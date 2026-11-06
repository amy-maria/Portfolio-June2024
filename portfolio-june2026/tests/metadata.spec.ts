import { test, expect} from '@playwright/test';

test('project page has its own title and preview tags', async ({ page}) => {
    await page.goto('/project/1');

    await expect(page).toHaveTitle('HealthHub | Amy Rowell');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'HealthHub | Amy Rowell');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /\/images\/HealthHub\.png$/);
});

test('homepage keeps the site-wide preview', async ({page}) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /opengraph-image/);
});
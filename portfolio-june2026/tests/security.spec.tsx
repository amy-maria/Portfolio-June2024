import { test, expect } from '@playwright/test';

test('all target links have noopener and noreferrer', async ({ page }) => {
    await page.goto('/');

    const unsafeLinks = await page.$$eval(
        'a[target="_blank"]',
        (links) =>
            links.filter((link) => {
                const rel = link.getAttribute('rel') || '';
                return !rel.includes('noopener') || !rel.includes('noreferrer');
            }).map((link) => link.outerHTML)
    );
    expect(unsafeLinks).toEqual([]);

});

test('homepage sends security headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response!.headers();

    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-frame-options']).toBeTruthy();
    expect(headers['referrer-policy']).toBeTruthy();
});
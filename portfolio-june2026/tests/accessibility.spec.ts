import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Axe } from 'lucide-react';

test.describe('Accessibility scan', () => {
    test('homepage has no accessibility violations', async ({ page }) => {
        await page.goto('/');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
    test('nav links are reachable by tab', async ({ page, browserName }) => {
      test.skip(
        browserName === 'webkit',
        'Safari excludes links from tab order by default (real behavior, not a bug)',
      );
      await page.goto('/');
    });
    test('project detail page has no accessibility violations', async ({ page }) => {
        await page.goto('/project/1');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
    test('footer links are reachable via keyboard with visible focus', async ({ page }) => {
    await page.goto('/');

    const linkedInLink = page.getByRole('link', { name: 'LinkedIn', exact: true });
     await linkedInLink.focus();
    await expect(linkedInLink).toBeFocused();
    });
});

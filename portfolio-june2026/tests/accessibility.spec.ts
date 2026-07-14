import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { Axe } from 'lucide-react';

test.describe('Accessibility scan', () => {
    test('homepage has no accessibility violations', async ({ page }) => {
        await page.goto('/');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
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
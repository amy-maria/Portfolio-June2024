import { test, expect } from '@playwright/test';

test.describe('Keyboard navigation for accessibility', () => {
    test('nav links are reachable by tab', async ({ page }) => {
        await page.goto('/');

        await page.keyboard.press('Tab');
        await expect(page.getByRole('link', { name: "Amy Rowell" })).toBeFocused();

        await page.keyboard.press('Tab');
        await expect(page.getByRole('link', { name: "Projects", exact:true })).toBeFocused();
    });

    test('footer links are reachable by tab', async ({ page, browserName }) => {
      test.skip(
        browserName === 'webkit',
        'Safari excludes links from Tab order by default (real browser behavior, not a bug)',
      );
      await page.goto('/');
      await page.keyboard.press('Tab');
      await expect(
        page.getByRole('link', { name: 'Amy Rowell' }),
      ).toBeFocused();
      const linkedIn = page.getByRole('link', {
        name: 'LinkedIn',
        exact: true,
      });
      await linkedIn.focus();
      await expect(linkedIn).toBeFocused();
    });
});


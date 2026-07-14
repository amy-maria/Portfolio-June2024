import { test, expect} from '@playwright/test'

test.describe('Footer contact links', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('LinkedIn link is correct and opens in a new tab', async ({
      page,
    }) => {
      const linkedInLink = page.getByRole('link', {
        name: 'LinkedIn',
        exact: true,
      });
      await expect(linkedInLink).toBeVisible();
      await expect(linkedInLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/amymrowell/',
      );
      await expect(linkedInLink).toHaveAttribute('target', '_blank');
    });

    
    test('Twitter link is correct and opens in a new lab', async ({ page }) => {
        const xLink = page.getByRole('link', { name: 'Twitter/X', exact: true });
        await expect(xLink).toBeVisible();
        await expect(xLink).toHaveAttribute('href', 'https://x.com/amymrowell');
        await expect(xLink).toHaveAttribute('target', '_blank');
        });
    test('GitHub link is correct and opens in a new window', async ({ page }) => {
        const githubLink = page.getByRole('link', { name: 'GitHub', exact: true });
        await expect(githubLink).toBeVisible();
        await expect(githubLink).toHaveAttribute('href', 'https://github.com/amy-maria?tab=repositories');
        await expect(githubLink).toHaveAttribute('target', '_blank');
        });
    test('email link is correct and opens to an email client window', async ({ page }) => {
        const emailLinks = page.getByRole('link', { name: 'Email', exact: true });
        await expect(emailLinks).toBeVisible();
        await expect(emailLinks).toHaveAttribute('href', 'mailto:amymrowell@gmail.com');
        });
    test('all footer links have accessible names', async ({ page }) => {
        const footerLinks = page.locator('#footer a');
        const count = await footerLinks.count();
            expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            const accessibleNames = await footerLinks.nth(i).getAttribute('title');
            expect(accessibleNames).toBeTruthy();
            }
        });

    });

import { test, expect, type Page} from '@playwright/test';

async function openChat(page: Page) {
    const openButton = page.getByRole("button", { name: 'Open chat' });
    const panel = page.getByRole('complementary', {name: /portfolio assist/i});
    
    await expect(async () => {
        await openButton.click();
        await expect(panel).toBeVisible({ timeout: 1000});
        }).toPass();

    return panel;
}

test.describe('AI Chatbot widget', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('opens and closes the chat button', async ({ page }) => {
        await openChat(page);
        await expect(page.getByText(/Ask about Amy/i)).toBeVisible();
        await page.getByRole('button', { name: 'Close chat' }).click();
        await expect(page.getByRole('button', {name: 'Open chat'})).toBeVisible();
    });

    test('sending a message shows the user bubble and assisant response', async ({ page }) => {
        //intercept real api call and return dummy response
        await page.route('**/api/chat', async (route) => {
            await route.fulfill({
                json: { text: "Amy has experience as a Lab Manager and web developer." },
            });
        });
        await openChat(page);
        await page.getByPlaceholder(/Ask a question/i).fill('What is her background?');
        await page.getByRole('button', { name: 'Send' }).click();


        await expect(page.getByText("What is her background?")).toBeVisible();
        await page.waitForTimeout(1000);
        await expect(page.getByText("Amy has experience as a Lab Manager and web developer.")).toBeVisible();
    });

    test('shows an error message when API call fails', async ({ page }) => {
        await page.route('**/api/chat', async (route) => {
            await route.fulfill({
                json: { text: 12345 },
            });
        });
        await openChat(page);
        await page.getByPlaceholder(/Ask a question/i).fill("Test question");
        await page.getByRole('button', { name: 'Send' }).click();
        await expect(page.getByText('Sorry, something went wrong.')).toBeVisible();
    });

    test('shows a rate-limit message when the API returns 429', async ({ page }) => {
        await page.route('**/api/chat', async (route) => {
            await route.fulfill({
                status: 429,
                json: { error: 'Too many requests. Please wait a minute and try again.' },
            });
        });
        const panel = await openChat(page);
        await page.getByPlaceholder(/Ask a question/i).fill('Test question');
        await page.getByRole('button', { name: 'Send' }).click();
        await expect(page.getByText(/too many requests/i)).toBeVisible();
    });
    
    test('chat widget has no accessibility failures when open', async ({ page }) => {
        await openChat(page);
        const AxeBuilder = (await import('@axe-core/playwright')).default;
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
});
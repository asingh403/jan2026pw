import { test, expect, Browser, BrowserContext, chromium, Page } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;


test('has title', async ({ page }) => {

    browser=await chromium.launch({channel: 'chrome', headless: false});
    context = await browser.newContext({
        recordVideo:{
            dir: 'videos/',
            size: {width: 800, height: 800},
        }
    });

    page = await context.newPage();
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    await page.waitForTimeout(2000);

    await page.locator(`//div[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a`).click();
    await page.waitForTimeout(2000);
});
import { test, expect, APIResponse, chromium, Browser, BrowserContext, Page, Locator } from "@playwright/test";

test('check page title', async () => {
  
    let browser:Browser=await chromium.launch({headless:false, channel: 'chrome'});

    let context1:BrowserContext = await browser.newContext();
    let context2:BrowserContext = await browser.newContext();

    let page1:Page = await context1.newPage();
    let page2:Page = await context2.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    page1.locator('#input-email').fill('test_123@open.com');
    page1.locator('#input-password').fill('test@123');
    await page1.locator('//input[@value = "Login"]').click();

    //user2: customer
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page1.waitForTimeout(10000);
    await page2.waitForTimeout(10000);
});


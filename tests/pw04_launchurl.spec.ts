import { test, expect, APIResponse } from "@playwright/test";

test('check page title', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login', {waitUntil: 'load', timeout: 10000});
  // await page.waitForTimeout(2000);
  const title: string = await page.title();
  console.log('page title: ' + title);
});


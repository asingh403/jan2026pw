import { test, expect, APIResponse } from "@playwright/test";

test("back and forward btn simulation", async ({ page }) => {
  await page.goto("https://playwright.dev");
  const title: string = await page.title();
  console.log("page title: " + title);
  await page.waitForTimeout(5000);

  // some othe application

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  console.log(await page.title());

  await page.goBack();
  console.log(await page.title());
  await page.waitForTimeout(5000);
  await page.goForward();
  console.log('Go Forward => '+await page.title());
  await page.waitForTimeout(2000);

  await page.reload();
});


import {test, expect,APIResponse,chromium,Browser,BrowserContext,Page,Locator} from "@playwright/test";

test("store login session", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  page.locator("#input-email").fill("test_123@open.com");
  await page.waitForTimeout(1000);
  page.locator("#input-password").fill("test@123");
  await page.waitForTimeout(1000);
  await page.locator('//input[@value = "Login"]').click();
  await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
  
  page.context().storageState({path: 'auth/session.json'});
  
  let title: string = await page.title();
  console.log("Page title is : " + title);
});

import { Browser, chromium, expect, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
  await page.goto('https://api.jquery.com/dblclick/', {waitUntil: "load"});
  let framEle:FrameLocator =page.frameLocator('iframe');
  
  await page.waitForTimeout(2000);
  await framEle.locator('div').dblclick();

})();

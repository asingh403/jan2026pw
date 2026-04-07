import { Browser, chromium, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

/**
 * nested iFrame concepts
 */

  await page.goto('https://www.spicejet.com/', {waitUntil: "load"});
  await page.getByText('Add-ons', { exact: true }).hover();
  await page.getByTestId('test-id-SpicePlus').click();


})();

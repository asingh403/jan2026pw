import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto('https://orangehrm.com/contact-sales', {waitUntil: 'load'});
  

  /**
   * scrollling by down 
   */
//   await page.locator(`//a[contains(@href,'com/company/careers')]`).scrollIntoViewIfNeeded();
//   await page.waitForTimeout(2000);
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
//   await page.waitForTimeout(2000);
//   await page.locator(`//a[contains(@href,'com/company/careers')]`).click();

  // window.scrollBy(0, 1000) => scroll down by 1000 pixel
  // window.scrollTo(0, document.body.scrollHeight) => top to bottom
  // window.scrollTo(document.body.scrollHeight, 0) => bottom to top
  // window.scrollTo(0, 0) => bottom to top

  //2. scrolling down by pixel
  await page.evaluate(() => window.scrollBy(0, 1000));

  //3. scroll down to bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.waitForTimeout(2000);

  //4. from bottom to top of the page 
  // approach#01
//   await page.evaluate(() => window.scrollTo(document.body.scrollHeight, 0));

  // approach#02
  await page.evaluate(() => window.scrollTo(0, 0));

})();
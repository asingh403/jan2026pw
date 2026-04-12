import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto("https://www.flipkart.com/", {waitUntil: "load"});
  await page.locator("input[name = 'q']").first().fill('iphone17');
  await page.waitForTimeout(2000);
  await page.locator(`button[title='Search for Products, Brands and More'] svg`).first().click();

  //css:
  //button[title='Search for Products, Brands and More'] svg
  
  //xpath:
  //*[name()='svg'and @fill='none']
  //*[local-name()='svg'and @fill='none']
  //*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g']

  await page.goto("https://petdiseasealerts.org/forecast-map/#/", {waitUntil: "load"});
  



  
})();

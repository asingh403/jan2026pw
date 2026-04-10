import { Browser, chromium, expect, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

  page.on('dialog', async dialog => {
    console.log(dialog.message()); //capture the pop message
    dialog.accept();
    console.log(dialog.type());
  })

  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi', {waitUntil: "load"});
  await page.waitForTimeout(2000);
  page.locator(`//button[@type = 'submit']`).click();
  

})();
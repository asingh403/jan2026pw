import { Browser, chromium, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

  let delay:number = 30;

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: "load"});
  await page.locator('#input-firstname').focus;
  await page.locator('#input-firstname').pressSequentially('Testing', {delay:delay});
  await page.keyboard.press('Tab');
  await page.keyboard.type('Automation', {delay:delay});
  await page.keyboard.press('Tab');
  await page.keyboard.type(getRandomEmail(), {delay: delay});
  await page.keyboard.press('Tab');
  await page.keyboard.type('+91-9999099990', {delay: delay});
  await page.keyboard.press('Tab');
  await page.keyboard.type('test@123', {delay: delay});
  await page.keyboard.press('Tab');
  await page.keyboard.type('test@123', {delay: delay});
  
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');



})();

function getRandomEmail():string {
    let email:string = `opencart`+Date.now().toString()+`@testmail.com`;
    return email;
}

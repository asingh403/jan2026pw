import { Browser, chromium, expect, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html', {waitUntil: "load"});
  await page.locator('.context-menu-one.btn.btn-neutral').click({button: 'right'});
  const contextMenu:string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
  console.log(contextMenu);

  await page.getByText('Copy', {exact: true}).click();



})();

import { Browser, chromium, expect, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

//   await page.goto('https://the-internet.herokuapp.com/drag_and_drop', {waitUntil: "load"});
//   let source:Locator = page.locator('#column-a');
//   let target:Locator = page.locator('#column-b');

//   await page.waitForTimeout(2000);
//   await source.dragTo(target);
//   expect(target).toContainText('A');

  await page.goto('https://jqueryui.com/resources/demos/droppable/default.html', {waitUntil: "load"});
  let source:Locator = page.locator('#draggable');
  let target:Locator = page.locator('#droppable');

  await page.waitForTimeout(2000);
  await source.dragTo(target);
  expect(target).toContainText('Dropped!');



})();





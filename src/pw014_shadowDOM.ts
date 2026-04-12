import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
//   await page.goto("https://selectorshub.com/iframe-in-shadow-dom/", {waitUntil: "load"});
//   await page.waitForTimeout(500);

// shadow dom only work in css not xpath
// xpath => await page.locator(`//input[@type = 'text' and @id = 'pizza']`).fill('farmhouse pizza');

/**
 * below code is working
 */
// await page.locator('#pizza').fill('farmhouse pizza');

// page -> iframe -> shadow DOM -> input

await page.goto('https://selectorshub.com/shadow-dom-in-iframe/', {waitUntil: 'load'});

// How many iframes match your selector?
console.log((await page.locator('iframe#pact').count()));

// debugging will show no of iframe and list of matching frame name
// List all frames and their URLs (helps identify the correct one)
// console.log(page.frames().map(f => ({ name: f.name(), url: f.url() })));

// better approach using this
// content base filter

await page.frameLocator('#pact').nth(0).locator('#tea').fill('Masala Tea');

})();
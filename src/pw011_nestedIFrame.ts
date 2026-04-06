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

  await page.goto('https://selectorshub.com/iframe-and-nested-iframe/', {waitUntil: "load"});

  const frame = page.frameLocator('#pact2');
  await page.locator('#inp_val').fill('Testing');
  await frame.locator('#jex').fill('Javascript');
  

  // go one level deeper
  const innerFrame = frame.frameLocator('#pact3');
  await innerFrame.locator('#glaf').fill('Selenium');

  console.log(await frame.locator('#glaf').count());
  console.log(await page.locator('h3').innerText());

  //Print the total number of frames
  console.log('total number of frames');
  console.log(page.frames().length);

  for(let e of page.frames()){
    console.log({
        name: e.name(),
        url : e.url()
    });
  }

})();

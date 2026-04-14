import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";
import { promises as fs } from 'fs';

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto('https://orangehrm.com/contact-sales', {waitUntil: 'load'});
  await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  await page.waitForTimeout(1000);

  await fs.rm('./screenshots', { recursive: true, force: true });
  await page.screenshot({path: 'one.png'});
  await page.screenshot({path: 'fullPage.png', fullPage: true});

  /**
   * this line will create directory and put the screenshot
   */
//   await page.screenshot({path: './screenshots/mypic.png', fullPage: true});

  //customize the screenshot
  await page.screenshot({
    path: './screenshots/fullPage.png', 
    clip: {
        x:0,
        y:0, 
        width: 800,
        height: 600}
    });
    //element/locator screenshot
    let logoEle:Locator = page.getByAltText('OrangeHRM Logo').first();
    await logoEle.screenshot({path: './screenshots/logoEle.png'})

    //only registration form screenshot
    let regEle:Locator= page.locator('#Form_getForm');
    await regEle.screenshot({path: './screenshots/regEle.png'});

    //change format and quality
    //by default pw saves in .png
    //want to save the file in .jpg
    await page.screenshot({
        path: './screenshots/testJPEG.jpg',
        type: 'jpeg',
        quality: 80,
        fullPage: false
    });

    //capture the screenshot and use it as Buffer - no need to save it
    let  imageBuffer:Buffer= await page.screenshot();
    console.log('Buffer length : '+imageBuffer.length);

    // NOTES :
    // on failure screenshot, update in playwright.config.ts file
    // run the test file from ./test dir
    // if any test case fail screen should attached
    // all the file will go in test-results folder
    // below is the test file name
    ///Users/ashutoshsingh/Documents/Jan2026PlaywrightSessions/tests/pw01_google.spec.ts

  })();
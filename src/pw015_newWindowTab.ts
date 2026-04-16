import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  // create event listner for accept cookies button:
  // background listner:
  page.on('framenavigated', async () => {
    let acceptCookiesButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    if(await acceptCookiesButton.isVisible()){
      await acceptCookiesButton.click();
    }

  });

  await page.goto('https://orangehrm.com/contact-sales', {waitUntil: 'load'});
  
  await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
  
  // very important why line 18 and 19 await is not written, because 
  // we want to run line 18 & 19 to be run in parallel mode
  let [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator(`//a[contains(@href, 'mycompany/')]`).click() //Open a new tab/window--popup event will be triggered
  ])
  
  await page.waitForTimeout(2000);

  console.log(await newTab.title());
  console.log(newTab.url());

  // close the child tab = newTab.close();
  await newTab.close();

  await page.waitForTimeout(1000);
  await page.bringToFront();
  console.log('Parent window title : '+ await page.title());

  // https://app.box.com/file/2015318339150
  // 1:33 hrs
  //

})();
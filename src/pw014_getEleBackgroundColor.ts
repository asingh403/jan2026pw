import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto('http://orangehrm.com/en/contact-sales/', {waitUntil: 'load'});

  // background color
  let contactSales:Locator= page.getByRole('button',{name: 'Contact Sales'}).first();
  let bgColor:string = await contactSales.evaluate(ele => getComputedStyle(ele).backgroundColor);

  console.log('the background color is : '+ bgColor);

  // text color
  let textColor:string = await contactSales.evaluate(ele => getComputedStyle(ele).color);

  console.log('the text Color color is : '+ textColor);

  // creating alert using JS
  page.evaluate(() => alert('Hello Ashutosh !!'));

})();
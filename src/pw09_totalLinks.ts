import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
  await page.goto("https://www.amazon.co.in/");

  //total link printing
//   let allLinks:string[] = await page.locator('a[href]').allInnerTexts();
//   console.log('total number of links '+ allLinks.length);

//   allLinks.forEach(e => console.log(e));

//   console.log('**************');
  
  // Print the total number of images
  let allImg:Locator[] = await page.locator('//img[@alt]').all();
  console.log('total number of images '+ allImg.length);

  for(let i of allImg){
    console.log(await i.getAttribute('alt'));
  }

  })();
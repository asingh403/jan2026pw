import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
//   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  //get all the footer links
  //out of 16 capture that footer link where text = Privacy Policy

  //use case #01
  let footerEle:Locator = page.locator('footer a');
  footerEle.filter({hasText: 'Privacy Policy', visible:true}).click();

    //use case #01
    //search scenario #02
    await page.goto('https://www.google.com/')
    await page.locator(`[name='q']`).fill('selenium testing Java');
    await page.locator(`ul[role = 'listbox'] li div[role = 'option']`).filter({hasText: 'Java'}).first().click();



    //use case #01
    //search scenario #02
    await page.goto('https://www.amazon.co.in/')
    await page.locator(`input[id = 'twotabsearchtextbox']`).fill('macbook');
    await page.locator(`div[role='gridcell'] div[role = 'button']`).filter({hasText: ' pro m4'}).first().click();
    console.log(page.url());


  })();
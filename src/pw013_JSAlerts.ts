import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page:Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  
  let context:BrowserContext = await browser.newContext({
    httpCredentials:{
        username: 'admin',
        password: 'admin'
    }
  })

  page = await context.newPage();
  page.goto('https://the-internet.herokuapp.com/basic_auth');

//   basic auth: username/password [below code is working]
//   this is 2nd way to handle the basic_auth text box
  
//   let username:string = 'admin';
//   let password:string = 'admin';

//   await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`, {waitUntil: "load",});
//   await page.waitForTimeout(2000);
  
  let text:string=await page.locator('p').innerText();
  console.log(text);
  
  let isInclude:Boolean=text.includes('Congratulations!');
  console.log(isInclude);

  //if I want to turn off alert
  page.off('dialog', async dialog => { })

})();

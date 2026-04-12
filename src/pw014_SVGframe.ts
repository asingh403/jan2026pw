import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto("https://petdiseasealerts.org/forecast-map/#/", {waitUntil: "load"});
  await page.waitForTimeout(3000);


  //for the FrameLocator in Playwright it is only work for CSS selector not xpath
  // make sure you are using css only
  let framEle = page.frameLocator(`iframe[id*= 'map-instance']`);
  let allState:Locator[] =await framEle.locator(`//*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g']`).all();
  console.log('total no of regions :'+ allState.length);

  //Print the id of each region/state 
  for(let e of allState){
    
    // await e.hover();
    let box = await e.boundingBox();
    if(box){
       await page.mouse.move(box.x+box.width/2, box.y+box.width/2); //this is middle of center of element
       await page.waitForTimeout(200);
    }
    let stateName = await e.getAttribute('id');
    console.log(stateName);
    await page.waitForTimeout(100);
  }
    console.log('all 51 state complete');

})();
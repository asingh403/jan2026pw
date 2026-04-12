import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'load'});
  
//   "::before" this kind of element in dom known as pseduo class

// here we have to create a JS to handle in PW and selenium

//   window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')
//   window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('color')

let content = await page.evaluate(()=> {
    return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, 
                                  '::before').getPropertyValue('content');
})

console.log('content : '+ content);

if(content.includes("*")){
    console.log('first name is mandatory field');
}


// color validation

let color = await page.evaluate(()=> {
    return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, 
                                  '::before').getPropertyValue('color');
})

console.log('color : '+ color);
if (color === 'rgb(255, 0, 0)') {
  console.log('Color is Red');
}
})();
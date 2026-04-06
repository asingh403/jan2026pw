import { Browser, chromium, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

/**
 * iframe concepts
 */

//   await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/', {waitUntil: "load"});
//   await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

//   //after click iframe will be loaded

//   let frameEle: FrameLocator = page.frameLocator(`iframe[id*= 'frame-one']`);
//   frameEle.locator('#RESULT_TextField-1').fill('Test Automation');

//   let header = await page.locator('h3.details__form-preview-title').innerText();
//   console.log(header);

 /**
  * frame concepts
  */
  await page.goto('https://www.londonfreelance.org/courses/frames/index.html', {waitUntil: 'load'});
  let frameELement:FrameLocator=page.frameLocator(`frame[name='main']`);
  let header=await frameELement.locator('h2').innerText();
  console.log(header);

  /**
   * Print the total number of frames on page
   */
  let allFrames:Locator[] = await page.locator('//frame').all();
  console.log("total numebr of frames : "+ allFrames.length);

  for(let frameEle of allFrames){
    console.log(await frameEle.getAttribute('name'), " : ", await frameEle.getAttribute('src'));
  }






})();

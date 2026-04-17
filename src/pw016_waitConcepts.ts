import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  page = await browser.newPage();
  page.setDefaultTimeout(10000);
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', { waitUntil: 'load' });
  let firstname:Locator = page.getByRole('textbox', {name: 'First Name11'}); // no error in case of wrong locator
  firstname.click({timeout: 5000});

// actions: auto wait will be applied
// click
// hover
// textContent
// check

// Playwright sequence of execution
// 1. DOM loaded
// 2. visible on page
// 3. stable on page
// 4. enable
// 5. clickable

// await firstname.fill('Ashutosh');
// error we are getting based on wrongly action on above "waiting for getByRole"
// explicity wait in pw; dynamic wait : for a specific locator

   firstname.waitFor({state: 'visible', timeout: 5000}); //this kind of wait called in PW as explicitly wait
   firstname.fill('Testing');

// fill the Reg form: success message on the page
//    await page.locator('#successmesg').waitFor({state: 'visible', timeout: 5000});

// assertations in pw: using expect: default auto wait
//    expect(page.locator('#successmesg')).toBeVisible();

// wait for selector from page lib:
// legacy + not good practice to use

   (await page.waitForSelector('#input-firstname')).fill('Testing'); // this is legacy code not be used only xpath, css, text
// Only one state are there

// (await page.waitForSelector('#input-firstname', {state: 'visible'})).fill('Testing');
   (await page.waitForSelector('#input-firstname')).fill('Testing');

// waitFor() => Locator Library -- any kind of locators - pw=semanctic roles
// waitForSelector -> page only for xpath, css

   page.waitForLoadState('load'); // page is fully loaded
   page.waitForLoadState('domcontentloaded'); // it is only take care for dom content is loaded or not
   page.waitForLoadState('networkidle'); // all the n/w api call are fully done

// any kind of Pop-up like JS popup
// page.waitForEvent()
// page.waitForURL(); // if the irl is properly visible

})();
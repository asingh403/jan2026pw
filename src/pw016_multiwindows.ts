import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";
/**
 * Opening multiple windows
 * using browserContext
 */
(async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome",headless: false });
  let brCtx:BrowserContext = await browser.newContext();
  const page = await brCtx.newPage();

  // create event listner for accept cookies button:
  // background listner:
  page.on("framenavigated", async () => {
    let acceptCookiesButton = page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll");
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }
  });

    await page.goto("https://orangehrm.com/contact-sales", {waitUntil: "load",}); // Parent window
    let orangehrmTitle:string = await page.title();
    
    await page.locator(`//a[contains(@href, 'mycompany/')]`).click();
    await page.locator(`//a[contains(@href, 'facebook')]`).click();
    await page.locator(`//a[contains(@href, 'youtube')]`).click();

    await page.waitForTimeout(2000);

    let allPages:Page[] =brCtx.pages();
    console.log('total number of windows open : '+ allPages.length);

    for(let pg of allPages){
        if(!(await pg.title() === orangehrmTitle)){
            console.log(await pg.title());
            pg.close();
        }
    }
    await page.bringToFront();
    console.log('\n'+'Parent window after closing all child tabs : '+'\n'+ await page.title());
    await page.getByRole('textbox', {name: 'Full Name'}).fill('Ashutosh');

})();

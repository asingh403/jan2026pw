import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    let url:string = 'https://classic.freecrm.com/';
    await page.goto(url);
    
    // 1. when label text and aria both are not available 
    // 2. we can use name=placeholder name
    // 3. if placeholder value is not there then getByRole not use
    await page.getByRole('textbox', {name: 'Username'}).fill('Ashutosh-Test');

    await page.goto(url+'register');
    await page.getByRole('checkbox', {name: 'checkbox-label'}).click();
    await page.waitForTimeout(2000);
    await page.getByRole('checkbox', {name: 'checkbox-label'}).uncheck();
    
})();
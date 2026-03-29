import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
            // executablePath:`/Applications/Comet.app/Contents/MacOS/Comet`
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name: 'First Name'}).fill('QA-Test Automation');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Last Name QA');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', {name: 'Continue'}).click();


    


})();
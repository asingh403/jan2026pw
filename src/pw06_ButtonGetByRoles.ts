import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('link', {name: 'Continue'}).highlight();

    //if input or button --> role: button
    //link --> it will be link

})();
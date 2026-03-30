import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
    page.goto(url);
    console.log(page.url());

    await page.waitForTimeout(2000);
    // since ForgetPassword has 2 link we can use first() and last() method
    await page.getByRole('link', {name: 'Forgotten Password'}).first().click(); //.last().click();
    await page.waitForTimeout(2000);
    console.log(page.url());
    
})();
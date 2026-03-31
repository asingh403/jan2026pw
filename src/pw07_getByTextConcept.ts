import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByText('Register Account', {exact: true}).highlight();

    // we can also use this method for higlight h1-h6
    page.locator('h1', {hasText: 'Register Account'});
    
    // for link
    await page.locator('h1:text("Register Account")').highlight();


    // very useful for webTable scenarios
    await page.locator('a', {hasText: 'Privacy Policy'}).last().click();
})();
import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await webkit.launch(
        {
            headless:false, 
            channel: 'Webkit'.toLowerCase()
            // executablePath:`/Applications/Comet.app/Contents/MacOS/Comet`
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    console.log('bye');

    let title:string = await page.title();
    console.log(`the page title is ${title}`);

    let url:string = page.url();
    console.log(`the page url is : ${url}`);

    let emailId:Locator = page.locator('#input-email');
    await emailId.fill('ashu@test.com');
    
    await page.close();
})();
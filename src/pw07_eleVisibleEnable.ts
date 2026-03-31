import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://classic.freecrm.com/register');

    let signUpBtn:Locator=page.locator('#sign-in-btn');
    let isVisible:boolean=await signUpBtn.isVisible();
    console.log(isVisible);

    // to check if the btn is enabled or not

    let isEnabled:boolean= await signUpBtn.isEnabled();
    console.log(isEnabled);
       
    // #css selector not support text
    
})();



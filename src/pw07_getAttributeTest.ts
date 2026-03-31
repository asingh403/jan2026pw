import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator('#input-email').fill('ashutosh@gmail.com');

    //user getAttribute() method for any other attributes other than value attribute
    let name:string|null = await page.locator('#input-email').getAttribute('name');
    console.log(name);


    let placeholder:string|null = await page.locator('#input-email').getAttribute('placeholder');
    console.log(placeholder);


    await page.locator('#input-email').fill('ashutosh@gmail.com');

    //the above email value we can print using inputValue() method
    // to fetched entered value
    let enteredValue:string|null = await page.locator('#input-email').inputValue();
    console.log(enteredValue);

    
    
})();
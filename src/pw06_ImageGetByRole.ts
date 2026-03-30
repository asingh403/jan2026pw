import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/';
    console.log(`01. ${url}`);
    await page.goto(url+'register');
    console.log('02. '+ page.url());
    await page.waitForTimeout(2000);

    /**
     * if image found -> name -> alt value
     */
    await page.getByRole('img', {name: 'naveenopencart'}).click();
    let currentURL:string=page.url();
    console.log(`03. ${currentURL}`);

    await page.goto('https://www.amazon.in/');
    await page.getByRole('img', {name: 'Cushion covers, bedsheets & more'}).click();
    await page.waitForTimeout(2000);
    console.log('04. '+page.url());

    // Pro Tip: for paragraph, span, div do not use getByRole() method
    
})();
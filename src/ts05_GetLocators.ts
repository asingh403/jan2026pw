import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
            // executablePath:`/Applications/Comet.app/Contents/MacOS/Comet`
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByTitle('naveenopencart').click();
    // page.waitForTimeout(2000);
    // await page.getByAltText('naveenopencart').click();
    // page.waitForTimeout(5000);

    //testId
    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html', {waitUntil:'load'});
    // await page.getByTestId('username-input').fill('ashutosh testing');
    // await page.getByTestId('form-submit-btn').click();

    await page.waitForTimeout(5000);
    await page.close();


})();
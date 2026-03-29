import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name:'* First Name'}).fill('Ashutosh');

    //1. textbox should have 'label'or aria-label
    await page.getByRole('textbox',{name: 'Last Name'}).fill('Singh');
    await page.getByRole('radio',{name: 'Yes'}).click();
    //recommended do not use as it could be risky for multiple checkboxes
    //await page.getByRole('checkbox').click(); 

    await page.locator(`input[type = 'checkbox']`).click();
    page.waitForTimeout(2000);
    // await page.getByRole('link', {name: 'Forgotten Password'}).click();

    //heading will support from h1 to h6. and role is called as Heading
    let header:string | null = await page.getByRole('heading', {name: 'Register Account'}).innerText();
    console.log(header);
    

})();
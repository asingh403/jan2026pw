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

    // await page.locator('#input-email').fill('test_123@open.com');
    // await page.locator('#input-password').fill('test@123');
    // await page.locator(`input[type='submit']`).click();


    // let emailId:Locator = page.locator('#input-email');
    // let password:Locator = page.locator('#input-password');
    // let loginBtn:Locator = page.locator(`input[type='submit']`);

    // await emailId.fill('test_123@open.com');
    // await password.fill('test@123');
    // await loginBtn.click();

    //6 elements -- same text My Account
    // let header:string | null = await page.getByText('My Account').first().textContent();
    // let header:string | null = await page.getByText('My Account').nth(3).textContent();


    //using xpath
    // let myAccount:Locator = page.locator(`//h2[text()= 'My Account']`);
    // let header:string|null = await myAccount.textContent();

    // console.log('login successful '+ header);

    // Registration Page

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    await page.getByPlaceholder('First Name').fill('Testing');
    await page.getByPlaceholder('Telephone').fill('QA');
    await page.getByPlaceholder('E-Mail').fill('test@abc.com');


    //highlight - debugging
    // await page.locator('#input-firstname').highlight();

    // enter the charcter like real user
    await page.locator('#input-email').pressSequentially('Testing-Automation@learn.com',{delay: 200});

    await page.waitForTimeout(2000);

    await page.close();


    
})();
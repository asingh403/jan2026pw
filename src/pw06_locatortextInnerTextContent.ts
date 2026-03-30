import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
    page.goto(url);

    //textContent => visible and hidden content as well and return string or null
    let header:string|null =await page.getByText('Register Account', {exact: true}).textContent();
    console.log(header);

    //textContent => visible screen content
    let headerInnerText:string|null =await page.getByText('Register Account', {exact: true}).innerText();
    console.log(headerInnerText);

    // will give the html content of the page [currently below method not working]
    // let innerHTML:string|null =await page.getByText('Register Account', {exact: true}).innerHTML();
    // console.log(innerHTML);

    
})();
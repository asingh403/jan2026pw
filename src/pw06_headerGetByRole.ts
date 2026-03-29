import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch(
        {
            headless:false, 
            channel: 'chrome'.toLowerCase()
        });
    let page:Page = await browser.newPage();
    await page.goto('https://www.freshworks.com/');
    let header_h1:string|null= await page.getByRole('heading', {name: 'Uncomplicate'}).innerText();
    console.log(header_h1);

    //span and div getByRole is not applicable

    let header_para:string|null =await page.getByText('Freshworks provides').innerText();
    console.log(header_para);

    //for h2=> consider this is also starting from "uncomplicate" then we will use level which is range from 1-6
    let header_h2:string|null= await page.getByRole('heading', {name: 'Uncomplicate', level:1}).innerText();
    console.log(header_h2);


    //cheetsheet: https://app.box.com/file/1980020123199?s=yr8roi8irnsyjc35qyk8amru28qmiwn7

})();
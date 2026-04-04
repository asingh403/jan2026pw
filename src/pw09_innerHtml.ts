import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();


  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  let headerHtml = await page.getByRole('heading', {name: 'Register Account'}).innerHTML();
  console.log(headerHtml);

  let firstNameHtml = await page.locator('#input-firstname').innerHTML();
  
// <input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">

    console.log(firstNameHtml);

    //form html

    let formHtml = await page.locator('form.form-horizontal').innerHTML();
    console.log(formHtml);

    console.log(('bye!!'));

})();
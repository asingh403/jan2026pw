import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  
  let page: Page = await browser.newPage();
  let name: string[] = ["Jordan.Mathews","Kevin.Mathews","Joe.Root","Garry.White"];
  let followingName = 'Jasmine.Morgan';

  await page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html");

  let followingLocators:string[] = await page.locator(`//td[text()='${followingName}']/following-sibling::td`).allInnerTexts();
//   console.log(followingLocators);

  await selectUser(page, name);
  let result:string[] = await getUserData(page, followingLocators);
  console.log(result);


})();

/**
 * @param page 
 * @param username 
 * @returns This method return the user data from table
 */
  async function getUserData(page:Page, username:string[]):Promise<string[]> {
    let followingLocators:string[] = await page.locator(`//td[text()='Jasmine.Morgan']/following-sibling::td[@class = 'left']`).allInnerTexts();
    return followingLocators;    
}

  async function selectUser(page:Page, username:string[]):Promise<void> {

    for (let e of username) {
    await page.locator(`//td[text()= '${e}']/preceding-sibling::td/input[@type='checkbox']`).click();
    
    await page.waitForTimeout(300);
    //esp kind of CSS
    await page.locator(`tr:has(td:text('${e}'))`).locator('td').nth(0).click();
    console.log(e);

  }
}




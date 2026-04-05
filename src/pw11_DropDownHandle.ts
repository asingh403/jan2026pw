import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();


  await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');
//   await page.locator(`//div[@class = 'select-trigger']//span[text() = 'Choose your preferred programming language']`).click();

// this code is working as generic function not created so commenting it
//   const dropdownValues = await page.locator(`//div[@class = 'options show']//div[@class = 'option']`).all();
//   for(let e of dropdownValues){
//     console.log(await e.textContent());
//   }
  
//   let text:string = 'Java';
//   let textFramework:string = 'Angular';
//   let textExpLevel:string ='Senior (7-10 years)';
//   let dropDownValue:string = 'Choose your preferred programming language';
//   let expLevelValue:string = 'Select your experience level';
//   let timeout:number = 300;

//   await page.waitForTimeout(timeout);
//   await page.getByText(`${text}`, {exact: true}).click();
//   console.log(`${text} is Clicked!!`);

//   await page.waitForTimeout(timeout);
//   await page.locator(`//div[@class = 'select-trigger']//span[text() = 'Choose your preferred web framework']`).click();
//   await page.getByText(`${textFramework}`, {exact: true}).click();
//   console.log(`${textFramework} is Clicked!!`);


//   await page.waitForTimeout(timeout);
//   await page.locator(`//div[@class = 'select-trigger']//span[text() = 'Select your experience level']`).click();
//   await page.getByText(`${textExpLevel}`, {exact: true}).click();
//   console.log(`${textExpLevel} is Clicked!!`);


  await selectValue(page, 'Choose your preferred programming language', 'JavaScript');
})();

// Choose your preferred programming language
async function selectValue(page:Page, dropDownLabel:string, value:string):Promise<void>{
  await page.locator(`//div[@class = 'select-trigger']//span[text() = '${dropDownLabel}']`).click();
  console.log('after selecting the drop down');
 
  await page.getByText(`${value}`, {exact: true}).click();
  console.log(`${value} is Clicked!!`);
    
  }

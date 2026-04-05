import { Browser, chromium, expect, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  
  let page: Page = await browser.newPage();
  let url:string = 'https://practice.expandtesting.com/dropdown';
  
  let timeout:number = 1000;
  await page.goto(url);
  let simpleDropDown:Locator = page.locator('#dropdown');
  await simpleDropDown.click();

  await simpleDropDown.selectOption('Option 1');

  let country:Locator = page.locator('#country');
  
  /**
  * This should be the SECOND preference
  */

  //<option value="JM">Jamaica</option> 
  await country.selectOption('JM'); // 

  await page.waitForTimeout(timeout);
  //select by visible text
 //<option value="IN">India</option>
 /**
  * This should be the FIRST preference
  */
  await country.selectOption({label: 'India'}); //India

  /**
   * Select By INDEX
   */

// const value = await country.inputValue();
// console.log(value);

  await country.selectOption({index: 2});
  console.log(await country.inputValue()); // it will print the selected country value like "INDIA" => IN

  await page.waitForTimeout(timeout);
  await country.selectOption({index: 3});
  console.log(await country.inputValue()); 

  
  await page.waitForTimeout(timeout);
  await country.selectOption({index: 4});
  console.log(await country.inputValue());

  await page.waitForTimeout(timeout);
  await country.selectOption({index: 5});
  console.log(await country.inputValue());

  await page.waitForTimeout(timeout);
  await country.selectOption({index: 6});
  console.log(await country.inputValue());
  
  await page.waitForTimeout(timeout);
  await country.selectOption({index: 7});
  console.log(await country.inputValue());

  await page.waitForTimeout(timeout);
  await selectDropDownByValue(country, 'JM')

  await page.waitForTimeout(timeout);
  await selectDropDownByLabel(country, 'Jordan');

})();

/**
 * 
 * @param element 
 * @param value 
 * @select: Based on value eg: "IN"
 */
async function selectDropDownByValue(element:Locator, value:string):Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
    console.log(`select by dropdown : '${value}'`);  
}

/**
 * 
 * @param element 
 * @param value
 * @select: Based on value eg: label: 'India'
 */
async function selectDropDownByLabel(element:Locator, labelValue:string):Promise<void> {
    await element.selectOption({label: labelValue});

    //here we have to inputValue();
    let selectValue = await element.inputValue();
    await expect(element).toHaveValue(selectValue);
    console.log(`select by dropdown by label : '${labelValue}'`);  
}
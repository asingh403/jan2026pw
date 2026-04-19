import {test, expect, Page, Locator} from '@playwright/test'

test('element is visible, disabled assertions', async ({page}) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/', {waitUntil: 'load'});
    let targetStr = 'Test';
    while(true){
        // let xpath = `//table[@id = 'tablepress-1']/tbody/tr/td[text()= '${targetStr}']//preceding-sibling::td//input[@type = 'checkbox']`;
        let cityXpath = `//table[@id = 'tablepress-1']/tbody/tr/td[text()= '${targetStr}']`;
        let eleExist:boolean = await page.locator(cityXpath).isVisible();
        
        if(eleExist){
            console.log('element is found...');
            let checkboxXpath = cityXpath + `//preceding-sibling::td//input[@type = 'checkbox']`;
            await page.locator(checkboxXpath).check();
            break;
        }

        //click on next icon pagination logic
        let next = page.getByRole('link', {name: 'Next'});
        await next.click();
        await page.waitForTimeout(1000);
        test.setTimeout(60000);
        if(await next.isDisabled()){
            console.log('Pagination is over...');
            break;
        }
    }
    await page.pause();
})

test('multiple selection', async({page}) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/', {waitUntil: 'load'});
    let country:string = 'India'
    
   
    while(true){ 
    let allEles:Locator[] = await page.locator(`//table[@id = 'tablepress-1']/tbody/tr/td[text()= '${country}']//preceding-sibling::td//input[@type = 'checkbox']`).all();
        if(allEles.length > 0){
        for(let e of allEles){
            await e.check();
        }
    }

    // pagination logic to click on next icon
    let next = page.getByRole('link', {name: 'Next'});
    if(await next.isDisabled()){
        console.log('Pagination is over...');
        break;        
      }
      await next.click();
      console.log("ele found" + " : "+country);
      
   }
    await page.pause();
})



test('multiple selection two countries', async({page}) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/', {waitUntil: 'load'});
    let country1:string = 'India';
    let country2:string = 'Russia';
    let country3:string = 'United States';

    let countries:string[] = ['India', 'United States', 'Russia'];
    
    let listCountries = countries.map(c => `normalize-space()='${c}'`).join(' or ');
    
    let dyXpath:string = `//table[@id='tablepress-1']/tbody/tr/td[${listCountries}]//preceding-sibling::td//input[@type='checkbox']`;
    console.log('dynamic xpath : '+ dyXpath);
   
    while(true){ 
    // let allEles:Locator[] = await page.locator(`//table[@id = 'tablepress-1']/tbody/tr/td[text()= '${country1}' or text()= '${country2}']//preceding-sibling::td//input[@type = 'checkbox']`).all();
    let allEles:Locator[] = await page.locator(dyXpath).all();
        if(allEles.length > 0){
        for(let e of allEles){
            await e.check();
            // await page.waitForTimeout(2000);
            // test.setTimeout(60000);
        }
    }

    // pagination logic to click on next icon
    let next = page.getByRole('link', {name: 'Next'});
    if(await next.isDisabled()){
        console.log('Pagination is over...');
        break;        
      }
      await next.click();
   }
    await page.pause();
})
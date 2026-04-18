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
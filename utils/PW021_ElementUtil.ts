import {test, Locator, expect, Page} from '@playwright/test';

type flexibleLocator = string | Locator;

export class ElementUtil{
    private page:Page;
    private defaultTimeOut = 30000;
    
    constructor(page:Page, timeout:number, number=3000){
        this.page = page;
        this.defaultTimeOut = timeout;
    }

    /**
     * 
     * @param locator this method convert string to locator
     * @returns semantic base locator
     */
    private getLocator(locator:flexibleLocator): Locator{
        if(typeof locator === 'string'){
            return this.page.locator(locator);
        }
        return locator;
    }

    /**
     * click on element
     * @param locator
     * @param options 
     */

    async click(locator:flexibleLocator, options?:{ force?:boolean, timeout?:number }):Promise<void>{
        await this.getLocator(locator).click({
            force:options?.force,
            timeout:options?.timeout || this.defaultTimeOut
        });
        console.log(`clicked on element : ${locator}`);
    }

    /**
    * double click on element
    * @param locator 
    */
    async doubleClick(locator:flexibleLocator):Promise<void>{
        await this.getLocator(locator).dblclick({
            timeout:this.defaultTimeOut
        });
        console.log(`clicked on element : ${locator}`);
    }

    /**
     * right click on element
     * @param locator
     */
    async rightClick(locator:flexibleLocator):Promise<void>{
        await this.getLocator(locator).click({
            button: 'right',
            timeout:this.defaultTimeOut
        });
        console.log(`clicked on element : ${locator}`);
    }


    /**
     * fill text an input field
     * @param locator
     * @param text 
     */
    async fill(locator:flexibleLocator, text:string):Promise<void>{
        await this.getLocator(locator).fill(text, {timeout: this.defaultTimeOut});
        console.log(`Filled text : ${text} into element : ${locator}`);
    }

    /**
     * Type text with delay (default delay: 500 ms)
     * @param locator
     * @param text 
     * @param delay 
     */
    async type(locator:flexibleLocator, text:string, delay:number=500):Promise<void>{
        await this.getLocator(locator).pressSequentially(text, {delay,timeout:this.defaultTimeOut});
        console.log(`Types text as human : ${text} into element : ${locator}`);
    }

    async clear(locator:flexibleLocator):Promise<void>{
        await this.getLocator(locator).clear({timeout: this.defaultTimeOut});
        console.log(`Cleared the element : ${locator}`);
    }

    /**
     * Get the text context of an element
     * @param locator 
     * @param timeout 
     * @returns string | null
     */

    async getText(locator: flexibleLocator):Promise<string | null>{
        const text= await this.getLocator(locator).textContent({timeout: this.defaultTimeOut});
        return text;
    }

    /**
     * Get the inner text of an element
     * @param locator 
     * @param timeout 
     * @returns string | null
     */

    async getInnerText(locator: flexibleLocator):Promise<string>{
        const text= await this.getLocator(locator).innerText({timeout: this.defaultTimeOut});
        return text.trim();
    }

    /**
     * Get the attribute value of an element
     * @param locator 
     * @param timeout 
     * @returns string | null
     */

    async getAttributeValue(locator: flexibleLocator, attributeName:string):Promise<string | null>{
        return await this.getLocator(locator).getAttribute(attributeName);
    }

    /**
     * Get the input (entered) value of an element
     * @param locator 
     * @param timeout 
     * @returns string | null
     */

    async getInputValue(locator: flexibleLocator):Promise<string | null>{
        return await this.getLocator(locator).inputValue({timeout:this.defaultTimeOut});
    }

    /**
     * Get all text content from multiple elements
     */

    async getAllInnerText(locator:flexibleLocator):Promise<string[]>{
        return await this.getLocator(locator).allInnerTexts();
    }

    
    //============= element visibilty & state check =========
    async isVisibile(locator:flexibleLocator, timeout:number = 5000):Promise<boolean>{
        try{
            await this.getLocator(locator).waitFor({state: 'visible', timeout});
            return true;
        }
        catch{
            return false;
        }
    }

    /**
     * check element is hidden
     * @param locator
     * @param timeout 
     * @returns 
     */
    async isHidden(locator:flexibleLocator):Promise<boolean>{
        return await this.getLocator(locator).isHidden();
    }

    /**
     * check element is enabled
     * @param locator
     * @param timeout 
     * @returns 
     */
    async isEnabled(locator:flexibleLocator):Promise<boolean>{
        return await this.getLocator(locator).isEnabled();
    }

     /**
     * check element is disabled
     * @param locator
     * @param timeout 
     * @returns 
     */
    async isdisabled(locator:flexibleLocator):Promise<boolean>{
        return await this.getLocator(locator).isDisabled({timeout: this.defaultTimeOut});
    }

    /**
     * check element is checked
     * @param locator 
     * @param timeout 
     * @returns 
     */
    async isChecked(locator:flexibleLocator):Promise<boolean>{
        return await this.getLocator(locator).isChecked();
    }

    /**
     * element is editable
     * @param locator 
     * @param timeout 
     * @returns 
     */
    async isEditable(locator:flexibleLocator):Promise<boolean>{
        return await this.getLocator(locator).isEditable({timeout: this.defaultTimeOut});
    }

    // ======= wait utils ===========
    /**
     * wait for element to be visible
     */
    async waitForElementVisible(locator:flexibleLocator, timeout:number=5000):Promise<boolean>{
         try{
            await this.getLocator(locator).waitFor({state: 'visible', timeout});
            console.log(`waited for elemenet to be visible`);
            return true;
        }
        catch{
            return false;
        }
        
    }


    /**
     * wait for element to be attached
     */
    async waitForElementAttached(locator:flexibleLocator, timeout:number=5000):Promise<boolean>{
         try{
            await this.getLocator(locator).waitFor({state: 'attached', timeout});
            console.log(`waited for elemenet to be attached`);
            return true;
        }
        catch{
            return false;
        }
    }

    /**
     * wait for element to be detached
     */
    async waitForElementDetached(locator:flexibleLocator, timeout:number=5000):Promise<boolean>{
         try{
            await this.getLocator(locator).waitFor({state: 'detached', timeout});
            console.log(`waited for elemenet to be detached`);
            return true;
        }
        catch{
            return false;
        }
    }

    /**
     * wait for element to be hidden
     */
    async waitForElementHidden(locator:flexibleLocator, timeout:number=5000):Promise<boolean>{
         try{
            await this.getLocator(locator).waitFor({state: 'hidden', timeout});
            console.log(`waited for elemenet to be hidden`);
            return true;
        }
        catch{
            return false;
        }
    }

    /**
     * wait for page load stat
     */

    async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'):Promise<void>{
        await this.page.waitForLoadState(state);
        console.log(`waited for page load state: ${state}`);
    }

    /**
     * wait for specific timeout (static)
     */
    async sleep(timeout:number):Promise<void>{
        this.page.waitForTimeout(timeout);
        console.log(`wait for ${timeout} ms`);
    }


    // ********** Drop down Utils/Select Based Drop down **********
    async selectByText(locator:flexibleLocator, text:string){
        await this.getLocator(locator).selectOption({label:text}, {timeout: this.defaultTimeOut});
        console.log(`select option ${text} from drop-down ${locator}`);
    }

    async selectByValue(locator:flexibleLocator, value:string){
        await this.getLocator(locator).selectOption({value:value}, {timeout: this.defaultTimeOut});
        console.log(`select option ${value} from drop-down ${locator}`);
    }

    async selectByIndex(locator:flexibleLocator, index:number){
        await this.getLocator(locator).selectOption({index:index}, {timeout: this.defaultTimeOut});
        console.log(`select option ${index} from drop-down ${locator}`);
    }

}
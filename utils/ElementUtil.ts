import {test, Locator, expect, Page} from '@playwright/test';

type flexibleLocator = string | Locator;


export class ElementUtil{
    private page:Page;
    private defaultTimeOut = 30000;
    
    constructor(page:Page, timeOut:number, number=3000){
        this.page = page;
        this.defaultTimeOut = timeOut;
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

    



}
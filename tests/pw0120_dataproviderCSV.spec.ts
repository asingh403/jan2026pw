import {test, expect, Page} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

// schemas types of reg data fields
type regData = {
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

// let registrationData:regData[] = JSON.parse(fs.readFileSync(`./data/register.csv`, 'utf-8'));

let fileContent = fs.readFileSync(`./data/register.csv`, 'utf-8');
let registrationData:regData[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

for(let user of registrationData){
    test(`Registration test for ${user.firstName}`, async ({page}) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', {name: 'First Name'}).fill(user.firstName);
        await page.getByRole('textbox', {name: 'Last Name'}).fill(user.lastName);
        await page.getByRole('textbox', {name: 'E-Mail'}).fill(getRandomEmail());
        await page.getByRole('textbox', {name: 'Telephone'}).fill(user.telephone);
        await page.getByRole('textbox', {name: 'Password'}).first().fill(user.password);
        await page.getByRole('textbox', {name: 'Password Confirm'}).fill(user.password);

        if(user.subscribeNewsletter === 'Yes'){
            await page.getByRole('radio', {name: 'Yes', checked:false}).click();
        }else{
            await page.getByRole('radio', {name: 'No', checked:true}).click();
        }

        await page.locator(`[name="agree"]`).click();
        await page.getByRole('button', {name: 'Continue'}).click();

        await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();

        // await page.pause();

    })
}

function getRandomEmail():string {
    let randomEmail:string = 'auto_'+ Math.random().toString(36).substring(2, 9)+'@qa.test';
    console.log('random email : '+ randomEmail);
    return randomEmail;
} 
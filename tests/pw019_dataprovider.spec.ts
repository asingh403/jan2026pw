import {test, expect, Page} from '@playwright/test';

let loginData = [
    {username: 'elon@openai.com', password: 'test@123'},
    {username: 'sama@ai.com', password: 'test@123'},
];

for(let data of loginData){
    test(`login for open cart ${data.username} and ${data.password}`, async ({page}) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.getByRole('textbox', {name: 'E-Mail Address'}).fill(data.username);
        await page.getByRole('textbox', {name: 'password'}).fill(data.password);
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page).toHaveTitle('My Account');
    });
}


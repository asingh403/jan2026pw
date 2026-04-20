import {test, expect, Page} from '@playwright/test';
import {faker} from '@faker-js/faker';

    /**
    * all are higlighted method are working
    */

    // test(`Registration of a single user with Faker`, async ({page}) => {

    //     const firstName=faker.person.firstName();
    //     const lastName=faker.person.lastName();
    //     const email = faker.internet.email({firstName: 'Auto'});
    //     const telephone = faker.phone.number({style: 'national'});
    //     const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' });

    //     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //     await page.getByRole('textbox', {name: 'First Name'}).fill(firstName); 
    //     await page.getByRole('textbox', {name: 'Last Name'}).fill(lastName);
    //     await page.getByRole('textbox', {name: 'E-Mail'}).fill(email);
    //     await page.getByRole('textbox', {name: 'Telephone'}).fill(telephone);
    //     await page.getByRole('textbox', {name: 'Password'}).first().fill(password);
    //     await page.getByRole('textbox', {name: 'Password Confirm'}).fill(password);

    //     await page.getByRole('radio', {name: 'Yes', checked:false}).click();
    //     await page.locator(`[name="agree"]`).click();

    //     // await page.pause();
    //     await page.getByRole('button', {name: 'Continue'}).click();

    //     await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();

    //     console.log('faker email : '+ email);
    // })


    // function generateUser(){
    //     return {
    //     firstName:faker.person.firstName(),
    //     lastName:faker.person.lastName(),
    //     email:faker.internet.email({firstName: 'Auto'}),
    //     telephone:faker.phone.number({style: 'national'}),
    //     password:faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' })
    //     };
    // }
    //     test(`Registration of a single user with Faker Generic function`, async ({page}) => {

    //     let user = generateUser();

    //     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //     await page.getByRole('textbox', {name: 'First Name'}).fill(user.firstName); 
    //     await page.getByRole('textbox', {name: 'Last Name'}).fill(user.lastName);
    //     await page.getByRole('textbox', {name: 'E-Mail'}).fill(user.email);
    //     await page.getByRole('textbox', {name: 'Telephone'}).fill(user.telephone);
    //     await page.getByRole('textbox', {name: 'Password'}).first().fill(user.password);
    //     await page.getByRole('textbox', {name: 'Password Confirm'}).fill(user.password);

    //     await page.getByRole('radio', {name: 'Yes', checked:false}).click();
    //     await page.locator(`[name="agree"]`).click();

    //     await page.pause();
    //     await page.getByRole('button', {name: 'Continue'}).click();

    //     await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();

    //     console.log('faker email : '+ user.email);
    // });


    // // multiple test cases run with different set of data
    // // usercount =3

    // let userCount =3;
    // for(let i=1; i<= userCount; i++){
    // test(`Registration of a new user ${i}`, async ({page}) => {

    //     let user = {
    //         firstName:faker.person.firstName(),
    //         lastName:faker.person.lastName(),
    //         email:faker.internet.email({firstName: 'Auto'}),
    //         telephone:faker.phone.number({style: 'national'}),
    //         password:faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' })
    //     };
        
    //     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //     await page.getByRole('textbox', {name: 'First Name'}).fill(user.firstName); 
    //     await page.getByRole('textbox', {name: 'Last Name'}).fill(user.lastName);
    //     await page.getByRole('textbox', {name: 'E-Mail'}).fill(user.email);
    //     await page.getByRole('textbox', {name: 'Telephone'}).fill(user.telephone);
    //     await page.getByRole('textbox', {name: 'Password'}).first().fill(user.password);
    //     await page.getByRole('textbox', {name: 'Password Confirm'}).fill(user.password);

    //     await page.getByRole('radio', {name: 'Yes', checked:false}).click();
    //     await page.locator(`[name="agree"]`).click();

    //     // await page.pause();

    //     await page.getByRole('button', {name: 'Continue'}).click();
    //     await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();
    //     console.log('faker email : '+ user.email);

    // });

// }

// create user with pre-defined email domains
let totalUserCount = 5;
let emailDomain = ['gmail.com', 'yahoo.com','outlook.com', 'edu.com', 'icloud.com'];


    // let userCount =3;
    for(let i=1; i<= totalUserCount; i++){
    test(`Registration of the new user ${i}`, async ({page}) => {

        const firstName=faker.person.firstName();
        const lastName=faker.person.lastName();
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain[i-1]}`;
        const telephone = faker.phone.number({style: 'national'});
        const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' });
        
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        await page.getByRole('textbox', {name: 'First Name'}).fill(firstName); 
        await page.getByRole('textbox', {name: 'Last Name'}).fill(lastName);
        await page.getByRole('textbox', {name: 'E-Mail'}).fill(email);
        await page.getByRole('textbox', {name: 'Telephone'}).fill(telephone);
        await page.getByRole('textbox', {name: 'Password'}).first().fill(password);
        await page.getByRole('textbox', {name: 'Password Confirm'}).fill(password);

        await page.getByRole('radio', {name: 'Yes', checked:false}).click();
        await page.locator(`[name="agree"]`).click();

        // await page.pause();

        await page.getByRole('button', {name: 'Continue'}).click();

        await expect(page.getByText('Your Account Has Been Created!', {exact: true})).toBeVisible();

        console.log('faker email : '+ email);

    });

}
import {test, expect} from '@playwright/test';


test.describe('login feature', () => {

    /**
     * error: Error: "context" and "page" fixtures are not supported in "beforeAll/afterAll"
     * since they are created on a per-test basis.
     */
    test.beforeAll(async ({page}) => {
        console.log('check the dB connection...');
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    });

    // test.beforeEach(async ({page}) => {
    //     console.log('==== starting the test ===');
    // })

    // test.beforeEach(async ({page}) => {
    //     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // })

    // test.afterEach(async ({page}) => {
    //     await page.close();
    // })

    // test.afterEach(async ({page}) => {
    //     console.log('=== ending the test ====');
    // })

    test.afterAll(async ({page}) => {
        console.log('close the dB connection ...and connect to dB...');
        await page.close();
    })

    test('title Test', async ({page}) => {
        await expect(page).toHaveTitle('Account Login')
    })

    test('header Test', async ({page}) => {
       await expect(page.getByText('Returning Customer', {exact:true})).toBeVisible();
    });

});
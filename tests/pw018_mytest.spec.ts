import { test, expect, Page, Locator } from "@playwright/test";

let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';

// this test case wont run in 'Firefox'
test('title test', async({page, browserName}) => {
    // test.skip(browserName=== 'firefox', 'Feature is not supported in Firefox');
    await page.goto(url, {waitUntil: 'load'});
    await expect(page).toHaveTitle('Account Login');
});

// test.slow() make the 3 times slower than default browser
test('url test', async({page, browserName}) => {
    // test.slow(browserName === 'firefox', 'This feature is slow in firefox');
    // test.slow();
    await page.goto(url, {waitUntil: 'load'});
    await expect(page).toHaveURL(/.*account\/login.*/);
});

// test.only will run only this test case
// test.skip will skip that test case
test('header is visible', async({page}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();
});

// this test should be fixed as having bug
test.fixme('password is visible', async({page}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();
});

test('new customer header is visible', async({page}) => {
    test.fail();
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('New Customer11', {exact: true})).toBeVisible();
});
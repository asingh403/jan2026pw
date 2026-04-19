import { test, expect, Page, Locator } from "@playwright/test";

let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
test('title test', async({page, browserName}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page).toHaveTitle('Account Login1');
});


// hooks => before, after
// fixtures
// data driven
// tags -> @sanity, @regression, @search




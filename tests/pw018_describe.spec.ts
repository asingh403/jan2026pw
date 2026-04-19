import { test, expect, Page, Locator } from "@playwright/test";

let url:string = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
test.describe('basic suite', () => {
test('title test', async({page, browserName}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page).toHaveTitle('Account Login');
});

test('url test', async({page, browserName}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page).toHaveURL(/.*account\/login.*/);
});

test('header is visible', async({page}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();
    });
});

test.describe('advace test suite', () => {
test('password is visible', async({page}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('Returning Customer', {exact: true})).toBeVisible();
});

test('new customer header is visible', async({page}) => {
    await page.goto(url, {waitUntil: 'load'});
    await expect(page.getByText('New Customer', {exact: true})).toBeVisible();
});
});

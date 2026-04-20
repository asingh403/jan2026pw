import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('before all --  server is up and running !!');
    console.log('before all -- chrome browser is open');
})

test.beforeEach(async () => {
    console.log('before each -- user is logged in !!');
})

test('Home page Test', async () => {
    console.log('Home page test');
})

test('Search Product Test', async () => {
    console.log('Search Product test');
})

test('Cart Test', async () => {
    console.log('Cart test');
})

test.afterAll(async () => {
    console.log('After all --  close the browser !!');
    console.log('After all --  delete data');
})

test.afterEach(async () => {
    console.log('after each -- logout !!');
})
import {test, expect} from '@playwright/test';

test.describe('login feature', () => {
    
    test.beforeAll(async () => {
        console.log('setup the system...');
    })

    test.afterAll(async () => {
        console.log('tear down the system...');
    })

    test.beforeEach(async () => {
        console.log('open url');
    })

    test.afterEach(async () => {
        console.log('close the page !!');
    })

    test('Home page Test', async () => {
        console.log('Home page test');
    })

    test('Search Product Test', async () => {
        console.log('Search Product test');
    })



})
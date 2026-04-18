import {test, expect, Page, Locator} from '@playwright/test'

test('value assertations', async () => {
    expect(1+1).toBe(2);
    expect('playwright').toContain('play');
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect((true)).toBeTruthy();
    expect((false)).toBeFalsy();
    expect(50).toBeGreaterThan(10);
    expect({role: 'admin'}).toEqual({role: 'admin'});
    expect({age:20, role: 'admin'}).toEqual({role: 'admin', age: 20});

})

test('locator based assertations', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByRole('heading', {name: 'Returning Customer'});
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Returning Customer', {timeout: 2000}); //default expect have 5sec
    await expect(header).toContainText('Returning');

    let emailId = page.getByRole('textbox', {name: 'E-Mail Address'});
    await expect(emailId).toHaveAttribute('id', 'input-email');
    await expect(emailId).toHaveCSS('height', '34px');

    let footerLink = page.locator('//footer//a');
    await expect(footerLink).toHaveCount(16);
})

/**
 * AAA Pattern for Automation Fw
 * Arrange
 * Act
 * Assert
 * Test Case: Only assertation -> hard assertion
 * Test Case with multiple checkPoint -> soft assertion
 */
test('soft assertations', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByRole('heading', {name: 'Returning Customer'});
    await expect(header).toBeVisible();
    // await expect(header).toHaveText('Returning Customer', {timeout: 2000}); //Hard expect have 5sec
    await expect.soft(header).toHaveText('Returning Customer1', {timeout: 2000}); //soft expect have 5sec
    
    console.log('Done!!');
})

/**
 * we can write negative assertions
 */
test('not assertations', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.locator('#error')).not.toBeVisible();
    let title = await page.title();
    expect(title).not.toContain('error');
})


/**
 * Screenshot based assertions
 */
test('screenshot assertations', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let header = page.getByRole('heading', {name: 'Returning Customer'});
    await expect(header).toHaveScreenshot('header.png')
})

test('url and titile assertions', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login');
    await expect(page).toHaveURL(/.*account\/login.*/);
    await page.pause(); //it will pause the page and not close after execution
    
})

/**
 * this url is no longer existing
 */
test('element is visible, disabled assertions', async ({page}) => {
    await page.goto('https://classic.freecrm.com/register');
    
    let checkBox = page.getByLabel('I agree with the Terms and Conditions')
    let submitBtn = page.getByRole('button', {name: 'SUBMIT'});
    
    await expect(checkBox).toBeChecked();
    await expect(submitBtn).toBeDisabled();
    await expect(submitBtn).toBeVisible();
    
    await checkBox.check();
    await expect(checkBox).toBeChecked();
    await expect(submitBtn).toBeEnabled();
    await expect(submitBtn).toBeVisible();
})

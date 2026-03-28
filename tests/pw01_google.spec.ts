//1. approach => with test() block
import { test, expect, APIResponse } from "@playwright/test";

test('check page title', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.waitForTimeout(2000);
  const title: string = await page.title();
  console.log('page title: ' + title);
});

test('check page url', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page.waitForTimeout(2000);
  const url: string = page.url();
  console.log('page url: ' + url);
});

test('check page logo', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  console.log(await page.getByTitle('naveenopencart').count());
  await page.waitForTimeout(2000);
  expect(await page.getByTitle('naveenopencart').count()).toBe(2);
}); 


// test("check page title", async ({ page, request }) => {
//   await page.goto(
//     "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
//   );

//   let title: string = await page.title();
//   console.log(`the page title is : ${title}`);
//   // expect(title).toBe('Google');

//   let response: APIResponse = await request.get("https://gorest.co.in/public/v2/users");
//   console.log(response.status());
//   console.log(response.statusText());
//   console.log(await response.body());
//   console.log(response.json());

// });
import { test, expect, Page, Locator } from "@playwright/test";

test("element is visible, disabled assertions", async ({ page }) => {
  await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html",{ waitUntil: "load" },);
  
  await page.locator("#datepicker").click();
  // check the current month Year
  await page.waitForTimeout(2000);
  
  let currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();
  console.log(currentMonthYear);

  let expectMonthYear = "July 2029";
  
  while (true) {
    if (currentMonthYear?.replace(/\s+/g, ' ') === expectMonthYear) {
      await page.getByText("7", { exact: true }).click();
      break;
    }
    // click on next month
    await page.locator(`span:has-text("Next")`).click();

    currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();
    console.log(currentMonthYear);
}
  await page.pause();
});

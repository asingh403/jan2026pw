import { test, expect, Page, Locator } from "@playwright/test";

test("select India rows", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/",{waitUntil: 'load'});

  const targetStr = "Russia";
  while (true) {
    let rows:Locator = page.locator(`//table[@id='tablepress-1']//tr[.//td[text()='${targetStr}']]`,);

    let count = await rows.count();
    console.log(' total count found : '+ count);

    for (let i = 0; i < count; i++) {
      await rows.nth(i).locator(`input[type='checkbox']`).click();
    }

    let next:Locator = page.getByRole("link", { name: "Next" });
    let classAttr:string | null = await next.getAttribute("class");

    // if (classAttr?.includes("disabled")) {
    if (await next.isDisabled()) {
      console.log("Pagination is over...");
      break;
    }
    await next.click();
    await page.waitForTimeout(2000);
    test.setTimeout(60000);
  }
  await page.pause();
});

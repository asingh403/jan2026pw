import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  let rightPanelLinks: string[] = await page
    .locator("a.list-group-item")
    .allInnerTexts();
  console.log(rightPanelLinks.length);
  console.log(rightPanelLinks);

  rightPanelLinks.forEach((a) => console.log(a));

  console.log('***********');
  console.log('            ');
  for(let e of rightPanelLinks){
    if(e === 'My Account'){
        console.log(await page.getByText(e).click());
    }
  }



})();

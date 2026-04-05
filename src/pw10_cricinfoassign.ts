import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  
  let page: Page = await browser.newPage();
  let name: string[] = ["Jordan.Mathews","Kevin.Mathews","Joe.Root","Garry.White"];
  let followingName = 'Jasmine.Morgan';

  let teamName:string = 'Karachi Kings';
  let url:string = 'https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/points-table-standings';
  await page.goto(url);

  // another xpath => '//span[text()='Karachi Kings']/../../../following-sibling::td'
  let psl:string[] = await page.locator(`//span[text()='${teamName}']/ancestor::td/following-sibling::td`).allInnerTexts();
  console.log(psl);


})();
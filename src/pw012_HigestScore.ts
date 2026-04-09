import { Browser, chromium, FrameLocator, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();

  await page.goto('https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/karachi-kings-vs-peshawar-zalmi-17th-match-1527568/full-scorecard', {waitUntil: "load"});

  let allScores:string[] = 
        await page
        .locator(`//span[text()= 'Peshawar Zalmi']/ancestor::div[contains(@class, 'ds-bg-color-primary-bg ds-p-3')]/following-sibling::div/table[contains(@class, 'ci-scorecard-table')]//tr/td[3]`)
        .allInnerTexts();

    console.log(allScores);

    let allScoreVal:number[] = [];
    for(let i=0; i<allScores.length-2; i++){
        allScoreVal.push(Number(allScores[i]));
    }

    // console.log('Before Sorting : '+allScoreVal);
    allScoreVal.sort((a, b) => a - b);
    console.log('After Sorting : '+allScoreVal);
    console.log('Higest score is : '+ allScoreVal[allScoreVal.length-1]);







})();
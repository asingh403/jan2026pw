import { Browser, chromium, Locator, Page, webkit } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });
  let page: Page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  
  //Print all the footer link in Json format
//   let rightPanelLinks: string[] = await page.locator("a.list-group-item").allInnerTexts();
//   console.log(rightPanelLinks.length);
//   console.log(rightPanelLinks);

//   rightPanelLinks.forEach((a) => console.log(a));

//   console.log('***********');
//   console.log('            ');
//   for(let e of rightPanelLinks){
//     console.log(JSON.stringify(e));
//     if(e === 'Forgotten Password'){
//         console.log(await page.getByText(e).first().click());
//         break;
//     }
//   }

//   capture the footer links
//   console.log('***********');
//   console.log('            ');
  let footerLinks:Locator[] = await page.locator('footer a').all();


//   for(let i=0; i<footerLinks.length; i++){
//     console.log(i+ " "+ (await footerLinks[i].innerText()).trim());
//   }

//   for(let e in footerLinks){
//     console.log(await footerLinks[e].innerText());
//   }

  let allFooterLinks = [];
  for(let i of footerLinks){
   let linkText:string =await i.innerText();
   allFooterLinks.push(linkText);
  }

  allFooterLinks.forEach(e => console.log(e));


})();

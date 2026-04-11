import {Browser,BrowserContext,chromium,expect,FrameLocator,Locator,Page,webkit,} from "@playwright/test";

let page: Page;

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome".toLowerCase(),
  });

  let context: BrowserContext = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });

  page = await context.newPage();
  page.goto("https://practice.expandtesting.com/upload");

  // to upload the file type="file" should be there in html

  //below method for to attach the file first
  await page.locator("#fileInput").setInputFiles("/Users/ashutoshsingh/Desktop/Latex-Resume-Code");

  //upload the file after click on Submit btn
  await page.locator("#fileSubmit").click();

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php", {waitUntil: "load"});
  await page.locator("#filesToUpload").setInputFiles([
      "/Users/ashutoshsingh/Desktop/Latex-Resume-Code",
      "/Users/ashutoshsingh/Desktop/index.html",
      "/Users/ashutoshsingh/Desktop/Screenshot 2026-03-28 at 13.56.10.png",
    ]);

  await page.waitForTimeout(2000);

  //you can create file on the fly without having them in your local machine/workspace
  //it is useful for test where you don't want to maintain the files in your locals...

    await page.goto("https://practice.expandtesting.com/upload", {
    waitUntil: "load",
  });
  await page.locator("#fileInput").setInputFiles([
    {
      name: "test_resume.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("ashu resume for test automation"),
    },
  ]);
  await page.locator("#fileSubmit").click();

  console.log("file upload on the fly successful");


  //Multiple file upload on the fly
  await page.waitForTimeout(2000);
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php", {waitUntil: "load"});
  await page.locator("#filesToUpload").setInputFiles([
    {
      name: "test_resume.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("ashu resume for test automation"),
    },

    {
      name: "drawio.png",
      mimeType: "image/png",
      buffer: Buffer.from(""),
    },
  ]);
  await page.locator("#fileSubmit").click();

  console.log("file upload on the fly successful");
})();

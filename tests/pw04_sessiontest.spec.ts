import {test, expect,APIResponse,chromium,Browser,BrowserContext,Page,Locator} from "@playwright/test";

test.use({storageState: 'auth/session.json'});
test("navigate to cart page without login", async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
  
  await page.waitForTimeout(5000);
  
});

//ideal use case
//Session ID, cookies, tokenID,
//JWT, tokenId, sessionId

//Won't work
// otp
//oauth2.0, 2FA, MFA, ReCaptcha
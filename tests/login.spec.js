const { test, expect } = require('@playwright/test');

test('my flow', async ({ page }) => {

  // 1. Open page
 await page.goto('https://leofame.com/free-instagram-views');
await page.waitForLoadState('networkidle');
const title = page.locator('h1.title-name');
  if (await title.count() > 0) {
  console.log("Title found");
}else{
     console.log("Title not found");
  }
  const input = page.locator('input[name="free_link"]');
try {
  await page.waitForSelector('input[name="free_link"]', { timeout: 5000 });
  await page.fill('input[name="free_link"]', 'https://example.com');
} catch {
  console.log("Input field not available");
}
  // 3. Click button
  await page.click('button:has-text("Get free Views")');

  // 4. Wait 90 seconds
  await page.waitForTimeout(90000);

  // 5. Wait for popup or modal
  const popup = page.locator('.popup, .modal');

  await expect(popup).toBeVisible({ timeout: 10000 });

});

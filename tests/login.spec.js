const { test, expect } = require('@playwright/test');

test('my flow', async ({ page }) => {

  // 1. Open page
  await page.goto('https://leofame.com/free-instagram-views');

  const input = page.locator('input[name="free_link"]');

if (await input.count() > 0) {
  console.log("Input field found");
  await input.fill('https://www.instagram.com/reel/DVyr1NgDFiZ/');
} else {
  console.log("Input field not found");
}
  // 3. Click button
  await page.click('button:has-text("Get free Views")');

  // 4. Wait 90 seconds
  await page.waitForTimeout(90000);

  // 5. Wait for popup or modal
  const popup = page.locator('.popup, .modal');

  await expect(popup).toBeVisible({ timeout: 10000 });

});

const { test, expect } = require('@playwright/test');

test('my flow', async ({ page }) => {

  // 1. Open page
  await page.goto('https://leofame.com/free-instagram-views');

  // 2. Enter URL into input box
  await page.fill('input[name="free_link"]', 'https://www.instagram.com/reel/DVyr1NgDFiZ/?igsh=MTlhc2Z2MjhjMjN0ZA==');

  // 3. Click button
  await page.click('button:has-text("Get free Views")');

  // 4. Wait 90 seconds
  await page.waitForTimeout(90000);

  // 5. Wait for popup or modal
  const popup = page.locator('.popup, .modal');

  await expect(popup).toBeVisible({ timeout: 10000 });

});

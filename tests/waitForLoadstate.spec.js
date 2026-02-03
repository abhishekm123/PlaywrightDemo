const {test, expect} = require('@playwright/test');

test('wait for load state before interacting', async ({ page }) => {
  
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByText("New user? Signup").click();
   const checkboxCount = await page.locator("//input[@type='checkbox']").count();
   console.log(`Number of checkboxes: ${checkboxCount}`);
   await page.waitForLoadState('networkidle');
   expect(checkboxCount).toBe(6);

  });
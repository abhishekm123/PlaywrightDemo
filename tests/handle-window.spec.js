import {test} from '@playwright/test';

test('working with multiple windows', async ({browser}) => {
  // Navigate to the page that triggers an alert

 const context=  await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://freelance-learn-automation.vercel.app/login'); 
  const [newPage] = await Promise.all([
       context.waitForEvent('page'),
       page.locator("(//a[contains(@href,'facebook.com')])[1]").click()
  ]);

  
  await newPage.locator("(//input[@name='email'])[1]").fill('test@example.com');

 
  await newPage.close();

  await page.locator("#email1").fill('admin@email.com');
  
});
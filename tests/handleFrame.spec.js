import {test,expect} from '@playwright/test';

test('Handle Alert Test', async ({page}) => {
  // Navigate to the page that triggers an alert
  await page.goto('https://docs.oracle.com/javase/8/docs/api/');

  const ifram= await page.frameLocator('//frame[@name="packageListFrame"]');
   console.log(ifram);

  await ifram.locator('//a[text()="java.applet"]').click();

  await page.pause();


});
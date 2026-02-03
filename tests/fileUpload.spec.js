const {test, expect} = require('@playwright/test');

test('File Upload Test', async function ({page}) { 


    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator("#file-upload").setInputFiles('./upload/WIN_20240519_13_38_40_Pro.jpg');

   await page.locator('#file-submit').click();
 expect( await page.getByText('File Uploaded!')).toHaveText('File Uploaded!');
})
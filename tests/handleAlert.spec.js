import {test,expect} from '@playwright/test';

test.skip('Handle Alert Test', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.on('dialog',async(d)=>{

    expect(d.type()).toContain('alert');

    expect(d.message()).toContain('I am a JS Alert');

    await d.accept();


});

  await page.getByText('Click for JS Alert').click();
});
test.skip('confirm Alert Test', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.on('dialog',async(dialogWindow)=>{

    expect(dialogWindow.type()).toContain('confirm');

    expect(dialogWindow.message()).toContain('I am a JS Confirm');
    
   // await dialogWindow.accept();
    await dialogWindow.dismiss();


});

  await page.getByText('Click for JS Confirm').click();
});

test('Handle Prompt Alert Test', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.on('dialog',async(dialogWindow)=>{

    expect(dialogWindow.type()).toContain('prompt');

    expect(dialogWindow.message()).toContain('I am a JS prompt');

    await dialogWindow.accept('Playwright Prompt Test');
    
   // await dialogWindow.accept();
    //await dialogWindow.dismiss();


})

  await page.getByText('Click for JS Prompt').click();
  await page.waitForTimeout(5000);
});
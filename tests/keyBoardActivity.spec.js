const{test,expect} = require('@playwright/test');
test('Keyboard Activity Test', async function({page}){
await page.goto("https://www.google.com/");
await page.locator("textarea[name='q']").focus()
await page.type("Playwright Automation");
await page.keyboard.press('ArrowLeft');
await page.keyboard.down('Shift');
for(let i= 0; i<'automation'.length; i++){
    await page.keyboard.press('ArrowLeft');
}
await page.keyboard.up('Shift');
await page.keyboard.press('Backspace');


// await page.locator("textarea[name='q']").type("Playwright Automation");
// await page.keyboard.press('Control+A');
// await page.keyboard.press('Control+c');

// await page.keyboard.press('backspace');
// await page.keyboard.press('Control+v');

// //await page.keyboard.press("Enter");
// await page.waitForTimeout(2000);


})
    

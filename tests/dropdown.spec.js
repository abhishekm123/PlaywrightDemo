const{test,expect} = require('@playwright/test');

test('select value from dropdown', async function({page}){

await page.goto("https://freelance-learn-automation.vercel.app/signup");

await page.locator("#state").selectOption({label:"Goa"})

await page.waitForTimeout(1000);

await page.locator("#state").selectOption({value:"Madhya Pradesh"})
await page.waitForTimeout(1000);


/*await page.locator("#state").selectOption({index:3})
await page.waitForTimeout(1000);

const value = await page.locator("#state").textContent();

console.log(value);

await expect(value.includes("Kerala")).toBeTruthy();*/

let state = await page.$("#state");
let allElements = await state.$$("option");

for(let i=0; i<allElements.length; i++){
let element= allElements[i];
let value = await element.textContent();
console.log(value);

if(value.includes("Kerala")){
    ddstatuse = true;

}
}

});
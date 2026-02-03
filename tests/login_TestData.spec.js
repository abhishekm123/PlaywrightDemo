const { test, expect } = require('@playwright/test');

const testData = JSON.parse(JSON.stringify(require("../testLogin.json")));

test.describe("Data driven Login Test", function (){

    for(const data of testData){

        test.describe(`Login tests for ${data.id}`, function (){
            test("Valid Login", async function({page})
            {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill(data.username,{delay:200});

    await page.locator("input[name='password']").fill(data.password,{delay:100});

});

        })
    }

// test('Login with test data', async({page}) => {

// await page.goto("https://freelance-learn-automation.vercel.app/login");
// await page.getByPlaceholder("Enter Email").fill(testData.username);
// await page.getByLabel("Password").fill("admin123");
})
    

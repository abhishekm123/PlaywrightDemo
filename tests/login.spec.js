const{test, expect} = require('@playwright/test');

test.use({viewport:{width:1000, height:826}});
test("Valid Login", async function({page}){

    
    

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").type("Admin",{delay:200});

    await page.locator("input[name='password']").fill("admin123",{delay:100});

    //await page.waitForTimeout(3000);

    await page.locator("button[type='submit']").click();

    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click();

    //await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);
    
})
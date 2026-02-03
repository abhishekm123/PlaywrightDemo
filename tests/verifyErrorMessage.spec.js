const{test,expect} =  require('@playwright/test');

test("Verify Error Message", async function({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

console.log(await page.viewportSize().width);
console.log(await page.viewportSize().height);

await page.getByPlaceholder("Username").type("Admin");

    await page.locator("input[name='password']").type("admin123456",{delay:100});

    //await page.waitForTimeout(3000);

    await page.locator("button[type='submit']").click();

    const errorMessage = await page.locator(".oxd-alert-content-text").textContent();

    console.log("Error Message is:", errorMessage);
await expect(errorMessage.includes("Invalid")).toBeTruthy();
await expect(errorMessage==="Invalid credentials").toBeTruthy();

})
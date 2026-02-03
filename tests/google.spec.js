const{test,expect} = require('@playwright/test');
const { log } = require('node:console');

test("google test", async function({page}) {
    await page.goto("https://google.com");
      const url = await page.url();
      console.log("Current URL:", url);
      const title = await page.title();

    console.log("page title is:", title)
    expect(title).toHaveTitle("Google");
        
    });
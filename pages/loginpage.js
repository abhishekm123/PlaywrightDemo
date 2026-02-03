// ✅ Keep a single Playwright import (CommonJS style to match your tests)
const { expect } = require("@playwright/test");

class loginpage{


    constructor(page){

        this.page = page
        this.username="//input[@name='username']"
        this.password= "//input[@name='password']"
        this.loginButton= "//button[@type='submit']"
        this.header= "/h5[text()=''Login]"
    }
 async verifyHeader(){
    await this.page.waitForSelector(this.header);

  expect(this.page.locator(this.header)).toBeVisible();

 }

    async loginApplication(username){

        await this.page.fill(this.username);
        await this.page.fill(this.password)
        await this.page.click(this.loginButton)

    }
}

module.exports= loginpage;
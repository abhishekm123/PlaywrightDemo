const{expect} = require('@playwright/test')


class homepage{
    constructor(page)
    {
        this.page= page;
        this.menu = "//p[text()='manda user']";
        this.logOutBtn = "//a[text()='Logout']";
    }

    async verifyUsername(){

        await this.page.waitForSelector(this.menu);
        expect(this.page.locator(this.menu)).toBeVisible();

    }

async logOutFromAppilication(){
 await this.page.click(this.menu);
 await this.page.click(this.logOutBtn);

}

}
module.exports= homepage;
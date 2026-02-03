const {test,expect}=  require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const HomePage = require('../pages/homepage');

test('login', async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const loginPage= new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.loginApplication("Admin","admin123");
  await homePage.verifyUsername();

    await homePage.logOutFromAppilication();
    await loginPage.verifyHeader();
})
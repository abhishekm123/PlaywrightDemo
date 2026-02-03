const {expect,test} = require('@playwright/test');

test('Mouse Hover', async function({page}){

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByPlaceholder('Enter Email').type('admin@email.com');
    await page.getByPlaceholder('Enter Password').type('admin@123');
    await page.getByRole('button', {name: 'Sign in'}).click();
    await page.getByText('Manage').hover();
    await page.locator('//a[normalize-space()="Manage Courses"]').click();

})
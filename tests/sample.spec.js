const{test,expect}= require('@playwright/test')

test("My first  test", async function({page}){
expect(10).toBe(10);

})

test.skip("My second test", async function ({page}) {
    expect(10).toBe(12);

})

test("My Third test", async function ({page}) {
    expect(100).toBe(100);

})
test("My Fourth test", async function ({page}) {
    expect("Abhishek Mishra").toContain("Abhishek");  
    expect(true).toBeTruthy();          
})
test("My Fifth test", async function ({page}) {
    
    expect(false).toBeFalsy();          
})

test("My Sixth test", async function ({page}) {
    
    expect("Abhishek Mishra".includes("Mishra")).toBeTruthy();          
})
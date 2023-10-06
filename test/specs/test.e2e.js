const locator=require('../../pages/LoginLocator')
const ElementActions=require('../../utilities/ElementActions')
describe('login page feature test', async()=>{
    beforeEach( async() => {
        console.log("Test is Started")
        await browser.url('https://automationexercise.com/login')
        await browser.maximizeWindow()
    });
    afterEach( async() => {
        console.log("Test is completed")
    });
    it('verify login 1', async()=>{
        ElementActions.doEnterValue(locator.EmailAddress,"tania@gmail.com")
        ElementActions.doEnterValue(locator.Password,"@tania12")
        await browser.pause(1000)
        ElementActions.doClick(locator.btnLogin)
        ElementActions.doClick(locator.btnlogout)
        await browser.pause(5000)
    })
    it('verify login 2', async()=>{
        ElementActions.doEnterValue(locator.EmailAddress,"tania@gmail.com")
        ElementActions.doEnterValue(locator.Password,"@tania12")
        await browser.pause(1000)
        ElementActions.doClick(locator.btnLogin)
        ElementActions.doClick(locator.btnlogout)
        await browser.pause(5000)
    })
 
})
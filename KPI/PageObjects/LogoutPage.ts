import { ProtractorBrowser, browser, by } from "protractor";

export class LogoutPage{
    userAccount_btn: string
    logOut_btn: string
    logoutSuccess_msg: string

    constructor(browser: ProtractorBrowser){
        this.userAccount_btn = "//span[@ng-click='clickToShowSelectRole()']"
        this.logOut_btn = "//a[@ng-click='logOut()']"
        this.logoutSuccess_msg = "//legend[text()='Login']"
    }

    async logoutPage(){
        await browser.element(by.xpath(this.userAccount_btn)).click()
        await browser.sleep(2000)
        await browser.element(by.xpath(this.logOut_btn)).click()
        await browser.sleep(2000)
    }
    
    async logoutSuccess(){
        await expect(browser.element(by.xpath(this.logoutSuccess_msg)).isDisplayed()).toBe(true)
        await browser.sleep(5000)
    }
}
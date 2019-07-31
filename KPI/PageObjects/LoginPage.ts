import {ProtractorBrowser, browser, by, ExpectedConditions} from "protractor"
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
export class LoginPage{
    userName: string
    passWord: string
    logIn_btn: string
    loginSuccess_msg: string
    loginWithoutUsername_msg: string
    loginWithoutPassword_msg: string
    userAccount_btn: string
    fullName: string

    constructor(browser: ProtractorBrowser){
        this.userName = "//input[@name='username']"
        this.passWord = "//input[@name='password']"
        this.logIn_btn = "//input[@value='Log in']"
        this.loginSuccess_msg = "//div[text()='KPI Tool']"
        this.loginWithoutUsername_msg = "//span[contains(text(), 'Username is required')]"
        this.loginWithoutPassword_msg = "//span[contains(text(), 'Password is required')]"
        this.userAccount_btn = "//span[@ng-click='clickToShowSelectRole()']"
        this.fullName = "//div[@class='fullname ng-binding']"
    }

    async loginPage(username, password){
        console.log("Input username: " + username)
        await browser.element(by.xpath(this.userName)).sendKeys(username)
        console.log("Input password: " + password)
        await browser.element(by.xpath(this.passWord)).sendKeys(password)
        await browser.sleep(2000)
        await browser.element(by.xpath(this.logIn_btn)).click()
        await browser.sleep(2000)
    }
    async loginSuccess(){
        await expect(browser.element(by.xpath(this.loginSuccess_msg)).isDisplayed()).toBe(true)
        await browser.sleep(5000)
    }
    async loginWithoutUsername(){
        await expect(browser.element(by.xpath(this.loginWithoutUsername_msg)).isDisplayed()).toBe(true)
    }

    async loginWithoutPassword(){
        await expect(browser.element(by.xpath(this.loginWithoutPassword_msg)).isDisplayed()).toBe(true)
    }
    
    async loginWithIncorrectUsername(text){
        await browser.wait(ExpectedConditions.alertIsPresent(), 20000, "Alert is not shown in page")
        let alert = browser.switchTo().alert()
        let alertText = alert.getText()
        await expect(alertText).toContain(text)
        await browser.sleep(2000)
        await alert.accept()
    }

    async VerifyProfileName(fullname: string){
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.userAccount_btn)
        let fn = actionSupport.getElementText(this.fullName)
        await expect(fn).toContain(fullname)
    }
}
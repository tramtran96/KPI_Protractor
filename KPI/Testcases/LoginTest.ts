import { LoginPage } from "../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { LogoutPage } from "../PageObjects/LogoutPage";

describe("Login Page ", function(){
    let loginPage: LoginPage
    let logoutPage: LogoutPage

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        logoutPage = new LogoutPage(browser)

        await browser.manage().window().maximize()
        await browser.get("http://10.1.0.62/kpi/#/")
    })

    it("Login successfully", async function(){
        let username = "tttoai"
        let password = "1234"
        await loginPage.loginPage(username, password)
        await loginPage.loginSuccess()
        await logoutPage.logoutPage()
        await logoutPage.logoutSuccess()
    })
    
    it("Login with username field is blank", async function(){
        let username = ""
        let password = "1234"
        await loginPage.loginPage(username, password)
        await loginPage.loginWithoutUsername()
        await browser.sleep(5000)
    })

    it("Login with password field is blank", async function(){
        let username = "tttoai"
        let password = ""
        await loginPage.loginPage(username, password)
        await loginPage.loginWithoutPassword()
        await browser.sleep(5000)
    })

    it("Login with incorrect username", async function(){
        let username = "ttmaitram"
        let password = "1234"
        await loginPage.loginPage(username, password)
        await loginPage.loginWithIncorrectUsername("Invalid User")
        await browser.sleep(5000)
    })

    fit("Login to KPI Dashboard successfully", async function(){
        let titlepage = "//div[text()='Reports']"
        
        //automate each step
        await loginPage.loginPage("tpphuoc", "1234")
       
        //verify result
        await loginPage.VerifyProfileName("TRẦN PHÚ PHƯỚC")
    })
})
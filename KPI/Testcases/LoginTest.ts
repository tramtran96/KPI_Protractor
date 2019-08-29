import { LoginPage } from "../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { LogoutPage } from "../PageObjects/LogoutPage";
import {dataBuilder} from "../core_function/dataBuilder";

describe("Login Page ", function(){
    let loginPage: LoginPage
    let logoutPage: LogoutPage
    let dataArray:Array<Map<string,string>>

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        logoutPage = new LogoutPage(browser)

        await browser.manage().window().maximize()
        await browser.get("http://10.1.0.62/kpi/#/")
    })

    it("Login logout", async function(){
        console.log("STEP 1: Login with valid username and password")
        dataArray = await dataBuilder.readExcel(__dirname + "\\..\\TestData\\Login.xlsx", "Login", "TC01")
        let email=dataArray[0].get("Email")
        let password=dataArray[0].get("Password")
        await loginPage.loginPage(email, password)
        await loginPage.loginSuccess()
        console.log("STEP 2: Logout")
        await logoutPage.logoutPage()
        await logoutPage.logoutSuccess()
    })
    
    it("Login with username field is blank", async function(){
        dataArray = await dataBuilder.readExcel(__dirname + "\\..\\TestData\\Login.xlsx", "Login", "TC02")
        let email=dataArray[0].get("Email")
        let password=dataArray[0].get("Password")
        await loginPage.loginPage(email, password)
        await loginPage.loginWithoutUsername()
    })

    it("Login with password field is blank", async function(){
        dataArray = await dataBuilder.readExcel(__dirname + "\\..\\TestData\\Login.xlsx", "Login", "TC03")
        let email=dataArray[0].get("Email")
        let password=dataArray[0].get("Password")
        await loginPage.loginPage(email, password)
        await loginPage.loginWithoutPassword()
    })

    it("Login with incorrect username", async function(){
        dataArray = await dataBuilder.readExcel(__dirname + "\\..\\TestData\\Login.xlsx", "Login", "TC04")
        let email=dataArray[0].get("Email")
        let password=dataArray[0].get("Password")
        await loginPage.loginPage(email, password)
        await loginPage.loginWithIncorrectUsername("Invalid User")
    })
})
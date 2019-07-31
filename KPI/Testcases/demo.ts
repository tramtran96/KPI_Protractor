import { browser, by, ExpectedConditions } from "protractor";
import { async } from "q";

describe("demo", function(){
    beforeEach(async function () {
        await browser.manage().window().maximize()
        await browser.get("http://10.1.0.62/kpi/#/login")
    })
    it("login", async function () {
        let username = browser.element(by.xpath("//input[@name='username']"))
        let password = browser.element(by.xpath("//input[@name='password']"))
        let login = browser.element(by.xpath("//input[@value='Log in']"))
        let ex = browser.element(by.xpath("//div[@class='fullname ng-binding']"))
        let click = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='Schedule']//following-sibling::div[4]//button[@ng-click='changeChooseKPIStatus(weekReport, kpi, $event)']"))
        let ckick1 = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='Schedule']//following-sibling::div[4]//button[@ng-click='addNewIssue(weekReport,kpi)']")).click()
        await username.sendKeys("tttoai")
        await password.sendKeys("123")
        await login.click()
        await browser.sleep(3000)
        let userAccount_btn = browser.element(by.xpath("//span[@ng-click='clickToShowSelectRole()']"))
        await userAccount_btn.click()
        await browser.sleep(5000)
        await expect(ex.getText()).toContain("TRƯƠNG")
        await browser.sleep(5000)

    })

})
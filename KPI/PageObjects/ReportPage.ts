import { ProtractorBrowser, browser, by, ExpectedConditions, element, Key } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { async } from "q";

export class ReportPage {
    //Status
    status_red: string
    status_green: string
    status_yellow: string
    //Business opportunity
    addNewOpport_btn: string
    deleteOpport_btn: string
    customerName: string
    status: string
    requirement: string
    resourcedNeeded: string
    possibilityPreparation: string
    //Frame
    frame_improve: string
    frame_projectHighlight: string
    frame_otherActivities: string
    //Model
    addAndClose_btn: string
    addAndContrinue_btn: string
    cancel_btn: string
    model: string
    modelTitle: string
    modelDescription: string
    modelAction: string
    addSuccess_msg: string
    resolve_btn: string
    //Report submit
    reportSubmit_btn_Cur: string
    reportSubmit_btn_Prev: string
    reportResubmit_btn_Cur: string
    reportResubmit_btn_Prev: string
    reportSubmit_msg: string
    //
    startDate: string
    endDate: string
    apply: string
    applyStartDateSuccess: string
    applyEndDateSuccess: string
    addIssue_btn: string
    addComment_btn: string
    // Delete business opportunity
    deleteCustomer_msg: string
    deleteOK_btn: string
    deleteCancel_btn: string
    //Select current role
    userAccount_btn: string
    selectRole_btn: string
    projectHeadRole_btn: string

    constructor(browser: ProtractorBrowser) {
        this.modelDescription = "//textarea[@ng-model='description']"
        this.modelTitle = "//input[@ng-model='title']"
        this.modelAction = "//textarea[@ng-model='action']"
        this.resolve_btn = "//span[text()='Resolved']"
        this.model = "//div[contains(text(),'Add New Issue / Comment')]"

        this.status_red = "//div[contains(@class,'color-item ng-scope bg-red')]"
        this.status_green = "//div[contains(@class,'color-item ng-scope bg-green')]"
        this.status_yellow = "//div[contains(@class,'color-item ng-scope bg-yellow')]"
        this.frame_improve = "//div[text()='Improvements /Initiatives']//following-sibling::div[1]//div//div//div//div//iframe"
        this.frame_projectHighlight = "//div[text()='Project Highlight']//following-sibling::div[1]//div//div//div//div//iframe"
        this.frame_otherActivities = "//div[text()='Other Activities']//following-sibling::div[1]//div//div//div//div//iframe"
        this.addAndClose_btn = "//button[contains(text(),'Add & Close')]"
        this.addAndContrinue_btn = "//button[contains(text(),'Add & Continue')]"
        this.cancel_btn = "//button[contains(text(),'Cancel')]"
        this.model = "//div[text()='Add New Issue / Comment']"
        this.addSuccess_msg = "//span[contains(text(),'Added the comment successfully')]"
        this.reportSubmit_msg = "//span[contains(text(),'Your report has been submitted!')]"
        this.reportSubmit_btn_Cur = "//div[text()='Project’s KPI']//following-sibling::div[4]//button[text()='Submit']"
        this.reportSubmit_btn_Prev = "//div[text()='Project’s KPI']//following-sibling::div[3]//button[text()='Submit']"
        this.reportResubmit_btn_Cur = "//div[text()='Project’s KPI']//following-sibling::div[4]//span[text()='Resubmit']"
        this.reportResubmit_btn_Prev = "//div[text()='Project’s KPI']//following-sibling::div[3]//span[text()='Resubmit']"
        this.addNewOpport_btn = "//button[text()='Add New Opportunity']"
        this.customerName = "//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][2]//input[@ng-model='businessHighlight.CustomerName']"
        this.status = "//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][2]//input[@ng-model='businessHighlight.Status']"
        this.requirement = "//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][2]//textarea[@ng-model='businessHighlight.Requirement']"
        this.resourcedNeeded = "//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][2]//input[@ng-model='businessHighlight.ResourcedNeeded']"
        this.possibilityPreparation = "//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][2]//textarea[@ng-model='businessHighlight.PossibilityHighlightName']"
        this.startDate = "//input[@ng-model='dateWeekNumber.startDate']"
        this.endDate = "//input[@ng-model='dateWeekNumber.endDate']"
        this.apply = "//button[@ng-click='applyReport()']"
        this.applyStartDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][1]//div[1]//div[1]"
        this.applyEndDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][4]//div[1]//div[1]"
        this.addIssue_btn = "//label[@for='type-issue']"
        this.addComment_btn = "//label[@for='type-comment']"
        // Delete business opportunity
        this.deleteCustomer_msg = "//div[contains(text(),'Delete Business opportunity')]"
        this.deleteOK_btn = "//button[@data-ng-click='modalOptions.ok();']"
        this.deleteCancel_btn = "//button[@data-ng-click='modalOptions.close()']"
        //Select current role
        this.userAccount_btn = "//span[@ng-click='clickToShowSelectRole()']"
        this.selectRole_btn = "//div[@class='select-option']"
        this.projectHeadRole_btn = "//li[contains(text(),'Project Head')]"
    }

    selectStatus_btn(select) {
        let cur = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='" + select + "']//following-sibling::div[4]//button[@ng-click='changeChooseKPIStatus(weekReport, kpi, $event)']"))
        let prev = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='" + select + "']//following-sibling::div[3]//button[@ng-click='changeChooseKPIStatus(weekReport, kpi, $event)']"))
        
        let obj = {
            curval: cur,
            prevval: prev
        }
        return obj;
    }

    selectComment_btn(select) {
        let cur = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='" + select + "']//following-sibling::div[4]//button[@ng-click='addNewIssue(weekReport,kpi)']"))
        let prev = browser.element(by.xpath("//div[@class='row-item row-kpi d-flex justify-content-start align-items-center ng-scope']//div[text()='" + select + "']//following-sibling::div[3]//button[@ng-click='addNewIssue(weekReport,kpi)']"))
        let obj = {
            curval: cur,
            prevval: prev
        }
        return obj;
    }

    async addIssue()
    { 
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.addIssue_btn)
        await browser.sleep(2000)
    }

    async addComment()
    {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.addComment_btn)
    }

    async selectCurrentRole(){
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.userAccount_btn)
        await actionSupport.clickOnElement(this.selectRole_btn)
        await actionSupport.clickOnElement(this.projectHeadRole_btn)
    }

    async statusGreen() {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.status_green)
    }

    async statusRed() {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.status_red)
    }

    async statusYellow() {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.status_yellow)
    }

    async commentModel(title, description) {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.sendKeysOnElement(this.modelTitle, title)
        await actionSupport.sendKeysOnElement(this.modelDescription, description)
        await browser.sleep(2000)
    }

    async issueModel(title, description, action) {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.sendKeysOnElement(this.modelTitle, title)
        await actionSupport.sendKeysOnElement(this.modelDescription, description)
        await actionSupport.sendKeysOnElement(this.modelAction, action)
        await browser.sleep(2000)
    }

    async clickResolvedIssue() {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.resolve_btn)
    }

    async addAndClose() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.addSuccess_msg))
        await actionSupport.clickOnElement(this.addAndClose_btn)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(false)
    }

    async addAndContinue() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.addSuccess_msg))
        await actionSupport.clickOnElement(this.addAndContrinue_btn)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 1000, message.locator())).toBe(true)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(true)
        await browser.sleep(5000)
    }

    async cancel() {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.cancel_btn)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(false)
        await browser.sleep(5000)
    }

    async businessOpportunity(customername, status, require, resource, possibility) {
        let actionSupport = new ActionSupport(browser)
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()   
        await actionSupport.clickOnElement(this.addNewOpport_btn)
        await actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ (count + 1) +"]//input[@ng-model='businessHighlight.CustomerName']", customername)
        await browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ (count + 1) +"]//input[@ng-model='businessHighlight.Status']")).sendKeys(status)
        await browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ (count + 1) +"]//textarea[@ng-model='businessHighlight.Requirement']")).sendKeys(require)
        await browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ (count + 1) +"]//input[@ng-model='businessHighlight.ResourcedNeeded']")).sendKeys(resource)
        await browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ (count + 1) +"]//textarea[@ng-model='businessHighlight.PossibilityHighlightName']")).sendKeys(possibility)
    }

    async deleteBusinessOpportunity_btn(row){
        let deleted = browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ row + "]//button[@ng-click='deleteBusinessopportunity(highlight, businessHighlight)']")).click()
    }

    async deleteWarning(){
        await expect(browser.element(by.xpath(this.deleteCustomer_msg)).isDisplayed()).toBe(true)
    }

    async deleteClickOK(){
        
        await browser.element(by.xpath(this.deleteOK_btn)).click()
        await browser.sleep(2000)
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()  
        let deleted = browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos']["+ count + "]//button[@ng-click='deleteBusinessopportunity(highlight, businessHighlight)']")) 
        //await expect(deleted.isPresent()).toBe(false)
        console.log(count)

    }

    async deleteClickCancel(){
        await browser.element(by.xpath(this.deleteCancel_btn)).click()
    }

    async improveComment(text) {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.frame_improve)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_improve)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await browser.switchTo().defaultContent()
        await browser.sleep(2000)
    }

    async projectHighlightComment(text) {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.frame_projectHighlight)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_projectHighlight)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await browser.switchTo().defaultContent()
        await browser.sleep(2000)
    }

    async otherActivitiesComment(text) {
        let actionSupport = new ActionSupport(browser)
        await actionSupport.clickOnElement(this.frame_otherActivities)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_otherActivities)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await browser.switchTo().defaultContent()
        await browser.sleep(2000)
    }

    async reportSubmitCur() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await actionSupport.clickOnElement(this.reportSubmit_btn_Cur)
        await browser.sleep(2000)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 1000, message.locator())).toBe(true)
    }

    async reportSubmitPrev() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await actionSupport.clickOnElement(this.reportSubmit_btn_Prev)
        await browser.sleep(2000)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 1000, message.locator())).toBe(true)
    }

    async reportResubmitCur() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await actionSupport.clickOnElement(this.reportResubmit_btn_Cur)
        await browser.sleep(2000)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 1000, message.locator())).toBe(true)
    }

    async reportResubmitPrev() {
        let actionSupport = new ActionSupport(browser)
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await actionSupport.clickOnElement(this.reportResubmit_btn_Prev)
        await browser.sleep(2000)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 1000, message.locator())).toBe(true)
    }

    async selectStartDate(year, week){
        await browser.element(by.xpath(this.startDate)).click()
        await browser.element(by.xpath(this.startDate)).sendKeys(year)
        await browser.element(by.xpath(this.startDate)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await browser.element(by.xpath(this.startDate)).sendKeys(week)
        await browser.element(by.xpath(this.apply)).click()
        await browser.sleep(2000)
    }

    async selectEndDate(year, week){
        await browser.element(by.xpath(this.endDate)).click()
        await browser.element(by.xpath(this.endDate)).sendKeys(year)
        await browser.element(by.xpath(this.endDate)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await browser.element(by.xpath(this.endDate)).sendKeys(week)
        await browser.element(by.xpath(this.apply)).click()
        await browser.sleep(2000)
    }

    async selectStartDateSuccess(week){
        let applyText = await browser.element(by.xpath(this.applyStartDateSuccess)).getText()
        await expect(applyText).toContain(week)
    }
    async selectEndDateSuccess(week){
        let applyText = await browser.element(by.xpath(this.applyEndDateSuccess)).getText()
        await expect(applyText).toContain(week)
    }
}
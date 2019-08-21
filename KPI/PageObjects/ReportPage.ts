import { ProtractorBrowser, browser, by, ExpectedConditions, Key } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class ReportPage {
    actionSupport: ActionSupport
    //Status
    redStatusXPath: string
    greenStatusXPath: string
    yellowStatusXPath: string
    //Business opportunity
    addNewOpport_btn: string
    deleteOpport_btn: string
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
    submitCurBtnXPath: string
    submitPreBtnXPath: string
    resubmitCurBtnXPath: string
    resubmitPreBtnXPath: string
    reportSubmit_msg: string
    //Start date and end day
    startWeekXPath: string
    endWeekXPath: string
    applyBtnXPath: string
    applyStartDateSuccess: string
    applyEndDateSuccess: string
    addIssue_btn: string
    addComment_btn: string
    // Delete business opportunity
    deleteCustomer_msg: string
    deleteOK_btn: string
    deleteCancel_btn: string
    //Select current role
    dropDownProfile : string
    selectRole_btn: string
    projectHeadRole_btn: string
    KPITableName_PMrole: string
    //change week
    lastFor4WeeksXPath: string
    previousButtonXPath: string
    nextButtonXPath: string
    //View list Issue Comment Model
    viewIssueCommentBtnXPath: string
    viewModelMsgXPath: string
    issueCommentModelXPath: string
    programKPIXPath: string
    closeBtnXPath: string
    //Verify select project successfully
    projectXPath: string

    constructor(browser: ProtractorBrowser) {
        this.actionSupport = new ActionSupport(browser)
        //Model
        this.modelDescription = "//textarea[contains(@ng-model,'description')]"
        this.modelTitle = "//input[@ng-model='title']"
        this.modelAction = "//textarea[contains(@ng-model,'action')]"
        this.resolve_btn = "//span[text()='Resolved']"
        this.model = "//div[contains(text(),'Add New Issue / Comment')]"
        this.addAndClose_btn = "//button[contains(text(),'Add & Close')]"
        this.addAndContrinue_btn = "//button[contains(text(),'Add & Continue')]"
        this.cancel_btn = "//button[contains(text(),'Cancel')]"
        this.addSuccess_msg = "//span[contains(text(),'Added the comment successfully')]"
        //Status
        this.redStatusXPath = "//div[contains(@class,'color-item ng-scope bg-red')]"
        this.greenStatusXPath = "//div[contains(@class,'color-item ng-scope bg-green')]"
        this.yellowStatusXPath = "//div[contains(@class,'color-item ng-scope bg-yellow')]"
        //Frame
        this.frame_improve = "//div[text()='Improvements /Initiatives']//following-sibling::div[1]//iframe"
        this.frame_projectHighlight = "//div[text()='Project Highlight']//following-sibling::div[1]//iframe"
        this.frame_otherActivities = "//div[text()='Other Activities']//following-sibling::div[1]//iframe"
        //Report submit        
        this.reportSubmit_msg = "//span[contains(text(),'Your report has been submitted!')]"
        this.submitCurBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[4]//button[text()='Submit']"
        this.submitPreBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[3]//button[text()='Submit']"
        this.resubmitCurBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[4]//button[text()='Resubmit']"
        this.resubmitPreBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[3]//button[text()='Resubmit']"
        //Business opportunity
        this.addNewOpport_btn = "//button[text()='Add New Opportunity']"
        //Start date and end day
        this.startWeekXPath = "//input[@ng-model='dateWeekNumber.startDate']"
        this.endWeekXPath = "//input[@ng-model='dateWeekNumber.endDate']"
        this.applyBtnXPath = "//button[@ng-click='applyReport()']"
        this.applyStartDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][1]//div[1]//div[1]"
        this.applyEndDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][4]//div[1]//div[1]"
        this.addIssue_btn = "//label[@for='type-issue']"
        this.addComment_btn = "//label[@for='type-comment']"
        // Delete business opportunity
        this.deleteCustomer_msg = "//div[contains(text(),'Delete Business opportunity')]"
        this.deleteOK_btn = "//button[@data-ng-click='modalOptions.ok();']"
        this.deleteCancel_btn = "//button[@data-ng-click='modalOptions.close()']"
        //Select current role
        this.dropDownProfile  = "//span[@ng-click='clickToShowSelectRole()']"
        this.selectRole_btn = "//div[@class='select-option']"
        this.KPITableName_PMrole = "//div[@class='col-item col-kpi p-2']"
        //Change week
        this.previousButtonXPath = "//span[@ng-click='descreaseWeek()']"
        this.nextButtonXPath = "//span[@ng-click='increaseWeek()']"
        this.lastFor4WeeksXPath = "//button[@ng-click='applyLastFourWeek()']"
        // View list Issue Comment Model
        this.viewIssueCommentBtnXPath = "//div[text()='Schedule']//following-sibling::div[5]//div[@ng-click='listIssueCommentModal(weekReport)']"
        this.viewModelMsgXPath = "//div[text()='VitalSuite Issue/Comment']"
        this.issueCommentModelXPath = "//div[@class='item py-3 px-4 ng-scope']"
        this.programKPIXPath = "//select[@ng-model='kpiNameOfListIssue']"
        this.closeBtnXPath = "//button[text()='Close']"
        //Verify select project successfully
        this.projectXPath = "//span[@class='nav-link ng-binding']"
    }

    selectStatus(KPIname, week) {
        let status = this.actionSupport.clickOnElement("//div[text()='" + KPIname + "']//following-sibling::div["+ week +"]//button[@ng-click='changeChooseKPIStatus(weekReport, kpi, $event)']")
    }

    selectComment(KPIname, week) {
        let comment = this.actionSupport.clickOnElement("//div[text()='" + KPIname + "']//following-sibling::div["+ week +"]//button[@ng-click='addNewIssue(weekReport,kpi)']")
    }

    async addIssue() {
        await this.actionSupport.clickOnElement(this.addIssue_btn)
        await browser.sleep(2000)
    }

    async addComment() {
        await this.actionSupport.clickOnElement(this.addComment_btn)
    }

    async selectCurrentRole(role) {
        let selectrole = "//li[contains(text(),'" + role + "')]"
        await this.actionSupport.clickOnElement(this.dropDownProfile)
        await this.actionSupport.clickOnElement(this.selectRole_btn)
        await this.actionSupport.clickOnElement(selectrole)
    }
    async selectProgramRoleSuccess(role: string){
        let successText = await this.actionSupport.getElementText("//div[@class='name-report d-block w-100 ng-binding']")
        let success_msg = role.substr(0,role.length - 5)
        await expect("Program "+ success_msg +"").toEqual(successText)
    }

    async selectRoleSuccesss(tableName) {
        let name = "//div[@class='row-item row-header d-flex justify-content-start align-items-start']//div[contains(@class, 'col-item col-kpi p-2')]"
        await expect(this.actionSupport.getElementText(name)).toContain(tableName)
    }

    async selectProgram(programname){
        let programName = "//li[text() [contains(.,'"+ programname +"')]]"
        let option_btn = "//div[@class='selected-option']//span[@class='ng-binding']"
        await this.actionSupport.clickOnElement(option_btn)
        await this.actionSupport.clickOnElement(programName)
        await expect(this.actionSupport.getElementText(option_btn)).toEqual(programname)
    }

    async statusGreen() {
        await this.actionSupport.clickOnElement(this.greenStatusXPath)
    }

    async statusRed() {
        await this.actionSupport.clickOnElement(this.redStatusXPath)
    }

    async statusYellow() {
        await this.actionSupport.clickOnElement(this.yellowStatusXPath)
    }

    async commentModel(title, description) {
        await this.actionSupport.sendKeysOnElement(this.modelTitle, title)
        await this.actionSupport.sendKeysOnElement(this.modelDescription, description)
    }

    async issueModel(title, description, action: string) {
        await this.actionSupport.sendKeysOnElement(this.modelTitle, title)
        await this.actionSupport.sendKeysOnElement(this.modelDescription, description)
        await this.actionSupport.sendKeysOnElement(this.modelAction, action)
    }

    async clickResolvedIssue() {
        await this.actionSupport.clickOnElement(this.resolve_btn)
    }

    async addAndClose() {
        let message = await browser.element(by.xpath(this.addSuccess_msg))
        await this.actionSupport.clickOnElement(this.addAndClose_btn)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(false)
    }

    async addAndContinue() {
        let message = await browser.element(by.xpath(this.addSuccess_msg))
        await this.actionSupport.clickOnElement(this.addAndContrinue_btn)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(true)
    }

    async cancel() {
        await this.actionSupport.clickOnElement(this.cancel_btn)
        await expect(browser.element(by.xpath(this.model)).isPresent()).toBe(false)
        await browser.sleep(5000)
    }

    async businessOpportunity(customername, project, status, require, domain, resource, startdate, possibility) {
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()
        await this.actionSupport.clickOnElement(this.addNewOpport_btn)
        await expect(this.actionSupport.getElementAttribute(this.addNewOpport_btn, "class")).toEqual("btn-disable")
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.CustomerName']", customername)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//select[@ng-model='businessHighlight.UnitChartName']", project)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.Status']", status)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//textarea[@ng-model='businessHighlight.Requirement']", require)
        await expect(this.actionSupport.getElementAttribute(this.addNewOpport_btn, "class")).toEqual("")
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.Domain']", domain)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.ResourcedNeeded']", resource)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.TentativeStartDate']", startdate)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//textarea[@ng-model='businessHighlight.PossibilityHighlightName']", possibility)
        let a = await this.actionSupport.getElementText("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.CustomerName']")
        console.log(a)
    }

    async deleteBusinessOpportunity(row) {
        let deleted = browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + row + "]//button[@ng-click='deleteBusinessopportunity(highlight, businessHighlight)']")).click()
    }

    async deleteWarning() {
        await expect(browser.element(by.xpath(this.deleteCustomer_msg)).isDisplayed()).toBe(true)
    }

    async deleteClickOK() {
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()
        await this.actionSupport.clickOnElement(this.deleteOK_btn)
        let deleted = browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + count + "]//button[@ng-click='deleteBusinessopportunity(highlight, businessHighlight)']"))
        await expect(deleted.isPresent()).toBe(false)


    }

    async deleteClickCancel() {
        await this.actionSupport.clickOnElement(this.deleteCancel_btn)
    }

    async improveComment(text) {
        await this.actionSupport.clickOnElement(this.frame_improve)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_improve)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async projectHighlightComment(text) {
        await this.actionSupport.clickOnElement(this.frame_projectHighlight)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_projectHighlight)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async otherActivitiesComment(text) {
        await this.actionSupport.clickOnElement(this.frame_otherActivities)
        await browser.switchTo().frame(browser.element(by.xpath(this.frame_otherActivities)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async reportSubmitCur() {
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await this.actionSupport.clickOnElement(this.submitCurBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async reportSubmitPrev() {
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await this.actionSupport.clickOnElement(this.submitPreBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async reportResubmitCur() {
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await this.actionSupport.clickOnElement(this.resubmitCurBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async reportResubmitPrev() {
        let message = await browser.element(by.xpath(this.reportSubmit_msg))
        await this.actionSupport.clickOnElement(this.resubmitPreBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async selectStartDate(year, week) {
        await this.actionSupport.clickOnElement(this.startWeekXPath)
        await this.actionSupport.sendKeysOnElement(this.startWeekXPath, year)
        await browser.element(by.xpath(this.startWeekXPath)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await this.actionSupport.sendKeysOnElement(this.startWeekXPath, week)
        await this.actionSupport.clickOnElement(this.applyBtnXPath)
    }

    async selectEndDate(year, week) {
        await this.actionSupport.clickOnElement(this.endWeekXPath)
        await this.actionSupport.sendKeysOnElement(this.endWeekXPath, year)
        await browser.element(by.xpath(this.endWeekXPath)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await this.actionSupport.sendKeysOnElement(this.endWeekXPath, week)
        await browser.element(by.xpath(this.applyBtnXPath)).click()
    }

    async selectStartDateSuccess(week) {
        let applyText = await this.actionSupport.getElementText(this.applyStartDateSuccess)
        await expect(applyText).toContain(week)
    }

    async selectEndDateSuccess(week) {
        let applyText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(applyText).toContain(week)
    }
    
    async selectProject(projectname) {
        let projectName = "//li[@ng-repeat='unit in unitChartsStatus']//span[text()='" + projectname + "']"
        await this.actionSupport.clickOnElement(projectName)
    }

    async checkProjectName(projectname) {
        let check = 0
        let project = browser.element.all(by.xpath(this.projectXPath))//"//span[@class='nav-link ng-binding']"
        let projectText = await project.getText()
        for (let i = 0; i < projectText.length; i++) {
            if (projectname == projectText[i])
                check += 1
        }
        return check
    }

    async addIssueOrComment(){
        let addIssueOrComment_btn = "//label[@for='type-issue-project']"
        await this.actionSupport.clickOnElement(addIssueOrComment_btn)
    }

    async addBusinessOpport(){
        let addBusinessOpport_btn = "//button[text()='Add From Business Opportunity Table']"
        await this.actionSupport.clickOnElement(addBusinessOpport_btn)
    }

    async selectProjectReport(projectname){
        let projectName = "//li//*[text()='"+ projectname +"']"
        await this.actionSupport.clickOnElement(projectName)
        let verifyText = await this.actionSupport.getElementText("//li[@class='tab-project-item uib-tab nav-item ng-isolate-scope active']")
        await expect(verifyText).toEqual(projectname)
    }

    async selectProjectSuccess(projectname) {
        let successText = this.actionSupport.getElementText("//li[@class='nav-item tab-project-item uib-tab  active']//span")
        await expect(successText).toEqual(projectname)
    }

    getCurrentWeek(d: Date) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var curweek = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        return curweek
    }

    //Click n times on Previous Week button
    async switchPrevWeek(n) {
        for (let i = n; i > 0; i--) {
            await this.actionSupport.clickOnElement(this.previousButtonXPath)
        }
        let successText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(successText).toContain("" + (this.getCurrentWeek(new Date) - n) + "")
    }

    async getLast4Weeks(){
        await this.actionSupport.clickOnElement(this.lastFor4WeeksXPath)
        let successText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(successText).toContain("" + this.getCurrentWeek(new Date) + "")
    }

    async switchNextWeek(n: number) {
        let curWeek = this.getCurrentWeek(new Date)
        const constEndWeek = Number(String(await this.actionSupport.getElementText(this.applyEndDateSuccess)).slice(5,7))
        let endWeek = Number(String(await this.actionSupport.getElementText(this.applyEndDateSuccess)).slice(5,7))
        let limitN = curWeek - endWeek
        if (limitN == 0) {
            console.log("ERROR: CAN NOT CLICK NEXT BUTTON WHEN STANDING CURRENT WEEK")
            await expect(this.actionSupport.getElementAttribute(this.nextButtonXPath, "class")).toEqual("week-next has-event no-event")
        }
        else {
            await expect(this.actionSupport.getElementAttribute(this.nextButtonXPath, "class")).toEqual("week-next has-event")
            if (n <= limitN) {
                for (let i = endWeek; i < (constEndWeek + n); i++) {
                    await this.actionSupport.clickOnElement(this.nextButtonXPath)
                }
                let successText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
                await expect(successText).toContain("" + (constEndWeek + n) + "")
            }
            else
            return console.log("ERROR: CAN NOT DISPLAY WEEK > CURRENT WEEK")
        }
    }

    async ViewIssueCommentModel(){
        await this.actionSupport.clickOnElement(this.viewIssueCommentBtnXPath)
        await expect(browser.element(by.xpath(this.viewModelMsgXPath)).isDisplayed()).toBe(true)
        await this.actionSupport.sendKeysOnElement(this.programKPIXPath, "Effort")
        await this.actionSupport.sendKeysOnElement(this.programKPIXPath, "Schedule")   
    }

    async countIssueComnent(){
        let listIssueComment = browser.element.all(by.xpath(this.issueCommentModelXPath))
        let count = await listIssueComment.count()
        return count
    }

    async closeViewIssueModel(){
        await this.actionSupport.clickOnElement(this.closeBtnXPath)
    }

    async checkIssueComment(){
        let number = await Number(this.countIssueComnent())
        console.log(number)
        if(number == 0){
            await expect(browser.element(by.xpath(this.viewIssueCommentBtnXPath)).isDisplayed()).toBe(false)
        }
        await expect(browser.element(by.xpath(this.viewIssueCommentBtnXPath)).isDisplayed()).toBe(true)
    }

}
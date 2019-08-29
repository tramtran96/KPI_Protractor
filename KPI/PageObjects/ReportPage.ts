import { ProtractorBrowser, browser, by, ExpectedConditions, Key } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class ReportPage {
    actionSupport: ActionSupport
    //Status
    redStatusXPath: string
    greenStatusXPath: string
    yellowStatusXPath: string
    //Business opportunity
    addNewOpportBtnXPath: string
    deleteOpportBtnXPath: string
    //Frame
    frameImproveXPath: string
    frameProjectHighlightXPath: string
    frameOtherActivitiesXPath: string
    //Model
    addAndCloseBtnXPath: string
    addAndContrinueBtnXPath: string
    cancelBtnXPath: string
    modelXPath: string
    modelTitleXPath: string
    modelDescriptionXPath: string
    modelActionXPath: string
    addSuccessMsgXPath: string
    resolveBtnXPath: string
    closeModelBtnXPath: string
    //Report submit
    submitCurBtnXPath: string
    submitPreBtnXPath: string
    resubmitCurBtnXPath: string
    resubmitPreBtnXPath: string
    reportSubmitMsgXPath: string
    //Start date and end day
    startWeekXPath: string
    endWeekXPath: string
    applyBtnXPath: string
    applyStartDateSuccess: string
    applyEndDateSuccess: string
    addIssueBtnXPath: string
    addCommentBtnXPath: string
    // Delete business opportunity
    deleteCustomerMsgXPath: string
    deleteOKBtnXPath: string
    deleteCancelBtnXPath: string
    //Select current role
    dropDownProfile : string
    selectRoleBtnXPath: string
    projectHeadRoleBtn: string
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
    numberOfIssueOrComment: string
    saveEditBtnXPath: string
    cancelEditBtnXPath: string
    //Verify select project successfully
    projectXPath: string

    constructor(browser: ProtractorBrowser) {
        this.actionSupport = new ActionSupport(browser)
        //Model
        this.modelDescriptionXPath = "//textarea[contains(@ng-model,'description')]"
        this.modelTitleXPath = "//input[@ng-model='title']"
        this.modelActionXPath = "//textarea[contains(@ng-model,'action')]"
        this.resolveBtnXPath = "//span[text()='Resolved']"
        this.modelXPath = "//div[contains(text(),'Add New Issue / Comment')]"
        this.addAndCloseBtnXPath = "//button[contains(text(),'Add & Close')]"
        this.addAndContrinueBtnXPath = "//button[contains(text(),'Add & Continue')]"
        this.cancelBtnXPath = "//button[contains(text(),'Cancel')]"
        this.addSuccessMsgXPath = "//span[@data-notify='message']"//span[contains(text(),'Added the comment successfully') or contains(text(),'Added the issue successfully')]"
        this.closeModelBtnXPath = "//span[@title='Close']"

        //Status
        this.redStatusXPath = "//div[contains(@class,'color-item ng-scope bg-red')]"
        this.greenStatusXPath = "//div[contains(@class,'color-item ng-scope bg-green')]"
        this.yellowStatusXPath = "//div[contains(@class,'color-item ng-scope bg-yellow')]"
        //Frame
        this.frameImproveXPath = "//div[text()='Improvement /Initiative']//following-sibling::div[1]//iframe"
        this.frameProjectHighlightXPath = "//div[text()='Project Highlight']//following-sibling::div[1]//iframe"
        this.frameOtherActivitiesXPath = "//div[text()='Other Activity']//following-sibling::div[1]//iframe"
        //Report submit        
        this.reportSubmitMsgXPath = "//span[contains(text(),'Your report has been submitted!')]"
        this.submitCurBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[4]//button[text()='Submit']"
        this.submitPreBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[3]//button[text()='Submit']"
        this.resubmitCurBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[4]//button[text()='Resubmit']"
        this.resubmitPreBtnXPath = "//div[contains(@class,'col-item col-kpi p-2')]//following-sibling::div[3]//button[text()='Resubmit']"
        //Business opportunity
        this.addNewOpportBtnXPath = "//button[text()='Add New Opportunity']"
        //Start date and end day
        this.startWeekXPath = "//input[@ng-model='dateWeekNumber.startDate']"
        this.endWeekXPath = "//input[@ng-model='dateWeekNumber.endDate']"
        this.applyBtnXPath = "//button[@ng-click='applyReport()']"
        this.applyStartDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][1]//div[1]//div[1]"
        this.applyEndDateSuccess = "//div[@ng-repeat='week in weeksInYearIsChoose'][4]//div[1]//div[1]"
        this.addIssueBtnXPath = "//label[@for='type-issue']"
        this.addCommentBtnXPath = "//label[@for='type-comment']"
        // Delete business opportunity
        this.deleteCustomerMsgXPath = "//div[contains(text(),'Delete Business opportunity')]"
        this.deleteOKBtnXPath = "//button[@data-ng-click='modalOptions.ok();']"
        this.deleteCancelBtnXPath = "//button[@data-ng-click='modalOptions.close()']"
        //Select current role
        this.dropDownProfile  = "//span[@ng-click='clickToShowSelectRole()']"
        this.selectRoleBtnXPath = "//div[@class='select-option']"
        this.KPITableName_PMrole = "//div[@class='col-item col-kpi p-2']"
        //Change week
        this.previousButtonXPath = "//span[@ng-click='descreaseWeek()']"
        this.nextButtonXPath = "//span[@ng-click='increaseWeek()']"
        this.lastFor4WeeksXPath = "//button[@ng-click='applyLastFourWeek()']"
        // View list Issue Comment Model
        this.viewIssueCommentBtnXPath = "//div[text()='Schedule']//following-sibling::div[5]//div[@ng-click='listIssueCommentModal(weekReport)']"
        this.numberOfIssueOrComment = "//div[@class='full-screen-issue ml-2 ng-binding ng-scope']"
        this.viewModelMsgXPath = "//div[contains(text(),'Issue/Comment')]"
        this.issueCommentModelXPath = "//div[@class='item py-3 px-4 ng-scope']"
        this.programKPIXPath = "//select[@ng-model='kpiNameOfListIssue']"
        this.closeBtnXPath = "//button[text()='Close']"
        this.saveEditBtnXPath = "//button[@ng-click='saveIssueOrComment(title,description,actionEdit,resolve)']"
        this.cancelEditBtnXPath = "//button[@ng-click='close(addIssueOrCommentPMReport)']"
        //Verify select project successfully
        this.projectXPath = "//span[@class='nav-link ng-binding']"
    }

    SelectStatus(KPIname, week) {
        let status = this.actionSupport.clickOnElement("//div[text()='" + KPIname + "']//following-sibling::div["+ week +"]//button[@ng-click='changeChooseKPIStatus(weekReport, kpi, $event)']")
    }

    SelectComment(KPIname, week) {
        let comment = this.actionSupport.clickOnElement("//div[text()='" + KPIname + "']//following-sibling::div["+ week +"]//button[@ng-click='addNewIssue(weekReport,kpi)']")
    }

    async AddIssue() {
        await this.actionSupport.clickOnElement(this.addIssueBtnXPath)
    }

    async AddComment() {
        await this.actionSupport.clickOnElement(this.addCommentBtnXPath)
    }

    async SelectCurrentRole(role) {
        let selectrole = "//li[contains(text(),'" + role + "')]"
        await this.actionSupport.clickOnElement(this.dropDownProfile)
        await this.actionSupport.clickOnElement(this.selectRoleBtnXPath)
        await this.actionSupport.clickOnElement(selectrole)
    }

    async SelectProgramRoleSuccess(role: string){
        let successText = await this.actionSupport.getElementText("//div[@class='name-report d-block w-100 ng-binding']")
        let success_msg = role.substr(0,role.length - 5)
        await expect("Program "+ success_msg +"").toEqual(successText)
    }

    async SelectRoleSuccesss(tableName) {
        let name = "//div[@class='row-item row-header d-flex justify-content-start align-items-start']//div[contains(@class, 'col-item col-kpi p-2')]"
        await expect(this.actionSupport.getElementText(name)).toContain(tableName)
    }

    async SelectProjectToAddIssueComment(programname){
        let programName = "//li[text() [contains(.,'"+ programname +"')]]"
        let option_btn = "//div[@class='selected-option']//span[@class='ng-binding']"
        await this.actionSupport.clickOnElement(option_btn)
        await this.actionSupport.clickOnElement(programName)
        await expect(this.actionSupport.getElementText(option_btn)).toEqual(programname)
    }

    async StatusGreen() {
        await this.actionSupport.clickOnElement(this.greenStatusXPath)
    }

    async StatusRed() {
        await this.actionSupport.clickOnElement(this.redStatusXPath)
    }

    async StatusYellow() {
        await this.actionSupport.clickOnElement(this.yellowStatusXPath)
    }

    async CommentModel(title, description) {
        await this.actionSupport.sendKeysOnElement(this.modelTitleXPath, title)
        await this.actionSupport.sendKeysOnElement(this.modelDescriptionXPath, description)
    }

    async IssueModel(title, description, action: string) {
        await this.actionSupport.sendKeysOnElement(this.modelTitleXPath, title)
        await this.actionSupport.sendKeysOnElement(this.modelDescriptionXPath, description)
        await this.actionSupport.sendKeysOnElement(this.modelActionXPath, action)
    }

    async ClickResolvedIssue() {
        await this.actionSupport.clickOnElement(this.resolveBtnXPath)
    }

    //text = 'Added the comment successfully' or 'Added the issue successfully'
    async AddAndClose(text){
        await this.actionSupport.clickOnElement(this.addAndCloseBtnXPath)
        await expect(this.actionSupport.getElementText(this.addSuccessMsgXPath)).toEqual(text)
        await expect(browser.element(by.xpath(this.modelXPath)).isPresent()).toBe(false)
        let elm = await browser.element(by.xpath(this.addSuccessMsgXPath))
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(elm)))
    }

    //text = 'Added the comment successfully' or 'Added the issue successfully'
    async AddAndContinue(text) {
        let elm = await browser.element(by.xpath(this.addSuccessMsgXPath))
        await this.actionSupport.clickOnElement(this.addAndContrinueBtnXPath)
        await expect(this.actionSupport.getElementText(this.addSuccessMsgXPath)).toBe(text)
        await expect(browser.element(by.xpath(this.modelXPath)).isPresent()).toBe(true)
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(elm)))
    }

    async Cancel() {
        await this.actionSupport.clickOnElement(this.cancelBtnXPath)
        await expect(browser.element(by.xpath(this.modelXPath)).isPresent()).toBe(false)
        await browser.sleep(5000)
    }

    async CloseModel(){
        await this.actionSupport.clickOnElement(this.closeModelBtnXPath)
    }

    async BusinessOpportunity(customername, project, status, require, domain, resource, possibility) {
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()
        await this.actionSupport.clickOnElement(this.addNewOpportBtnXPath)
        await expect(this.actionSupport.getElementAttribute(this.addNewOpportBtnXPath, "class")).toEqual("btn-disable")
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.CustomerName']", customername)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//select[@ng-model='businessHighlight.UnitChartName']", project)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.Status']", status)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//textarea[@ng-model='businessHighlight.Requirement']", require)
        await expect(this.actionSupport.getElementAttribute(this.addNewOpportBtnXPath, "class")).toEqual("")
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.Domain']", domain)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.ResourcedNeeded']", resource)
        //await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//input[@ng-model='businessHighlight.TentativeStartDate']", startdate)
        await this.actionSupport.sendKeysOnElement("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + (count + 1) + "]//textarea[@ng-model='businessHighlight.PossibilityHighlightName']", possibility)
    }

    async DeleteBusinessOpportunity(row) {
        await browser.element(by.xpath("//div[@ng-repeat='businessHighlight in highlight.BusinessOpportunityHighlightDtos'][" + row + "]//button[@ng-click='deleteBusinessopportunity(highlight, businessHighlight)']")).click()
        let msg = await browser.element(by.xpath(this.deleteCustomerMsgXPath))
        await expect(browser.wait(ExpectedConditions.invisibilityOf(msg))).toBe(true)
    }

    async DeleteClickOK() {
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()
        await this.actionSupport.clickOnElement(this.deleteOKBtnXPath)
        let curcount = await rows.count()
        await expect(curcount).toEqual(count-1)
    }

    async DeleteClickCancel() {
        let rows = browser.element.all(by.repeater("businessHighlight in highlight.BusinessOpportunityHighlightDtos"))
        let count = await rows.count()
        await this.actionSupport.clickOnElement(this.deleteCancelBtnXPath)
        let curcount = await rows.count()
        await expect(count).toEqual(curcount)
    }

    async ImproveComment(text) {
        await this.actionSupport.clickOnElement(this.frameImproveXPath)
        await browser.switchTo().frame(browser.element(by.xpath(this.frameImproveXPath)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async ProjectHighlightComment(text) {
        await this.actionSupport.clickOnElement(this.frameProjectHighlightXPath)
        await browser.switchTo().frame(browser.element(by.xpath(this.frameProjectHighlightXPath)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async OtherActivityComment(text) {
        await this.actionSupport.clickOnElement(this.frameOtherActivitiesXPath)
        await browser.switchTo().frame(browser.element(by.xpath(this.frameOtherActivitiesXPath)).getWebElement())
        await browser.waitForAngularEnabled(false)
        await browser.element(by.tagName('body')).sendKeys(text)
        await expect(browser.element(by.tagName('body')).getText()).toEqual(text)
        await browser.switchTo().defaultContent()
    }

    async ReportSubmitCur() {
        let message = await browser.element(by.xpath(this.reportSubmitMsgXPath))
        await this.actionSupport.clickOnElement(this.submitCurBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async ReportSubmitPrev() {
        let message = await browser.element(by.xpath(this.reportSubmitMsgXPath))
        await this.actionSupport.clickOnElement(this.submitPreBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async ReportResubmitCur() {
        let message = await browser.element(by.xpath(this.reportSubmitMsgXPath))
        await this.actionSupport.clickOnElement(this.resubmitCurBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async ReportResubmitPrev() {
        let message = await browser.element(by.xpath(this.reportSubmitMsgXPath))
        await this.actionSupport.clickOnElement(this.resubmitPreBtnXPath)
        await expect(browser.wait(ExpectedConditions.invisibilityOf(message), 10000, message.locator())).toBe(true)
    }

    async SelectStartDate(year, week) {
        await this.actionSupport.clickOnElement(this.startWeekXPath)
        await this.actionSupport.sendKeysOnElement(this.startWeekXPath, year)
        await browser.element(by.xpath(this.startWeekXPath)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await this.actionSupport.sendKeysOnElement(this.startWeekXPath, week)
        await this.actionSupport.clickOnElement(this.applyBtnXPath)
    }

    async SelectEndDate(year, week) {
        await this.actionSupport.clickOnElement(this.endWeekXPath)
        await this.actionSupport.sendKeysOnElement(this.endWeekXPath, year)
        await browser.element(by.xpath(this.endWeekXPath)).sendKeys(Key.ARROW_LEFT)
        await browser.sleep(2000)
        await this.actionSupport.sendKeysOnElement(this.endWeekXPath, week)
        await browser.element(by.xpath(this.applyBtnXPath)).click()
    }

    async SelectStartDateSuccess(week) {
        let applyText = await this.actionSupport.getElementText(this.applyStartDateSuccess)
        await expect(applyText).toContain(week)
    }

    async SelectEndDateSuccess(week) {
        let applyText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(applyText).toContain(week)
    }
    
    async SelectProject(projectname) {
        let projectName = "//li[@ng-repeat='unit in unitChartsStatus']//span[text()='" + projectname + "']"
        await this.actionSupport.clickOnElement(projectName)
    }

    async CheckProjectName(projectname) {
        let check = 0
        let project = browser.element.all(by.xpath(this.projectXPath))//"//span[@class='nav-link ng-binding']"
        let projectText = await project.getText()
        for (let i = 0; i < projectText.length; i++) {
            if (projectname == projectText[i])
                check += 1
        }
        return check
    }

    async AddIssueOrComment() {
        let addIssueOrComment_btn = "//label[@for='type-issue-project']"
        await this.actionSupport.clickOnElement(addIssueOrComment_btn)
    }
    
    async AddOneIssueCommentFromTable(n) {
        let rows = browser.element.all(by.xpath("//div[@ng-repeat='issue in issueComments.issues' or @ng-repeat='comment in issueComments.comments']//button[text()='Add']"))
        let count = await rows.count()
        if (count == 0)
            console.log("Dont't have any issue or comment in table")
        else {
            if (count >= n) {
                let description = await this.actionSupport.getElementText("//div[@class='item py-3 px-4 ng-scope'][" + n + "]//div[contains(@class,'item-type mt-2')][2]")
                let addbtn = "//div[@ng-repeat='issue in issueComments.issues' or @ng-repeat='comment in issueComments.comments'][" + n + "]//button[text()='Add']"
                let elm = await browser.element(by.xpath(addbtn));
                browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
                await elm.click()
                let text = await this.actionSupport.getElementText(this.addSuccessMsgXPath)
                let el = await browser.element(by.xpath(this.addSuccessMsgXPath))
                await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(el)))
                if (description == "Comment")
                    await expect(text).toEqual("Added the comment successfully")
                if (description == "Issue")
                    await expect(text).toEqual("Added the issue successfully")
                console.log("Add successfully")
            }
            else
                console.log("The row you want to add is not exist")
        }
    }

    async AddAllIssueCommentFromTable() {
        let addallbtn = "//button[@ng-click='addAllIssueComment()']"
        let rows = browser.element.all(by.xpath("//div[@ng-repeat='issue in issueComments.issues' or @ng-repeat='comment in issueComments.comments']//button[text()='Add']"))
        let count = await rows.count()
        if(count == 0)
        console.log("Dont't have any issue or comment in table")
        else{
            let elm = await browser.element(by.xpath(addallbtn));
            await elm.click()
            await expect(this.actionSupport.getElementText(this.addSuccessMsgXPath)).toEqual("Added issues/comments successfully")
            let el = await browser.element(by.xpath(this.addSuccessMsgXPath))
            await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(el)))
            console.log("Add all issue or comment successfully")
        }
    }

    async AddBusinessOpport() {
        let addBusinessOpport_btn = "//button[text()='Add From Business Opportunity Table']"
        await this.actionSupport.clickOnElement(addBusinessOpport_btn)
    }

    async AddOneBusinessFromTable(n) {
        let addbtn = "//div[@ng-repeat='businessHighlight in businessOpportunityHighlightModals']["+ n +"]//button[text()='Add']"
        //let nextcustomer = await this.actionSupport.getElementText("//div[@ng-repeat='businessHighlight in businessOpportunityHighlightModals']["+ (n+1) +"]//div[@class='item-col col-customer']")
        let rows = browser.element.all(by.xpath("//div[@ng-repeat='businessHighlight in businessOpportunityHighlightModals']//button[text()='Add']"))
        let count = await rows.count()
        if(count == 0)
        console.log("Dont't have any business opportunity in table")
        else{
        if(count >= n){
            let elm = await browser.element(by.xpath(addbtn))
            browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement())
            await elm.click()
            let curcount = await rows.count()
            let curcustomer = await this.actionSupport.getElementText("//div[@ng-repeat='businessHighlight in businessOpportunityHighlightModals']["+ n +"]//div[@class='item-col col-customer']")
           // await expect(curcustomer).toEqual(nextcustomer)
            await expect(curcount).toEqual(count-1)
            console.log("Add successfully")
        }
        else
        console.log("The row you want to add is not exist")
        }
    }

    async AddAllBusinessFromTable() {
        let addallbtn = "//button[@ng-click='addAllBusinessOpportunityFromModal()']"
        let rows = browser.element.all(by.xpath("//div[@ng-repeat='businessHighlight in businessOpportunityHighlightModals']//button[text()='Add']"))
        let count = await rows.count()
        if(count == 0)
        console.log("Dont't have any business opportunity in table")
        else{
            let elm = await browser.element(by.xpath(addallbtn));
            await elm.click()
            count = await rows.count()
            await expect(count).toEqual(0)
            console.log("Add all business opportunity successfully")
        }
    }

    async SelectProjectReport(projectname) {
        let projectName = "//li//*[text()='"+ projectname +"']"
        await this.actionSupport.clickOnElement(projectName)
        let verifyText = await this.actionSupport.getElementText("//li[@class='tab-project-item uib-tab nav-item ng-isolate-scope active']")
        await expect(verifyText).toEqual(projectname)
    }

    async SelectProjectSuccess(projectname) {
        let successText = this.actionSupport.getElementText("//li[@class='nav-item tab-project-item uib-tab  active']//span")
        await expect(successText).toEqual(projectname)
    }

    GetCurrentWeek(d: Date) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var curweek = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        return curweek
    }

    //Click n times on Previous Week button
    async SwitchPrevWeek(n) {
        for (let i = n; i > 0; i--) {
            await this.actionSupport.clickOnElement(this.previousButtonXPath)
        }
        let successText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(successText).toContain("" + (this.GetCurrentWeek(new Date) - n) + "")
    }

    async GetLast4Weeks() {
        await this.actionSupport.clickOnElement(this.lastFor4WeeksXPath)
        let successText = await this.actionSupport.getElementText(this.applyEndDateSuccess)
        await expect(successText).toContain("" + this.GetCurrentWeek(new Date) + "")
    }

    async SwitchNextWeek(n: number) {
        let curWeek = this.GetCurrentWeek(new Date)
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

    async CountIssueComment(KPIname) {
        await this.actionSupport.clickOnElement("//div[text()='" + KPIname + "']//following-sibling::div[5]//div[@ng-click='listIssueCommentModal(weekReport)']")
            let listIssueComment = await browser.element.all(by.xpath(this.issueCommentModelXPath)).count()
            return listIssueComment
    }

    async ViewIssueCommentModel(KPIname) {
        let eyes_icon = await browser.element.all(by.xpath("//div[text()='"+ KPIname +"']//following-sibling::div[5]//div[@ng-click='listIssueCommentModal(weekReport)']")).count()
        let number = await browser.element.all(by.xpath(this.numberOfIssueOrComment)).count()
        console.log(eyes_icon, number)
        if (eyes_icon != 0) {
            if (number == 0) {
                let count = this.CountIssueComment(KPIname)
                await expect(count).toEqual(1)
                console.log("Have one issue or comment in table")
            }
            else {
                let number_issue_comment = Number(String(await this.actionSupport.getElementText(this.numberOfIssueOrComment)).slice(1, 2))
                let count = Number(await this.CountIssueComment(KPIname))
                await expect(number_issue_comment).toEqual(count-1)
                console.log("Have " + count + " issues or comments in table")
            }
        }
        // await this.actionSupport.clickOnElement(this.viewIssueCommentBtnXPath)
        // await expect(browser.element(by.xpath(this.viewModelMsgXPath)).isDisplayed()).toBe(true)
        // await this.actionSupport.sendKeysOnElement(this.programKPIXPath, "Effort")
        // await this.actionSupport.sendKeysOnElement(this.programKPIXPath, "Schedule")   
        else
            console.log("Don't have any issue or comment in table")
    }

    async CheckDisableEditDeleteBtn(n) {
        let count = await browser.element.all(by.xpath("//div[@class='item py-3 px-4 ng-scope']["+ n +"]//span[@class='resolved-date ng-binding ng-scope']")).count()
        return count
    }

    async DeleteIssueCommentInModel(n) {
        let deleteBtn = "//div[@class='item py-3 px-4 ng-scope'][" + n + "]//div[@ng-click='deleteIssue(issue)']"
        let count = await this.CheckDisableEditDeleteBtn(n)
        if (count == 0) {
            let confirmmodel = await browser.element(by.xpath("//div[@class='modal-name ng-binding']"))
            await this.actionSupport.clickOnElement(deleteBtn)
            await expect(confirmmodel.isDisplayed()).toBe(true)
        }
        else
            console.log("Delete button is disable")
    }

    async EditIssueCommentInModel(n, title, description, action) {
        let editBtn = "//div[@class='item py-3 px-4 ng-scope'][" + n + "]//div[@ng-click='editIssue(issue)']"
        let count = await this.CheckDisableEditDeleteBtn(n)
        let desc = await this.actionSupport.getElementText("//div[@class='item py-3 px-4 ng-scope'][" + n + "]//div[@class='item-type mt-2 ng-scope']")
        if (count == 0) {
            await this.actionSupport.clickOnElement(editBtn)
            console.log(desc)
            if (desc == "Comment") {
                await this.actionSupport.sendKeysOnElement(this.modelTitleXPath, title)
                await this.actionSupport.sendKeysOnElement(this.modelDescriptionXPath, description)
                await this.actionSupport.clickOnElement(this.saveEditBtnXPath)
                await expect(this.actionSupport.getElementText(this.addSuccessMsgXPath)).toEqual("Edited the comment successfully")
            }
            if (desc == "Issue") {
                console.log("1")
                await this.actionSupport.sendKeysOnElement(this.modelTitleXPath, title)
                console.log("2")
                await this.actionSupport.sendKeysOnElement(this.modelDescriptionXPath, description)
                await this.actionSupport.sendKeysOnElement(this.modelActionXPath, action)
                await this.actionSupport.clickOnElement(this.saveEditBtnXPath)
                await expect(this.actionSupport.getElementText(this.addSuccessMsgXPath)).toEqual("Edited the issue successfully")
            }
            console.log("Edit comment successfully")
        }
        else
            console.log("Edit button is disable")
    }

    async IssueCommentModelClickOK(n) {
        let description = await this.actionSupport.getElementText("//div[@class='item py-3 px-4 ng-scope'][" + n + "]//div[@class='item-type mt-2 ng-scope']")
        let count = await browser.element.all(by.xpath(this.issueCommentModelXPath)).count()
        await this.actionSupport.clickOnElement(this.deleteOKBtnXPath)
        let curcount = await browser.element.all(by.xpath(this.issueCommentModelXPath)).count()
        await expect(curcount).toEqual(count - 1)
        if (description == "Comment")
            await expect(browser.element(by.xpath(this.addSuccessMsgXPath)).getText()).toEqual("Deleted the comment successfully")
        if (description == "Issue")
            await expect(browser.element(by.xpath(this.addSuccessMsgXPath)).getText()).toEqual("Deleted the issue successfully")
        let elm = await browser.element(by.xpath(this.addSuccessMsgXPath))
        await browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(elm)))
    }

    async IssueCommentModelClickCancel() {
        let count = await browser.element.all(by.xpath(this.issueCommentModelXPath)).count()
        await this.actionSupport.clickOnElement(this.deleteCancelBtnXPath)
        let curcount = await browser.element.all(by.xpath(this.issueCommentModelXPath)).count()
        await expect(curcount).toEqual(count)
    }
    async closeViewIssueModel(){
        await this.actionSupport.clickOnElement(this.closeBtnXPath)
    }
    
    async ViewProjectReport(){
        await this.actionSupport.clickOnElement("//li[text()='View Project Report']")
    }
}
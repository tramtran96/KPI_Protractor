import { LoginPage } from "../PageObjects/LoginPage";
import { ReportPage } from "../PageObjects/ReportPage";
import { async } from "q";
import { browser, by } from "protractor";

describe("Report Page", function(){
    let loginPage: LoginPage
    let reportPage: ReportPage

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        reportPage = new ReportPage(browser)
        await browser.manage().window().maximize()
        await browser.get("http://10.1.0.62/kpi/#/")
    })
    it("Select week by start date ", async function(){
        let year = "2019"
        let week = "20"
        await loginPage.loginPage("tttoai", "1234")
        await loginPage.loginSuccess()
        await reportPage.selectStartDate(year, week)
        await reportPage.selectStartDateSuccess(week)
    })
 
    it("Select week by end date ", async function(){
        let year = "2019"
        let week = "20"
        await loginPage.loginPage("tttoai", "1234")
        await loginPage.loginSuccess()
        await reportPage.selectEndDate(year, week)
        await reportPage.selectEndDateSuccess(week)
    })

    it("Submit report of previous week", async function(){
        let txt = "Added the comment successfully"
        let sche = 'Schedule'
        let title = "New comment"
        let description = "Desciption"
        let action = "click"
        await loginPage.loginPage("tttoai", "1234")
        await loginPage.loginSuccess()
        console.log("STEP 1: Select status_yellow for Schedule and Add a new comment")
        await reportPage.selectStatus_btn(sche).prevval.click()
        await browser.sleep(2000)
        await reportPage.statusYellow()
        await browser.sleep(2000)
        await reportPage.selectComment_btn(sche).prevval.click()
        await reportPage.addComment()
        await browser.sleep(2000)
        await reportPage.commentModel(title, description)
        await browser.sleep(2000)
        await reportPage.addAndClose()
        await browser.sleep(2000)
        console.log("STEP 2: Select status_red for Quality and Add a new issue")
        await reportPage.selectStatus_btn('Quality').prevval.click()
        await reportPage.statusYellow()
        await browser.sleep(2000)
        await reportPage.selectComment_btn('Quality').prevval.click()
        await browser.sleep(5000)
        await reportPage.issueModel("New issue", "Desciption", "Action")
        await reportPage.clickResolvedIssue()
        await reportPage.addAndClose()
        await browser.sleep(2000)
        console.log("STEP 3: Select status_red for Effort")
        await reportPage.selectStatus_btn('Effort').prevval.click()
        await reportPage.statusRed()
        await browser.sleep(2000)
        console.log("STEP 4: Select status_green for Resources ")
        await reportPage.selectStatus_btn('Resources').prevval.click()
        await reportPage.statusGreen()
        await browser.sleep(2000)
        console.log("STEP 5: Add new business opportunity ")
        await reportPage.businessOpportunity("tram", "resolve", "unknown","unknown", "unknown")
        console.log("STEP 6 : Add new improvements/initiatives")
        await reportPage.improveComment("hello")
        console.log("STEP : Add new Project Highlight")
        await reportPage.projectHighlightComment("Highlight")
        console.log("STEP 7: Add new Other Activities")
        await reportPage.otherActivitiesComment("Say yes")
        console.log("STEP 8: Delete a customer")
        await reportPage.deleteBusinessOpportunity(5)
        await browser.sleep(2000)
        await reportPage.deleteWarning()
        await reportPage.deleteClickOK()
        console.log("STEP 9: Resubmit report")
        await reportPage.reportResubmitPrev()
    })
    
        it("Submit report of current week", async function(){
            let txt = "Added the comment successfully"
            let sche = 'Schedule'
            let title = "New comment"
            let description = "Desciption"
            await loginPage.loginPage("tttoai", "1234")
            await loginPage.loginSuccess()
            console.log("STEP 1: Select status_yellow for Schedule and Add a new comment")
            await reportPage.selectStatus_btn(sche).curval.click()
            await browser.sleep(2000)
            await reportPage.statusRed()
            await browser.sleep(2000)
            await reportPage.selectComment_btn(sche).curval.click()
            await reportPage.addComment()
            await browser.sleep(2000)
            await reportPage.commentModel(title, description)
            await browser.sleep(2000)
            await reportPage.addAndClose()
            //await reportPage.addAndContinue()
            //await reportPage.cancel()
            await browser.sleep(2000)
            console.log("STEP 2: Select status_red for Quality and Add a new issue")
            await reportPage.selectStatus_btn('Quality').curval.click()
            await reportPage.statusYellow()
            await browser.sleep(2000)
            await reportPage.selectComment_btn('Quality').curval.click()
            await browser.sleep(5000)
            await reportPage.issueModel("New issue", "Desciption", "Action")
            await reportPage.clickResolvedIssue()
            await reportPage.addAndClose()
            await browser.sleep(2000)
            console.log("STEP 3: Select status_red for Effort")
            await reportPage.selectStatus_btn('Effort').curval.click()
            await reportPage.statusRed()
            await browser.sleep(2000)
            console.log("STEP 4: Select status_green for Resources ")
            await reportPage.selectStatus_btn('Resources').curval.click()
            await reportPage.statusGreen()
            await browser.sleep(2000)
            console.log("STEP 5: Add new business opportunity ")
            await reportPage.businessOpportunity("tram", "resolve", "unknown","unknown", "unknown")
            console.log("STEP 6 : Add new improvements/initiatives")
            await reportPage.improveComment("hello")
            console.log("STEP : Add new Project Highlight")
            await reportPage.projectHighlightComment("Highlight")
            console.log("STEP 7: Add new Other Activities")
            await reportPage.otherActivitiesComment("Say yes")
            console.log("STEP 8: Resubmit report")
            await reportPage.reportSubmitCur()
        })
        it("Delete customer at 2nd row ", async function(){
            await loginPage.loginPage("tttoai", "1234")
            await loginPage.loginSuccess()
            await reportPage.deleteBusinessOpportunity(4)
            await browser.sleep(2000)
            await reportPage.deleteWarning()
            await reportPage.deleteClickOK()
            await browser.sleep(5000)
        })

        fit("Test some function", async function(){
            await loginPage.loginPage("tttoai", "1234")
            await loginPage.loginSuccess()
            await reportPage.selectComment_btn("Quality").curval.click()
            await reportPage.issueModel("dfdf", "dffd", "dffsfd")
            await reportPage.addAndClose()
            await browser.sleep(5000)
        })
})
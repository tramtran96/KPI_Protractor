import { LoginPage } from "../PageObjects/LoginPage";
import { ReportPage } from "../PageObjects/ReportPage";
import { browser} from "protractor";

describe("Report Page", function(){
    let loginPage: LoginPage
    let reportPage: ReportPage

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        reportPage = new ReportPage(browser)
        await browser.manage().window().maximize()
        await browser.get("http://10.1.0.62/kpi/#/")
        await loginPage.loginPage("qhanh", "1234")
        await loginPage.loginSuccess()
    })
    it("Select week by start date ", async function(){
        let year = "2019"
        let week = "20"
        await reportPage.selectStartDate(year, week)
        await reportPage.selectStartDateSuccess(week)
    })
 
    it("Select week by end date ", async function(){
        let year = "2019"
        let week = "20"
        await reportPage.selectEndDate(year, week)
        await reportPage.selectEndDateSuccess(week)
    })

    it("Submit report of previous week", async function(){
        let txt = "Added the comment successfully"
        let sche = 'Schedule'
        let title = "New comment"
        let description = "Desciption"
        let action = "click"
        console.log("STEP 1: Select status_yellow for Schedule and Add a new comment")
        await reportPage.selectStatus(sche, 3)
        await browser.sleep(2000)
        await reportPage.statusYellow()
        await browser.sleep(2000)
        await reportPage.selectComment(sche, 3)
        await reportPage.addComment()
        await browser.sleep(2000)
        await reportPage.commentModel(title, description)
        await browser.sleep(2000)
        await reportPage.addAndClose()
        await browser.sleep(2000)
        console.log("STEP 2: Select status_red for Quality and Add a new issue")
        await reportPage.selectStatus('Quality', 3)
        await reportPage.statusYellow()
        await browser.sleep(2000)
        await reportPage.selectComment('Quality', 3)
        await browser.sleep(5000)
        await reportPage.issueModel("New issue", "Desciption", "Action")
        await reportPage.clickResolvedIssue()
        await reportPage.addAndClose()
        await browser.sleep(2000)
        console.log("STEP 3: Select status_red for Effort")
        await reportPage.selectStatus('Effort', 3)
        await reportPage.statusRed()
        await browser.sleep(2000)
        console.log("STEP 4: Select status_green for Resources ")
        await reportPage.selectStatus('Resources', 3)
        await reportPage.statusGreen()
        await browser.sleep(2000)
        console.log("STEP 5: Add new business opportunity ")
        await reportPage.businessOpportunity("tram", "VitalQIP Development", "resolve", "unknown", "unknow", "unknown","09/08/2019", "unknown")
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
    
    it("Submit report of current week", async function () {
        let txt = "Added the comment successfully"
        let sche = 'Schedule'
        let title = "New comment"
        let description = "Desciption"
        console.log("STEP 1: Select status_yellow for Schedule and Add a new comment")
        await reportPage.selectCurrentRole("Project Head")
        await reportPage.selectRoleSuccesss("Project")
        await reportPage.selectStatus(sche, 4)
        await browser.sleep(2000)
        await reportPage.statusRed()
        await browser.sleep(2000)
        await reportPage.selectComment(sche, 4)
        await reportPage.addComment()
        await browser.sleep(2000)
        await reportPage.commentModel(title, description)
        await browser.sleep(2000)
        await reportPage.addAndClose()
        //await reportPage.addAndContinue()
        //await reportPage.cancel()
        await browser.sleep(2000)
        console.log("STEP 2: Select status_red for Quality and Add a new issue")
        await reportPage.selectStatus('Quality', 4)
        await reportPage.statusYellow()
        await browser.sleep(2000)
        await reportPage.selectComment('Quality', 4)
        await browser.sleep(5000)
        await reportPage.issueModel("New issue", "Desciption", "Action")
        await reportPage.clickResolvedIssue()
        await reportPage.addAndClose()
        await browser.sleep(2000)
        console.log("STEP 3: Select status_red for Effort")
        await reportPage.selectStatus('Effort', 4)
        await reportPage.statusRed()
        await browser.sleep(2000)
        console.log("STEP 4: Select status_green for Resources ")
        await reportPage.selectStatus('Resources', 4)
        await reportPage.statusGreen()
        await browser.sleep(2000)
        console.log("STEP 5: Add new business opportunity ")
        await reportPage.businessOpportunity("tram", "dgdgdg", "resolve", "unknown","unknown", "unknown", "09/08/2019", "unknown")
        console.log("STEP 6 : Add new improvements/initiatives")
        await reportPage.improveComment("hello")
        console.log("STEP : Add new Project Highlight")
        await reportPage.projectHighlightComment("Highlight")
        console.log("STEP 7: Add new Other Activities")
        await reportPage.otherActivitiesComment("Say yes")
        console.log("STEP 8: Resubmit report")
        await reportPage.reportSubmitCur()
    })
    it("Delete customer at 2nd row ", async function () {
        await reportPage.selectCurrentRole("Project")
        debugger
        await reportPage.deleteBusinessOpportunity(1)
        debugger
        await browser.sleep(2000)
        await reportPage.deleteWarning()
        debugger
        await reportPage.deleteClickOK()
        await browser.sleep(5000)
    })

    it("Select current role", async function () {
        await reportPage.selectCurrentRole("")
        await browser.sleep(5000)

    })

    it("Test some function", async function () {
        let n = 3
        await reportPage.switchPrevWeek(n)
        await reportPage.getLast4Weeks()
        await browser.sleep(5000)
    })

    it("gdgdgdg", async function () {
        let projectname = "CC-IC/OA"
        await reportPage.selectCurrentRole("Project Head")
        await reportPage.selectRoleSuccesss("Project")
        await reportPage.selectProject(projectname)
        let check = await reportPage.checkProjectName(projectname)
        if (check == 1) {
            await reportPage.selectProject(projectname)
            await browser.sleep(3000)
            await reportPage.selectProjectSuccess(projectname)
            await reportPage.selectStatus("Quality", 4)
            await browser.sleep(5000)
        }
        else
            console.log("NOT FIND PROJECT NAME")
        await reportPage.getLast4Weeks()
    })
    fit("", async function(){
        let role = "VitalSuite Head"
        let programname = "VitalSuite CE"
        // await reportPage.selectCurrentRole(role)
        // await reportPage.selectProgramRoleSuccess(role)
        await reportPage.selectComment("Schedule", 4)
        // await reportPage.selectProgram(programname)
        await reportPage.commentModel("fgfgfg", "vvvv")
        // await reportPage.addAndContinue()
        // await reportPage.addIssue()
        // await reportPage.issueModel("dffd", "Fdf", "sdsds")
        await reportPage.addAndClose()
        await reportPage.ViewIssueCommentModel()
        await reportPage.countIssueComnent()
        //await reportPage.closeViewIssueModel()
        await reportPage.checkIssueComment()
        // await reportPage.addBusinessOpport()
        // await reportPage.selectProjectReport(programname)
       // await reportPage.businessOpportunity("tram", "VitalSuite CE", "resolve", "unknown", "unknow", "unknown", "unknown", "unknown")
        await browser.sleep(10000)
        //let n = 3
        //await reportPage.switchPrevWeek(n)
        //await reportPage.getLast4Weeks()
        // await reportPage.switchNextWeek(2)
        // console.log("STEP 5: Add new business opportunity ")
        // await reportPage.businessOpportunity("tram", "VitalQIP Development", "resolve", "unknown", "unknow", "unknown", "unknown")
        // console.log("STEP 6 : Add new improvements/initiatives")
        // await reportPage.improveComment("hello")
        // console.log("STEP : Add new Project Highlight")
        // await reportPage.projectHighlightComment("Highlight")
        // console.log("STEP 7: Add new Other Activities")
        // await reportPage.otherActivitiesComment("Say yes")
        // await reportPage.selectComment("Schedule", 4)
        // await reportPage.addComment()
        // for (let i=0; i<4; i++){
        //     await reportPage.commentModel("title", "description")
        //     await reportPage.addAndContinue()
        // }
        // await reportPage.commentModel("title", "description")
        // await reportPage.addAndClose()
        // await reportPage.ViewIssueCommentModel()
        //await browser.sleep(10000)
        

    })

})
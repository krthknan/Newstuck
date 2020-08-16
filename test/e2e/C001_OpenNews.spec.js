let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')

const common = new Common()
const locators = new Locators()
const library = new Library()

const userCredentials = browser.params.curatorCredentials

describe("Open a news",function () {

    beforeAll(function () {
        console.log("Case id : C001 started")
        common.openUrl(browser.params.url)
    })

    it('should able to log into application', function () {
        library.login(userCredentials)
    });

    it('should able to open the news in new tab', async function () {
        common.waitForElementAndClick(locators.newsHeader.first())
        let tabCount = await common.tabCount()
        common.switchToParentTab()

        expect(tabCount).toBe(2)
    });

    afterAll(function () {
        library.logout()
        console.log("Case id : C001 End")
    })

})
let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')

const common = new Common()
const locators = new Locators()
const library = new Library()

const userCredentials = browser.params.curatorCredentials

describe("Bookmark",function () {

    beforeAll(function () {
        console.log("Case id : C003 started")
        common.openUrl(browser.params.url)
    })

    it('should able to log into application', function () {
        library.login(userCredentials)
    });

    it('should able to create bookmark', async function () {
        common.waitForElementAndClick(locators.bookmarkIcon.first())
    });

    it('should display only bookmarked content', function () {
        common.waitForElementAndClick(locators.filterIcon)
        library.uncheckAllFilters(locators.filterOptions)
        library.checkFilter("bookmark")

        expect(locators.newsHeader.count()).toBeGreaterThan(0)
    });


    afterAll(function () {
        library.logout()
        console.log("Case id : C003 End")
    })

})
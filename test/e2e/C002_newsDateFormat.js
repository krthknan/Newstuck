let Common = require('./commonActions.js')
let Locators = require('./locators.js')
let Library = require('./commonLibraries.js')

const common = new Common()
const locators = new Locators()
const library = new Library()

const userCredentials = browser.params.curatorCredentials

describe("Date format verification",function () {

    beforeAll(function () {
        console.log("Case id : C002 started")
        common.openUrl(browser.params.url)
    })

    it('should able to log into application', function () {
        library.login(userCredentials)
    });

    it('should match the date format', async function () {
        let dateFormat = await common.getText(locators.dateInNewsTab.first())
        dateFormat = dateFormat.split('|')[0]
        dateFormat = dateFormat.trimEnd()
        expect(dateFormat).toMatch("[a-zA-z]{3} [a-zA-z]{3} (0[1-9]|[12]\\d|3[01]) [12]\\d{3} (?:(?:([01]?\\d|2[0-3]):)?([0-5]?\\d):)?([0-5]?\\d)")
    });

    afterAll(function () {
        library.logout()
        console.log("Case id : C002 End")
    })

})
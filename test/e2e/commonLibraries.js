let Common = require('./commonActions.js')
let Locators = require('./locators.js')

const common = new Common()
const locators = new Locators()

let commonLibrary = function () {

    this.login = function (credentials) {
        common.clearAndEnterValues(locators.userIdTxtBox,credentials.username)
        common.clearAndEnterValues(locators.passwordTxtBox,credentials.password)
        common.waitForElementAndClick(locators.loginBtn)
    }

    this.logout = function () {
        common.waitForElementAndClick(locators.userIcon)
        common.waitForElementAndClick(locators.logoutBtn)
    }

    this.uncheckAllFilters = function (el) {
        el.each(function (filter) {
            common.waitForElementAndClick(filter)
        })
    }

    this.checkFilter = function (filterValue) {
        common.waitForElementAndClick(element(by.id(""+filterValue+"")))
    }
}

module.exports = commonLibrary;
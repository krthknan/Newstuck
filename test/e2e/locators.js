let locators = function () {

    this.userIdTxtBox = element(by.css("[placeholder='User ID']"))
    this.passwordTxtBox = element(by.css("[placeholder='Password']"))
    this.loginBtn = element(by.css("[value='Login']"))

    this.userIcon = element(by.css(".userIcon i"))
    this.logoutBtn = element.all(by.css(".profile-option li")).last()

    this.newsHeader = element.all(by.css(".form-check-label a"))

    this.dateInNewsTab = element.all(by.css(".details li"))

    this.bookmarkIcon = element.all(by.css(("[title='Bookmark']")))
    this.filterIcon = element(by.css("[title='Filter']"))
    this.filterOptions = element.all(by.css(".statusfilter-option [type='checkbox']"))
}

module.exports = locators
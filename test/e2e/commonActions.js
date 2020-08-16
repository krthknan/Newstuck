var waitInMilliSeconds = browser.params.waitInMilliSeconds;

var common = function () {

    var that = this;

    this.openUrl = function (url) {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.get(url);
    }

    this.waitForElementPresent = function (el) {
        browser.wait(protractor.ExpectedConditions.presenceOf(el), waitInMilliSeconds, 'Element taking too long to appear in the DOM');
    }

    this.waitForElementVisible = function (el) {
        browser.wait(protractor.ExpectedConditions.presenceOf(el), waitInMilliSeconds, 'Element taking too long to appear in the DOM');
        browser.wait(protractor.ExpectedConditions.visibilityOf(el), waitInMilliSeconds, 'Element is taking too long to Visible in the DOM');
    }

    this.waitForElementClickable = function (el) {
        browser.wait(protractor.ExpectedConditions.presenceOf(el), waitInMilliSeconds, 'Element taking too long to appear in the DOM');
        browser.wait(protractor.ExpectedConditions.visibilityOf(el), waitInMilliSeconds, 'Element is taking too long to Visible in the DOM');
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(el), waitInMilliSeconds, 'Element is not clickable');
    }

    this.clearAndEnterValues = function (el, txt) {
        that.waitForElementPresent(el)
        el.clear()
        el.sendKeys(txt)
    }

    this.waitForElementAndClick = function (el) {
        that.waitForElementClickable(el)
        el.click()
    }

    this.tabCount = function () {
        return browser.getAllWindowHandles().then(function (handles) {
            return handles.length
        })
    }

    this.getText = function (el) {
        that.waitForElementClickable(el)
        return el.getText().then(function (text) {
            return text;
        })
    }

    this.getTextAndRemoveSpaces = function (el) {
        that.waitForElementClickable(el)
        return el.getText().then(function (text) {
            return text.replace(/\s/g, "");
        })
    }

    this.switchToParentTab = function () {
        browser.getAllWindowHandles().then(function (tabs) {
            browser.driver.switchTo().window(tabs[0])
        })
    }
};

module.exports = common;
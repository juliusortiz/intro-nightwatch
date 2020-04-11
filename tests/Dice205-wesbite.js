module.exports = {
    "Step 1: Navigate to dice205.com": function(browser) {
        browser
            .url("https://www.dice205.com/")
            .click('#privacy-accept')
            .waitForElementVisible("body")
            .assert.titleContains("DICE205")
            .assert.visible(
                "div.main-container.container-fluid:nth-child(4) div.section-container div.home.page-template-default.page.page-id-294.responsive-menu-push-left div.hfeed.site div.atf.clear.atf-clear div.title.shown.title-shown div.cntna a:nth-child(3) > img.slogan-image"
            )
    },
    "Step 2: Navigate to 'OUR SOLUTIONS' page": function(browser) {
        browser
            .click('#nav-our-solutions')
            .assert.visible('#goto-automation-button')
    },
    "Step 3: Select 'HIPSTER GRAPHIC ARTIS' avatar then click start to proceed to game board UI": function(browser) {
        browser
            .click('div.section-container:nth-child(3) div:nth-child(1) div:nth-child(2) div.select-character-container:nth-child(1) > div.select-character-1:nth-child(1)')
            .click('#goto-automation-button')
            .assert.visible('#character')
            .assert.visible('#solutions-tiles')
    },
    "Step 4: Navigaute to 'OUR PARTNERS' page": function(browser) {
        browser
            .click('#nav-our-partners')
            .assert.visible('#character')
            .assert.visible('#partners-tiles')
    },
    "Step 5: Navigate to 'CONTACT US' page": function(browser) {
        browser
            .useXpath()
            .click("//body/header[@class='site-header']/nav[@id='site-nav']/ul/li[4]/a[1]")
            .useCss()
            .assert.visible('body:nth-child(2) div.section-container:nth-child(5) div:nth-child(1) > div.contact-us-map-container:nth-child(1)')
            .useXpath()
            .assert.visible("//input[@id='btn-send-email']")
    },
};
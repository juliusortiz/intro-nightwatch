module.exports = {
    'Step one: navigate to ecosia.org': function(browser) {
        browser
            .url('https://www.ecosia.org/')
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .end()
    },

    'Step two: navigate to facebook.com': function(browser) {
        browser
            .url('https://web.facebook.com/?_rdc=1&_rdr')
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .end()
    },
};
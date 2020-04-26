module.exports = {
  commands: [{
      accountManagementtoUserAccounts() {
          return this
          .verify.visible('@accountManagementTab').click('@accountManagementTab')
          .verify.visible('@userAccountsTab').click('@userAccountsTab')
          .verify.containsText('@userAccountsTabHeader', 'User Accounts')
      },
      accountManagementtoApproverMatrix() {
        return this
        .verify.visible('@accountManagementTab').click('@accountManagementTab')
        .verify.visible('@userAccountsTab').click('@userAccountsTab')
        .verify.containsText('@userAccountsTabHeader', 'User Accounts')
    }

  }],
  elements: {
      accountManagementTab: {
        selector: "//a[contains(text(),'Account Management')]",
        locateStrategy: "xpath"
      },
      userAccountsTab: {
          selector: "//a[contains(text(),'User Accounts')]",
          locateStrategy: "xpath"
      },
      userAccountsTabHeader: {
        selector: "//h1[contains(text(),'User Accounts')]",
        locateStrategy: "xpath"
    },
  },
};

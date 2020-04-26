module.exports = {
  '@tags': ['AccountManagement'],

  'Test case => Login: CpAdmin': function (browser) {
    const loginFeature = browser.page.jfcLoginObjects();
      loginFeature.navigate().loginAdmin()
  },

  'Test case => Account Management > Navigate to User Accounts Tab': function (browser) {
    const navigate = browser.page.jfcPageNavigationObjects()
    navigate.accountManagementtoUserAccounts()
  },

  'Test case => Account Management > User Accounts > Add User': function (browser) {
    const navigate = browser.page.jfcPageNavigationObjects()
    navigate.accountManagementtoUserAccounts()
  },



















  'Test case => Logout: CpAdmin': function (browser) {
    const logoutFeature = browser.page.jfcLogoutObjects();
      logoutFeature.logoutAdmin()
  },

 


};  
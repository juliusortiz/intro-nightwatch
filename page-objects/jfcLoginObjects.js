module.exports = {
  commands: [{
    loginAdmin() {
      return this
      .verify.titleContains('SB Admin 2 - Bootstrap Admin Theme')
      .verify.visible('@userNameField')
      .verify.visible('@passwordField')
      .verify.visible('@loginButton')
      .setValue('@userNameField', 'jim.alabastro3p@jws.com.ph')
      .setValue('@passwordField', 'test')
      .click('@loginButton')
      .verify.containsText('@landingPage', 'Welcome to the Administration Dashboard')
    },
  }],
  url: 'https://jfc-ihr-qa.herokuapp.com/cpadmin',
  elements: {
    userNameField: {
      selector: "//input[@placeholder='Username']",
      locateStrategy: "xpath",
    },
    passwordField: {
      selector: "//input[@placeholder='Password']",
      locateStrategy: "xpath",
    },
    loginButton: {
      selector: "//button[@class='btn btn-lg btn-success btn-block']",
      locateStrategy: "xpath",
    },
    landingPage: {
      selector: "//h1[contains(text(),'Welcome to the Administration Dashboard')]",
      locateStrategy: "xpath",
    },
  },
};









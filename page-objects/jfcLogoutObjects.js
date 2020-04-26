module.exports = {
    commands: [{
      logoutAdmin() {
        return this
        .verify.visible('@profileDropdown').click('@profileDropdown')
        .verify.visible('@logoutButton').click('@logoutButton')
        .verify.containsText('@alertLogout', 'Successfully Logged out')
      }
    }],
    elements: {
      profileDropdown: {
        selector: "//a[@class='dropdown-toggle']",
        locateStrategy: "xpath",
      },
      logoutButton: {
        selector: "//a[contains(text(),'Logout')]",
        locateStrategy: "xpath"
      },
      alertLogout: {
        selector: "//div[@class='alert alert-success']",
        locateStrategy: "xpath"
      }
    },
  };
  
  
  
  
  
  
  
  
  
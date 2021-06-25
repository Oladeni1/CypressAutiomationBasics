/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'


describe.skip('iFrame ', function () {

  it('Do Handling iFrame in cypress', function () {

    cy.visit("https://www.zkoss.org/zkdemo/composite/iframe")
    cy.iframeLoaded("//*[@class='z-iframe']")
    cy.iframe().find('#search-box').click()

    })
    
  })



//Note:To use the method, you need to install ifame on the project
// > npm install - D cypress-iframe
// load the reference - /// <reference types="cypress-iframe"/>
//import package: import 'cypress-iframe'

/// <reference types="Cypress"/>

describe('My First Test', function () {

  it('Switch To New Window Tab', function () {

    cy.visit("http://qaclickacademy.com/practice.php/")

    //Note: Cypress does not support switching between windows parent or child,
    //but there is a workaround implementation by cypress to remove DOM attribute => target
    //that launches browser in another tab, removing this DOM attribute will cause the browser 
    //to remain on active tab. its a jquery function => removeAttr:

    //New implementation:
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open', url => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().baseUrl + url;
      }).as("popup") // alias it with popup, so we can wait refer it with @popup
    })

    // Click button which triggers javascript's window.open() call
    cy.get("#opentab").click()

    // Make sure that it triggered window.open function call
    //cy.get("@popup").should("be.called")

    // Now we can continue integration testing for the new "popup tab" inside the same tab
    cy.url().should('include', 'rahulshettyacademy')
    //cy.get('a.btn.btn-theme.btn-sm.btn-min-block').click()

    //PageAssertion:
    //cy.get("h1").should('include', 'Sign Up to Rahul Shetty Academy')








    //fixture
  })
})
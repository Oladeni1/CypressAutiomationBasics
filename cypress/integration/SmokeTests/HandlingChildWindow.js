/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do Handling of Child Wimdow', function() {

        cy.visit("http://qaclickacademy.com/practice.php/")

      //Note: Cypress does not support switching between windows parent or child,
      //but there is a workaround implementation by cypress to remove DOM attribute => target
      //that launches browser in another tab, removing this DOM attribute will cause the browser 
      //to remain on active tab. its a jquery function => removeAttr:

      cy.get('#opentab').invoke('removeAttr', 'target').click()

      //assert current url  
      cy.url().should('include', 'rahulshettyacademy')

      //Join Now Button:
      //cy.get('.col-md-6 > div > .btn').click()

      //PageAssertion:
      //cy.get("h1").should('include', 'Sign Up to Rahul Shetty Academy')

      //Nav back to previous url
      cy.go('back')

      //assert previous url
      cy.url().should('include', 'academy')








        //fixture
    })
})
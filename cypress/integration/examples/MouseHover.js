/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
//Mouse Hovering in Cypress: Use of Jquery is implemented with "invoke/show" method
cy.get('div.mouse-hover-content').invoke("show")
cy.contains('Top').click()
//Assert url include "top"
cy.url().should('include', 'top')


        //fixture
    })
})
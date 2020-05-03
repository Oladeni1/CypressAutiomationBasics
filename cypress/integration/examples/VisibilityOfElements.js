/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do Visibility of elements', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
//Handling visible and invisible elements:-
 //Handling visibility of element and assertion:
 cy.get('#show-textbox').click()
 cy.get('#displayed-text').should('be.visible') //assert element is present

 //Handling invisibility of an element and assertion:
 cy.get('#hide-textbox')
 cy.get('#hide-textbox').click()
 cy.get('#displayed-text').should('not.be.visible') // assert that element is no displayed

 
        //fixture
    })
})
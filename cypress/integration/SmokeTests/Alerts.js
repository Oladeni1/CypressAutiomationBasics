/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do alert!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Global element alias declaration:
    cy.get('#alertbtn').as('AlertButton')
    cy.get('#confirmbtn').as('ConfirmButton')
 
//Handling alert popup:- Note: Cypress automatically handle alert popups

cy.get('@AlertButton').click() //click alert button
//Alert text assertion:
cy.on('window:alert', (str) => 
{
expect(str).to.equal('Hello , share this practice page and share your knowledge')
})


cy.get('@ConfirmButton').click() //click confirm button
//Alert text assertion:
cy.on('window:confirm', (strg) => 
{
expect(strg).to.equal('Hello , Are you sure you want to confirm?')

})

//fixture
    })
})
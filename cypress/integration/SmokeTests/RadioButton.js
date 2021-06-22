/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do Radio button test', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
//RadioButton
//check radio button 1 and assert that radio1 is the text:
cy.get('input[type="radio"]').check(['radio1']).should('have.value','radio1').and('be.checked')


        //fixture
    })
})
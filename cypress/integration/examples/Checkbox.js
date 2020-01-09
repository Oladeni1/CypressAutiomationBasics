/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Declear Elements as alias:
        cy.get('#checkBoxOption1').as('CheckBox1')
        cy.get('input[type= "checkbox"]').as('CheckBoxes')
        
      //checkbox:
        //check the checkbox and assert its checked and assert it has text of Option1
        cy.get('@CheckBox1').check().should('be.checked').and('have.value','option1').then(function()
        {
        //Uncheck the checkbox and assert its unchecked and assert it has text of Option1
        cy.get('@CheckBox1').uncheck().should('not.be.checked').and('have.value','option1')
        })
        //check the checkboxes 2 and 3 and assert they are checked
         cy.get('@CheckBoxes').check(['option2', 'option3']).should('be.checked').and('be.checked')
      

        //fixture
    })
})
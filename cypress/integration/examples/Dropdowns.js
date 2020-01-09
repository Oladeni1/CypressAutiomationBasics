/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
//Dropdown:
       //select the option2 from dropdown and assert option2 is displayed
        cy.get('select').select('option2').should('have.value', 'option2')


//dynamic dropdowns:
// Type value into the textfield:
cy.get('#autocomplete').type('Nig') 

//Loop thru values country in the dropdown:
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    if($el.text() === 'Nigeria')
    {
    $el.click()
    }
})

//assert that text Nigeria is displayed:
    cy.get('#autocomplete').should('have.value','Nigeria') 





        //fixture
    })
})
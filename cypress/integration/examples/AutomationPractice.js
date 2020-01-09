/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      //checkbox:
        //check the checkbox and assert its checked and assert it has text of Option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1').then(function()
        {
        //Uncheck the checkbox and assert its unchecked and assert it has text of Option1
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        })
        //check the checkboxes 2 and 3 and assert they are checked
         cy.get('input[type= "checkbox"]').check(['option2', 'option3']).should('be.checked').and('be.checked')
      
//Dropdown:
       //select the option2 from dropdown and assert option2 is displayed
        cy.get('select').select('option2').should('have.value', 'option2')

//RadioButton
//check radio button 1 and assert that radio1 is the text:
cy.get('input[type="radio"]').check(['radio1']).should('have.value','radio1').and('be.checked')

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


//Handling visible and invisible elements:-

 //Handling visibility of element and assertion:
 cy.get('#show-textbox').click()
 cy.get('#displayed-text').should('be.visible') //assert element is present

 //Handling invisibility of an element and assertion:
 cy.get('#hide-textbox')
 cy.get('#hide-textbox').click()
 cy.get('#displayed-text').should('not.be.visible') // assert that element is no displayed

 
//Handling alert popup:-

//Note: Cypress automatically handle alert popups
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()







       
       


        //fixture
    })
})
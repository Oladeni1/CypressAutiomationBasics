/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Multiselect dropdown', function() {

       cy.visit("http://demo.automationtesting.in/Register.html")
       cy.url().should('include', 'demo')
       cy.get('#msdd').click()
       cy.get('.ui-corner-all').contains('English').click()
       cy.get('.ui-corner-all').contains('Japanese').click()
       cy.get('.ui-corner-all').contains('Filipino').click()
       cy.get('.ui-corner-all').contains('Turkish').click()
       cy.get('.ui-corner-all').contains('French').click()
      
    })

    it('Select Country', function() {
     
      cy.get('[role=combobox]').click({force: true})  //force click action
      cy.get('[type=search]').type('Jap').type('{enter}') // Search for Jap and click keyboard Enter
    })
    
    it('Select DateOfBirth', function() {
     
      cy.get('#yearbox').select('1976').should ('have.value', '1976') // Select birth year
      cy.get('[placeholder=Month]').select('July').should ('have.value', 'July') //Select birth month
      cy.get('#daybox').select('19').should ('have.value', '19') // Select birth day

})
})

/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do Confirm alert!', function() {

        cy.visit("https://testautomationpractice.blogspot.com")

       cy.get('#HTML9 > div.widget-content > button').click() //click alert button - Click Me

//Alert text assertion:
       cy.on('window: confirm', (str) => 
{
        expect(str).to.equal('Press a button!')
})

//fixture
    })
})
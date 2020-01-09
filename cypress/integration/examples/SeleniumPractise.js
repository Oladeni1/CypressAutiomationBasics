/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000) //wait for 2sec
        cy.get('.product:visible').should("have.length", 4)  //assertion

        //Global declearation elements (as) alias and call them when needed:
        cy.get('.products').as('ProductLocator') //Declering Alias for an products element locator
        cy.get('p > strong').as('TitleLocator') //Declering Alias for an title element locator

        cy.get('@ProductLocator').find('.product').should("have.length", 4)
        cy.get('@ProductLocator').find('.product').eq(2).contains('ADD TO CART').click()

        //Using product text name to add product to basket
        cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {
            const Vegtext = $el.find('h4.product-name').text()
            if(Vegtext.includes('Cashews'))
            {
            $el.find('button').click()
            } 
        })
        cy.get('@TitleLocator').then(function(logoelement)
        {
        cy.log(logoelement.text()) //get title
        })
        // Assertion to check expected equals actual:
        cy.get('@TitleLocator').should('have.text', 'GreenKart')  

        //click checkout bag
        //cy.get('.cart-icon > img').click()
        
        //Click proceed to checkout
        //cy.contains('PROCEED TO CHECKOUT').click()  

        //Click play order button
        //cy.contains('Place Order').click() 
       


        //fixture
    })
})
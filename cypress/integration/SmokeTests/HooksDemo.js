/// <reference types="Cypress"/>

describe('Hooks Implementation', function() {

    //Block of Hooks:

    before(function() {
        // runs once before all tests in the block
        cy.log('*****This is SetUp block*****')
      })
    
      after(function() {
        // runs once after all tests in the block
        cy.log('*****This is TearDown block*****')
      })
    
      beforeEach(function() {
        // runs before each test in the block
        cy.log('*****This is LogIn block*****')
        
      })
    
      afterEach(function() {
        // runs after each test in the block:
        cy.log('*****This is LogOut block*****')
        
      })
        //Block of tests:

        it('Search for Products', function() {

        cy.log('*****This is Searching for Products test*****')
           
    })
        it('Add Products to Basket', function() {

        cy.log('*****This is Add Products to Basket test*****')
      
    })
        it('Check Out', function() {

        cy.log('*****This is Check Out test*****')
     
    })
        it('Add Card Details', function() {

        cy.log('*****This is Add Card Details test*****')
           
    })
    it('Pay for products', function() {

        cy.log('*****This is Payment for Products test*****')
      
    })
 
})
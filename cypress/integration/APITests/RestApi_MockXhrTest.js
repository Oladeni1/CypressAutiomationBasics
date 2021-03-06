/// <reference types="Cypress" />

describe('Mock API Suite', function() 
{
    


    it('Mock API_XHR Test', function() {

    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.server()
    cy.route(
        {
         method: 'PUT',
         url: 'comments/*',
         status: 404,
         response:{
             error: 'Hey! Ola, you are mocking API server'
         },
         delay: 1000,

    }).as('UpdateComment')

    cy.get('.network-put').click()
    cy.get('.network-put-comment').should('contain', 'Hey! Ola, you are mocking API server')

    })
})

/// <reference types="Cypress" />

var origin = require('../../fixtures/origin.json')

describe('API_Fixture Suite', function() 
{  
    it('fixture', function() {
    cy.fixture('origin').then(function(origin){
    expect(status).to.eq(200)
    expect(origin).to.deep.equal("92.23.82.78")
    expect(origin.url).to.have("https://httpbin.org/get")
    expect(headers.Accept).to.have("application/json")
    })  
            
})

})

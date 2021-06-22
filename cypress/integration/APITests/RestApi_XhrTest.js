/// <reference types="Cypress" />

describe('API_XHR Suite', function() 
{
    


    it('REST API Test XHR', function() {

    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

        "name":"Learn Appium Automation with Java",
        "isbn":"bcdctw",    //NOTE!:both isbn an aisle must be changed for this test to pass
        "aisle":"2375",
        "author":"John foe"

        }).then(function(response){

            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.eq(200)
            
        })

    })
})

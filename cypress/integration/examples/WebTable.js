/// <reference types="Cypress"/>

describe('My First Test', function() {

    it('Do something nice!', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
//Managing web table:
cy.get('tr td:nth-child(2)').each(($el, indext, $list) =>{

    var text = $el.text()
    if(text.includes('Python'))
    {
    cy.get('tr td:nth-child(2)').eq(indext).next().then(function(price)
    {
     var priceText = price.text()
     expect(priceText).to.equal('25')
    })
}
       
})

//fixture
    })
})

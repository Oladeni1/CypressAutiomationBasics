/// <reference types="Cypress"/>

describe('iFrame ', function () {

  it('Do Handling iFrame in cypress', function () {

    cy.visit("https://www.zkoss.org/zkdemo/composite/iframe")
    cy.xpath("//*[@class='z-iframe']").then(function ($ele) {
      var ifele = $ele.contents().find('#search-box')
      cy.wrap(ifele).click()
    })
    //fixture
  })
})
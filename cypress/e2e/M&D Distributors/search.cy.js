/// <reference types="Cypress" />





describe ("Test Search functionality", () => {
    beforeEach("Navigate to Home Page", () => {
        cy.visit('/');
        cy.viewport(1920, 1080)
      });


    it("Search for a SKU or product", () => {
    
             
      // cy.xpath("(//div[@class='searchbox__container'])[1]").click().type('caterpillar{enter}')

      // cy.wait(5000)


      // cy.xpath("(//span[contains(text(),'Results')])[1]").should('have.text', 'Results 1-10 of 1,859 for caterpillar')
      // cy.xpath("(//lightning-formatted-text[contains(text(),'Sort by')])[1]").should('exist')
      // cy.xpath("(//lightning-formatted-text[contains(text(),'Show')])[1]").should('exist')


      
      
      // cy.xpath("(//span[@class='slds-truncate'][normalize-space()='10 Results'])[1]").click()

      // cy.wait(2000)

      // cy.xpath("(//lightning-layout-item)[4]").click()
     

    
    })
    
})

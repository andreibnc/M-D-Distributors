/// <reference types="Cypress" />





describe ("Log in and  page links", () => {
    beforeEach("visit login page", () => {
        cy.visit('https://mddistributors--ecomdev.sandbox.my.site.com/commerce/login');
      });


    it("User Registration Form", () => {


        cy.xpath("//a[normalize-space()='Not a member?']").click()

        cy.xpath("//div[@aria-label='Logo']").should('exist')

        cy.xpath("//h1[normalize-space()='User Registration']").should('have.text', 'User Registration')

        cy.xpath("//label[normalize-space()='First Name']").should('have.text', 'First Name')

        cy.xpath("//input[@id='input-22']")

        cy.xpath("(//label[@for='input-23'])[1]").should('exist')

        cy.xpath("(//input[@id='input-23'])[1]")

        cy.xpath("//label[@for='input-24']").should('exist')

        cy.xpath("(//input[@id='input-24'])[1]")

        cy.xpath("//button[normalize-space()='Sign Up']").should('have.text', 'Sign Up')

        cy.xpath("//a[normalize-space()='Already have an account?']").should('have.text', 'Already have an account?')

        cy.xpath("//a[normalize-space()='Already have an account?']").click()

        cy.url().should('eq', 'https://mddistributors--ecomdev.sandbox.my.site.com/commerce/login')

    })


    
    
})
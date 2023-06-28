/// <reference types="Cypress" />





describe ("Log in and  page links", () => {
    beforeEach("visit login page", () => {
        cy.visit('https://mddistributors--ecomdev.sandbox.my.site.com/commerce/login');
      });


    it("Invalid Login - No Username", () => {
    
        // Invalid Login - No Username
                 
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[1]/div[1]/div[1]/input[1]").click()
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[2]/div[1]/div[1]/input[1]").click().type("Parola2023!")
        cy.xpath("(//button[normalize-space()='Log In'])[1]").click()

        cy.xpath("(//span[normalize-space()='Enter a value in the User Name field.'])[1]").should('have.text', 'Enter a value in the User Name field.')
        
    })
        
    
    it("Invalid Login - No Password", () => {

        // Invalid Login - No Password

        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[1]/div[1]/div[1]/input[1]").click().type("aboncu@shift7digital.com.mddev")
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[2]/div[1]/div[1]/input[1]").click()
        cy.xpath("(//button[normalize-space()='Log In'])[1]").click()

        cy.xpath("(//span[normalize-space()='Enter a value in the Password field.'])[1]").should('have.text', 'Enter a value in the Password field.')

    })

    it("Invalid Login - Wrong Username", () => {

        // Invalid Login - Wrong Username

        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[1]/div[1]/div[1]/input[1]").click().type("wrongusername@shift7digital.com.mddev")
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[2]/div[1]/div[1]/input[1]").click().type("Parola2023!")
        cy.xpath("(//button[normalize-space()='Log In'])[1]").click()

        cy.xpath("(//span[contains(text(),'Your login attempt has failed. Make sure the usern')])[1]").should('have.text', 'Your login attempt has failed. Make sure the username and password are correct.')
    })

    it("Invalid Login - Wrong Password", () => {
        
        //Invalid Login - Wrong Password


        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[1]/div[1]/div[1]/input[1]").click().type("aboncu@shift7digital.com.mddev")
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[2]/div[1]/div[1]/input[1]").click().type("WrongPassword")
        cy.xpath("(//button[normalize-space()='Log In'])[1]").click()

        cy.xpath("(//span[contains(text(),'Your login attempt has failed. Make sure the usern')])[1]").should('have.text', 'Your login attempt has failed. Make sure the username and password are correct.')
    })
    
    it("Valid Login", () => {

         // Valid Login

        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[1]/div[1]/div[1]/input[1]").click().type("aboncu@shift7digital.com.mddev")
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/b2c_lite_commerce-external-layout[1]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[1]/div[1]/community_login-login-form[1]/div[1]/fieldset[1]/div[1]/lightning-input[2]/div[1]/div[1]/input[1]").click().type("Parola2023!")
        cy.xpath("(//button[normalize-space()='Log In'])[1]").click()

        cy.url().should('eq', 'https://mddistributors--ecomdev.sandbox.my.site.com/commerce/')

    })

    it("Verify page elements", () => {

        

        cy.get("div[aria-label='Logo']").should('exist')

        cy.xpath("//a[normalize-space()='Forgot your password?']").should('have.text','Forgot your password?')
        cy.xpath("//a[normalize-space()='Not a member?']").should('have.text', 'Not a member? ')


   })

   it("Forgot Password", () => {

           

    cy.xpath("//a[normalize-space()='Forgot your password?']").click()

    cy.url().should('eq', 'https://mddistributors--ecomdev.sandbox.my.site.com/commerce/ForgotPassword')

    cy.xpath("//h2[normalize-space()='Forgot your password?']").should('have.text', 'Forgot your password?')

    cy.xpath("//body//webruntime-app//lightning-formatted-text[1]").should('contain', "To reset your password, enter your username. We'll send a reset-password link to the email address associated with your account.")

    cy.xpath("//label[normalize-space()='Username']").should('have.text', 'Username')

    cy.xpath("//button[normalize-space()='Cancel']").should('have.text', 'Cancel')

    cy.xpath("(//input[@id='input-22'])[1]").click().type('aaa@mail.com')

    cy.xpath("//button[normalize-space()='Reset']").should('have.text', 'Reset')

    cy.xpath("//button[normalize-space()='Reset']").click()

    cy.xpath("//h2[normalize-space()='Now check your email']").should('have.text', 'Now check your email')

    cy.xpath("//lightning-formatted-text[contains(text(),'Check the email account associated with your usern')]").should('contain', "Check the email account associated with your username for the link to reset your password. If you didn't get an email, check your Spam folder. Or contact your administrator.")

    cy.xpath("//button[normalize-space()='Back to login']").should('exist')

    cy.xpath("//button[normalize-space()='Back to login']").should('have.text', 'Back to login')

    cy.xpath("//button[normalize-space()='Back to login']").click()

    cy.url().should('eq', 'https://mddistributors--ecomdev.sandbox.my.site.com/commerce/login')


    
    })


    
    
})

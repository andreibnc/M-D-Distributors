/// <reference types="Cypress" />





describe ("Verify Home Page components", () => {
    beforeEach("Navigate to the Home page", () => {
        cy.visit('/');
      });


    it("Test page components", () => {
    
        // Header

        cy.xpath("//header[@ref='header']").should('exist')
        cy.xpath("//p[@class='commerce_my_account-userProfileMenu_userProfileMenu slds-truncate login-text']").should('exist')
        cy.xpath("//lightning-icon[@class='commerce_my_account-userProfileMenu_userProfileMenu icon-color slds-icon-utility-user slds-icon_container']//lightning-primitive-icon//*[name()='svg']").should('exist')
        cy.xpath("//span[@title='Cart: empty']//*[name()='svg']").should('exist')


        cy.xpath("(//div[@aria-label='Logo'])[1]").should('exist')
        cy.get("dxp_content_layout-site-logo[class='dxp_content_layout-siteLogo_siteLogo-host'] a[class='dxp_content_layout-siteLogo_siteLogo']")
            .invoke('attr', 'href').should('eq' ,'/commerce/')
        cy.xpath("//span[normalize-space()='Shop all parts']").should('contain', 'Shop all parts')
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[1]/webruntime-component-container[1]/c-rocket-commerce-header[1]/header[1]/div[2]/div[1]/div[3]/slot[1]/c-quantic-standalone-search-box[1]/c-quantic-search-interface[1]/c-quantic-modal-a11y-handler[1]/slot[1]/slot[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").should('exist')
             
         // Category Navigation

        
        
         cy.xpath("//span[normalize-space()='Shop all parts']").should('have.text', 'Shop all parts')
         cy.xpath("//span[normalize-space()='Air Compressors']").should('have.text', 'Air Compressors')
         cy.xpath("//span[normalize-space()='Air Compressor Assemblies']").should('have.text','Air Compressor Assemblies')
         cy.xpath("//span[normalize-space()='Air Compressor Components & Gaskets']").should('have.text', 'Air Compressor Components & Gaskets')
         cy.xpath("//span[normalize-space()='Air Compressor Mounting Hardware, Hoses & Clamps']").should('have.text', 'Air Compressor Mounting Hardware, Hoses & Clamps')
         cy.xpath("//span[normalize-space()='Filter Oil / Air Separators']").should('have.text', 'Filter Oil / Air Separators')
         cy.xpath("//span[normalize-space()='Filter Separators / Desiccant Filters']").should('have.text', 'Filter Separators / Desiccant Filters' )
         cy.xpath("//span[normalize-space()='Air Systems']").should('have.text', 'Air Systems')
         cy.xpath("//span[normalize-space()='Aftercoolers/Inner Coolers/Charge Air Coolers']").should('have.text', 'Aftercoolers/Inner Coolers/Charge Air Coolers')
         cy.xpath("//span[normalize-space()='Aftercoolers/Inner Cooler Gaskets']").should('have.text', 'Aftercoolers/Inner Cooler Gaskets')
         cy.xpath("//span[normalize-space()='Air Filter Elements, Assemblies & Components']").should('have.text', 'Air Filter Elements, Assemblies & Components')
         cy.xpath("//span[contains(text(),'Air Inlet & Aftercooler Hump Hoses, Elbows & Clamp')]").should('have.text', 'Air Inlet & Aftercooler Hump Hoses, Elbows & Clamps')
         cy.xpath("//span[normalize-space()='Blowers (Roots Type) & Components']").should('have.text', 'Blowers (Roots Type) & Components')
         cy.xpath("//span[normalize-space()='Blower Drive Couplings']").should('have.text', 'Blower Drive Couplings')
         cy.xpath("//span[normalize-space()='Blower Drive Shafts']").should('have.text', 'Blower Drive Shafts')
         cy.xpath("//span[normalize-space()='Blower Repair Kits']").should('have.text', 'Blower Repair Kits')
         cy.xpath("//span[normalize-space()='Blower Rotor Bearings']").should('have.text', 'Blower Rotor Bearings')
         cy.xpath("//span[normalize-space()='Blower Shaft Seals']").should('have.text', 'Blower Shaft Seals')
         cy.xpath("//span[normalize-space()='Covers, End Plates, Gaskets & Seals']").should('have.text', 'Covers, End Plates, Gaskets & Seals')
         cy.xpath("//span[normalize-space()='Installation Gasket Kits']").should('have.text', 'Installation Gasket Kits')
         cy.xpath("//span[normalize-space()='Intake Screens & Gaskets']").should('have.text', 'Intake Screens & Gaskets')
         cy.xpath("//span[normalize-space()='Internal Shims, Spacers, Retainers, Etc.']").should('have.text', 'Internal Shims, Spacers, Retainers, Etc.')
         cy.xpath("//span[normalize-space()='Cabin Air Filter Elements']").should('have.text', 'Cabin Air Filter Elements')



        //Hero Banner

        cy.xpath("//div[@class='dxp_content_layout-blockContentRegion_blockContentRegion slds-grid height-full main-content-container']").should('exist')
        
        cy.xpath("//a[normalize-space()='800-658-9333']").should('contain', '800-658-9333')
        cy.xpath("//a[normalize-space()='800-658-9333']").invoke('attr', 'href').should('eq', 'tel:')
        cy.xpath("//p[normalize-space()='MONDAY-FRIDAY']").should('have.text', 'MONDAY-FRIDAY')
        cy.xpath("//p[normalize-space()='7:00 AM - 5:00PM (CST)']").should('have.text', '7:00 AM - 5:00PM (CST)')




        // Category Nav Tiles

        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[2]/div[3]/community_layout-column[1]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='CATERPILLAR']").should('have.text', 'CATERPILLAR')


        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[2]/div[3]/community_layout-column[2]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='CUMMINS']").should('have.text', 'CUMMINS')     
        
        
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[2]/div[3]/community_layout-column[3]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='DETROIT DIESEL']").should('have.text', 'DETROIT DIESEL')


        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/community_layout-section[2]/div[3]/community_layout-column[4]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='MACK']").should('have.text', 'MACK')


        cy.xpath("//webruntime-component-container[@class='webruntime-componentContainer_componentContainer-host']//community_layout-column[1]//div[1]//c-rckt-c-t-a-navigation-tile[1]//div[1]//div[1]//div[1]//a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='DODGE']").should('have.text', 'DODGE')


        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/webruntime-component-container[2]/community_layout-section[1]/div[3]/community_layout-column[2]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='FORD']").should('have.text', 'FORD')


        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[2]/webruntime-router-container[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/community_layout-slds-flexible-layout[1]/div[1]/webruntime-component-container[2]/community_layout-section[1]/div[3]/community_layout-column[3]/div[1]/c-rckt-c-t-a-navigation-tile[1]/div[1]/div[1]/div[1]/a[1]").should('exist')
        cy.xpath("//h2[normalize-space()='GM']").should('have.text', 'GM')


        // Split Banner

        cy.xpath("//div[@class='community_layout-column_column column-content']//c-md-split-banner").should('exist')

        


    })
    
})

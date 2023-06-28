/// <reference types="Cypress" />





describe ("Verify footer links", () => {
    beforeEach("visit home page", () => {
        cy.visit('/');
      });


    it("Footer text and links", () => {
    
        // Customer Service column

        cy.get(".commerce-layoutFooter_layoutFooter-host").scrollIntoView().should('exist')

        cy.get("div[class='community_builder-outputRichText_outputRichText cb-outputRichText-container ql-editor'] p strong").should('have.text','Customer Service')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(1) > div:nth-child(1) > community_builder-output-rich-text:nth-child(1) > div:nth-child(1) > p:nth-child(3) > span:nth-child(1)").should('have.text','800-658-9333')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(1) > div:nth-child(1) > community_builder-output-rich-text:nth-child(1) > div:nth-child(1) > p:nth-child(4) > span:nth-child(1)").should('have.text','ecominfo@mddistributors.com')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(1) > div:nth-child(1) > community_builder-output-rich-text:nth-child(1) > div:nth-child(1) > p:nth-child(5) > span:nth-child(1)").should('have.text', 'Contact Us')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(1) > div:nth-child(1) > community_builder-output-rich-text:nth-child(1) > div:nth-child(1) > p:nth-child(6) > span:nth-child(1)").should('contain', 'Track Order')
    

        // Support Column

        cy.get("b2c_lite_commerce-link-list[class='component-wrapper-spacer b2c_lite_commerce-linkList_linkList-host'] h3[class='b2c_lite_commerce-linkList_linkList heading']").should('have.text', 'Support')

        cy.get("b2c_lite_commerce-link-list[class='component-wrapper-spacer b2c_lite_commerce-linkList_linkList-host'] li:nth-child(1) a:nth-child(1)").should('have.text', 'Warranty')

        cy.get("b2c_lite_commerce-link-list[class='component-wrapper-spacer b2c_lite_commerce-linkList_linkList-host'] li:nth-child(1) a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')

  
        cy.get("a[href='/commerce/about-us']").should('have.text', 'About Us')
        cy.get("a[href='/commerce/about-us']")
          .invoke('attr', 'href')
          .should('eq', '/commerce/about-us')
        
        cy.xpath("/html[1]/body[1]/webruntime-app[1]/lwr-router-container[1]/webruntime-inner-app[1]/dxp_data_provider-user-record-data-provider[1]/dxp_data_provider-data-proxy[1]/dxp_data_provider-user-data-provider[1]/dxp_data_provider-data-proxy[1]/commerce-layout-site[1]/div[3]/commerce_builder-layout-footer[1]/commerce-layout-footer[1]/footer[1]/div[1]/div[1]/community_layout-section[1]/div[3]/community_layout-column[2]/div[1]/b2c_lite_commerce-link-list[1]/b2c_lite_commerce-link-list-ui[1]/ul[1]/li[3]/a[1]").should('have.text', "M&D's Blog")
        cy.get("b2c_lite_commerce-link-list[class='component-wrapper-spacer b2c_lite_commerce-linkList_linkList-host'] li:nth-child(1) a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')


        // About M&D Column

        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > h3:nth-child(1)").should('have.text', 'About M&D')

        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should('have.text', 'About Us')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')

        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('have.text', 'Locations')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')
        
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('have.text', 'Shop all parts')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(3) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(2) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/category/shop-all-parts/0ZGEa00000005HROAY')


        // Terms & Policies Column

        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > h3:nth-child(1)").should('have.text', 'Terms & Policies')

        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should('have.text', 'Privacy Policy')
        cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')
        

          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('have.text', 'Terms and Conditions')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')


          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('have.text', 'Shipping Policy')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(5) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', '/commerce/warranty')
    


          // Follow Us! Column

          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > h3:nth-child(1)").should('have.text', 'Follow Us!')
        
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should('have.text', 'Facebook')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', 'https://www.facebook.com/mddistributors')

          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('have.text', 'Twitter')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', 'https://twitter.com/mddistributors')

          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('have.text', 'LinkedIn')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', 'https://www.linkedin.com/company/m&d-distributors/?trk=company_name')


          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").should('have.text', 'Instagram')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', 'https://www.instagram.com/mddistributors/')


          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").should('have.text', 'YouTube')
          cy.get("body > webruntime-app:nth-child(1) > lwr-router-container:nth-child(1) > webruntime-inner-app:nth-child(2) > dxp_data_provider-user-record-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(1) > dxp_data_provider-user-data-provider:nth-child(1) > dxp_data_provider-data-proxy:nth-child(2) > commerce-layout-site:nth-child(1) > div:nth-child(3) > commerce_builder-layout-footer:nth-child(1) > commerce-layout-footer:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > community_layout-section:nth-child(2) > div:nth-child(3) > community_layout-column:nth-child(7) > div:nth-child(1) > b2c_lite_commerce-link-list:nth-child(1) > b2c_lite_commerce-link-list-ui:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)")
          .invoke('attr', 'href')
          .should('eq', 'https://www.youtube.com/channel/UCHt5lpuKgH58yepBMtdlRIw')



        
            // Copyright Text

            cy.get(".dxp_base-textBlock_textBlock.dxp-text-heading-medium.slds-p-vertical_none.slds-p-horizontal_none").should('exist')

            cy.get(".dxp_base-textBlock_textBlock.dxp-text-heading-medium.slds-p-vertical_none.slds-p-horizontal_none")
              .should('contain', '© Copyright 2023 M&D Distributors All rights reserved.')

    
        })  

    
})

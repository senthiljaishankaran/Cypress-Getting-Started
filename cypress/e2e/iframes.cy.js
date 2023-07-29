// Handling the iframe

// Approach 1 to get the iframe and interact with it

import 'cypress-iframe'
describe('Handling the iframe',()=>{
    it('Approach 1 to access the iframe',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // assertion for the landing page
        cy.title().should('eq','The Internet')

        // getting the frame
        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        // utillizing the frame
        iframe.clear().type("Senthil {ctrl+a}")

        // Making the text bold to validate that we are inside the frame
        cy.get("[aria-label='Bold']").click()
    })

    //Approach 2 to get the iframe and interact using support function from commands.js

    it('Approach 2 to access the frame',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // assertion for the landing page
        cy.title().should('eq','The Internet')

        // utilising the get iframe method
        cy.getIframe("#mce_0_ifr").clear().type("Senthil {ctrl+a}")

         // Making the text bold to validate that we are inside the frame
         cy.get("[aria-label='Bold']").click()
    })

    // Approach 3 by using cypress iframe loader

    it('iframe loader',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // assertion for the landing page
        cy.title().should('eq','The Internet')

        // Loading the frame using iframe loader
        cy.frameLoaded("#mce_0_ifr")

        // accessing the loaded iframe
        cy.iframe("#mce_0_ifr").clear().type("Senthil {ctrl+a}")

        // Making the text bold to validate that we are inside the frame
        cy.get("[aria-label='Bold']").click()
    })
})

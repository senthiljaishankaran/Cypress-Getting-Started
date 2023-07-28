/*

*/

describe('Radio Button and CheckBox',()=>{
    it('Radio Buttons Specs',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        // Assertion for the Landing Page
        cy.title().should('include','Testautomation practice page')

        // Assertion on the Radio buttons
        cy.get("input#female").should('be.visible')
        cy.get("input#male").should('be.visible')
        cy.get("input#other").should('be.visible')

        // Checking the radio button
        // Checking the female radio button and Asserting the radio buttons
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('be.not.checked')

        // Checking the male radio button and Asserting the radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('be.not.checked')

    })

    it('Checkbox Specs',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Assertion for the Landing Page
        cy.title().should('include','Testautomation practice page')

        // Assertion on visibility of single check box
        cy.get("input#monday").should('be.visible')

        // Assertion on visibility of all check box
        cy.get(".form-check-input[type='checkbox']").should('be.visible')

        // Selecting single check box
        cy.get("input#tuesday").check().should('be.checked')

        // Unseleccting the checkbox
        cy.get("input#tuesday").uncheck().should('not.be.checked')

        // Selecting all the checkboxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')

        // Unselecting all the checkboxes
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Selecting the first check box from the list
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')

        // Selecting the last checkbox from the list
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})
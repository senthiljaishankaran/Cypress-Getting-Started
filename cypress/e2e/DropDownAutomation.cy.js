/*

*/

describe('Drop-Down-Automation',()=>{
    it.skip('drop-down-with-select-id-tag',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        // asserting the landing page
        cy.title().should('eq','Book a demo | Zoho Commerce')

        // Selecting a item from the drop-down with select tag id
        // here we select the drop-down directly cause of select tag
        cy.get("#zcf_address_country").select('United Kingdom')
        .should('have.value','United Kingdom')
    })
    it.skip('drop-down-without-select-tag',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        // selecting the drop-drown withput the select tag
        // here we select the dropdown and type the country name and select with two fields
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("United Kingdom").type('{enter}')
    })
    it.skip('Dynamic drop-down',()=>{
        cy.visit("https://www.wikipedia.org/")

        //asserting the landing page with title
        cy.title().should('eq','Wikipedia')

        // Selcting an item from drop-down list
        // here the drop down will change automatically
        cy.get("#searchInput").type('chennai')
        cy.get(".suggestions-dropdown").contains('Chennai International Airport').click()
    })
    it('Dynamic drop down method-2',()=>{
        cy.visit("https://www.google.com/")

        //asserting the landing page
        cy.title().should('eq','Google')

        // selecting the item from drop-down
        cy.get("#APjFqb").type('cypress automation')

        // Verifying the no.of items
        cy.get("div.wM6W7d>span").should('have.length',12)

        cy.get("div.wM6W7d>span").contains("cypress automation tool").click()

        // Using jquery method to select the element from the list
        // this jquery will work once we handle the pop-up fo sign from google
        // cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
        //     if($el.text =='cypress automation tool'){
        //         cy.wrap($el).click()
        //     }
        // })
        
        //asserting the selected item
        cy.get("#APjFqb").should('have.value',"cypress automation tool")
    })
})
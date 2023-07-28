/*
Window handling Method -1
In this method we will remove the target tag from the html so that the new window will open in same tab

Window handling Method -2
In this method we will capture the href attribute and again use the cy.visit() to perform the operation

*/

// Method-1
describe('Window handling',()=>{
    it('Window handling target tag removal',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        // Deleting the target tag to make the new window open in same tab
        cy.get(".example >a").invoke('removeAttr','target').click()

        // Validating the new window
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        // Waiting 
        cy.wait(5000)

        // back to main page
        cy.go('back');
    })

    //Method-2
    it('window handling by catching href',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        // capturing the href
        cy.get('.example >a').then((e)=>{
            let url=e.prop('href')

        // visiting the new url
        cy.visit(url)
        })

        // Validating the new window
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        // Waiting 
        cy.wait(5000)

        // back to main page
        cy.go('back');
    })
})
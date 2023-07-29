/*
1. Data Driven testing With out Using Hooks
2. Data Driven testing With Using Hooks
*/

describe('Data Driven Testing',()=>{

    // Data Driven Test By Accessing the Fixture data directly
    it.skip('Direct access',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Logging in with Data from fixtures
        cy.fixture('OrangeHRM.json').then((data)=>{
            cy.get("input[name='username']").type(data.username)
            cy.get("input[name='password']").type(data.password)
            cy.get("button[type='submit']").click()

            // Assertion
            cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text',data.expected)
        })
    })

    // before hook
    let userData
    before(()=>{
        cy.fixture('OrangeHRM').then((data)=>{
            userData=data
        })
    })

    // Data Driven Testing using Hooks and tags
    it('Data driven with hooks',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type(userData.username)
        cy.get("input[name='password']").type(userData.password)
        cy.get("button[type='submit']").click()

        // Assertion
        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text',userData.expected)
    })
})


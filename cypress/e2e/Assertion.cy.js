/*
Assertion in Cypress is of two types
1. Implicit (Build-in assertion)
    1.should
    2.and

    Keywords used with should are
    1.contain (negative assertion 'not.contain')
    2.include (negative assertion 'not.include')
    3.eq (negative assertion 'not.eq')
    4.exist (negative assertion 'not.exist')
    5.(be.visible)
    6.(have.length)
    7.(have.value)
     

2. Explicit (Customisable assertion)
    visit url: https://docs.cypress.io/guides/references/assertions
    for documentation of the Explicit or customisable assertion on
    1. Expect(BDD)
    2. assert(TDD)
*/

describe('Assertion',()=>{
    it('Implicit assertion test case',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Below we are creating chaing of should assert command by using and command
        //  positive assertion of the Implicit type
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orange')

        // negative assertion of implicit type

        cy.url().should('not.include','senthil')
        .and('not.eq',"suresh")
        .and('not.contain','ashok')

        //cy.title() method can also be used with inplicit assertion
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        // Exist and be.visible assertion
        cy.get(".orangehrm-login-branding > img").should('be.visible')
        .and('exist')

        // Trying custom img xpath
        cy.xpath("//img[@alt='company-branding']").should('exist')
        .and('be.visible')

        // have.length
        cy.xpath('//a').should('have.length',5)

        // Asserting the login name typed
        cy.get("[name='username']").type('Admin')
        cy.get("[name='username']").should('have.value','Admin')

    })
    it('Explicit assertion',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Logging in to verify the user name
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get(".oxd-button").click()

        // Asserting the user name
        let expectedName="Seema Collings";
        let negativeTestname="Senthil";

        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actualName=x.text()

            // BDD Assertion ie.. Expect keyword
            expect(actualName).to.equal(expectedName)
            expect(actualName).to.not.equal(negativeTestname)

            //TDD Assertion ie.. assert keyword
            assert.equal(actualName,expectedName)
            assert.notEqual(actualName,negativeTestname)
        })
    })
})
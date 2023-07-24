
/*
A Spec file ie.. filename.cy.js can have multiple describe method
and the describe method can have multiple it function
Also we can write function with arrows or with function keyword like below

describe("Scenario-1", function(){
    it("Test-1",function(){
        cy.visit("http://www.google.com")
        cy.title().should("eq","Google")
    })
})

command to run the test
1. npx cypress open --> this will open cypress app and we have to run spec by clicking on it
2. npx cypress run --> this will run the spec file in headeless mode and the default browser is electron
3. npx cypress run --headed --> this will run the spec file in default browserr electron on headed mode
4. npx cypress run --headed --browser chrome --> to run the spec file in specific browser
5. npx cypress run --spec "file path in relative or absolute" --> to run only a specific spec file

 */
describe("Scenario-1", ()=>{
    it("Test-1",()=>{
        cy.visit("http://www.google.com")
        cy.title().should("eq","Google")
    })
})


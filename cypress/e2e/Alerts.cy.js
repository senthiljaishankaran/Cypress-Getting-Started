/*
Cypress will automatically handle the alerts 
we dont need to write any separate code for alert handling
But in case if we want to validate the alerts we can use the events in JS to validate them
*/

// Alert handling Type 1
// Alert handling with only ok button
describe('Alert handling',()=>{
    it('Alert with ok button only',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // assertion for landing page
        cy.title().should('eq','The Internet')

        // Validating the alert
        // clicking on the alert button
        cy.get("button[onclick='jsAlert()']").click()

        // Capturing the value of the alert
        cy.on('window:alert',(t)=>{
            expect(t).to.equal('I am a JS Alert')
        })

        // Validating second message
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })
    
    // Alert handling Type 2
    // Alert handling with giving instruction to cypess to close the alert by default method and cancel button method
    it('Alert with ok and cancel button default method',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // assertion on landing page
        cy.title().should('eq','The Internet')

        // validating the alert
        cy.get("button[onclick='jsConfirm()']").click()

        // Capturing the Event and Validating the alert message
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a JS Confirm')
        })

        // Validating the message
        cy.get("#result").should('have.text','You clicked: Ok')
    })

    it('Alert with ok and cancel button method',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

         // assertion on landing page
         cy.title().should('eq','The Internet')

         // validating the alert
        cy.get("button[onclick='jsConfirm()']").click()

        // Capturing the Event and Validating the alert message
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal('I am a JS Confirm')
        })

        // Making Cypress to handle alert with cancel button
        cy.on('window:confirm',()=> false)
        
        //Validating the message
        cy.get("#result").should('have.text','You clicked: Cancel')
    })

    // Alert handling Type 3
    // Alert handling with prompt window - default method
    it('Alert with prompt window-default method',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

         // assertion on landing page
         cy.title().should('eq','The Internet')

         // Passing the text into the prompt window
         // Note: we should pass the value before clicking the prompt window button
         // else we wont be able to pass the value

         cy.window().then((w)=>{
            cy.stub(w,'prompt').returns('Senthil')
         })

         // Clicking on the Prompt alert button
         cy.get("button[onclick='jsPrompt()']").click()

         // Validating the Result
         cy.get("#result").should('have.text','You entered: Senthil')
    })

    // Alert handling with prompt window - cancel method
    it('Alert with prompt window cancel method',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

         // assertion on landing page
         cy.title().should('eq','The Internet')

         // Passing the text into the prompt window
         // Note: we should pass the value before clicking the prompt window button
         // else we wont be able to pass the value

         cy.window().then((w)=>{
            cy.stub(w,'prompt').returns('Senthil')
         })

         // Clicking on the Prompt alert button
         cy.get("button[onclick='jsPrompt()']").click()

         // Making cypress handle alert using false method or cancel button
         cy.on('window:prompt',()=> false)

         // Validating the Result
         cy.get("#result").should('have.text','You entered: Senthil')
    })

    // basic auth alert handling
    // method-1
    // handling basic auth with username and password passed as argument in the cy.visit() method
    it('basic auth handling',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})

        // validating of the basic auth
        cy.get("div.example").should('have.contain',"Congratulations")

    })
    
    // method-2
    // handling basic auth with username and password passed as argument in the url
    it('basic auth handling-2',()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        // validating of the basic auth
        cy.get("div.example").should('have.contain',"Congratulations")

    })
})
import LoginPage from "../PageObjects/LoginPage"
describe('sample POM',()=>{
    it('Login test POM',()=>{
        // Getting the fixture Data for Combining Data driven with POM 
        cy.fixture('OrangeHRM.json').then((data)=>{
            
            // Getting the login page
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            // Creating object of the POM class
            const loginpage=new LoginPage();
            
            // Giving Login Details
            loginpage.setUsername(data.username)
            loginpage.setPassword(data.password)
            loginpage.clickSubmit()
            loginpage.assertionLogin(data.expected)
            
        })
        
    })
})
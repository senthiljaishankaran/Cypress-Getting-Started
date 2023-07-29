// Data Driven Test 
describe('Data Driven Test',()=>{
    it('data driven test orangehrm',()=>{

        // Defining the fixture to extract data from fixture data file and saving it into data variable
        cy.fixture('DataDrivenOrangeHRM.json').then((data)=>{

            // Navigating to the site
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            // Using the data variable which contains all the list of data we are iterating with userdata variable with foreach loop
            data.forEach((userdata)=>{

                // Logging in with the data from fixture
                cy.get("input[name='username']").type(userdata.username)
                cy.get("input[name='password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if(userdata.username=="Admin" && userdata.password=="admin123"){
                    // Assertion for the landing Page
                    cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text',userdata.expected)

                    // Logout for the next test case to be performed
                    cy.get(".oxd-userdropdown-tab").click()
                    cy.get(".oxd-dropdown-menu>li:nth-child(4)").click()

                }
                else{
                    cy.get(".orangehrm-login-form>div>div>div>p").should('have.text',userdata.expected)
                }
            })
        })
    })
})
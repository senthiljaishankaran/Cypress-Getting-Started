// Sample Page Object repo
class LoginPage{

    locatorUsername="input[name='username']"
    locatorPassword="input[name='password']"
    locatorSubmit="button[type='submit']"
    locatorLoginAssertion=".oxd-topbar-header-breadcrumb>h6"

    setUsername(username){
        cy.get(this.locatorUsername).type(username)
    }

    setPassword(password){
        cy.get(this.locatorPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.locatorSubmit).click()
    }
    
    assertionLogin(expected){
        cy.get(this.locatorLoginAssertion).should('have.text',expected)
    }
}

export default LoginPage
/*
Types of CSS Selector Syntax
Note: Here tag name is Optional
1. tag #Id_name
2. tag .class_name
3. tag [attribute='value']
4. tag .class_name[attribute='value']

For Relative x-path we can use below syntax
1. //tag_name[@attribute(id,class,name,text...) ='valueOf(id,name,class,text...)']
X-path chaining
2. //tag_name[@attribute(id,class,name,text...) ='valueOf(id,name,class,text...)']/tagname...
And we can continue chaining the x-path to our requirements
Another way to chain is to write code like below
cy.xpath("x-path-1").xpath("x-path0-2")..
*/


describe('Login_Test',()=>{
    //First test case with css-selector locators
    it('login_test_css_selector',()=>{
       cy.visit("https://demo.applitools.com/")
       cy.get("#username").type("user")
       cy.get("#password").type("pass")
       cy.get("#log-in").click()
    })
    it('login_test_X_path',()=>{
        //Second Test case with x-path locators
        cy.visit("https://demo.applitools.com/")
        cy.xpath("//input[@id='username']").type("user")
        cy.xpath("//input[@id='password']").type("pass")
        cy.xpath("//a[@id='log-in']").click()
     })
})
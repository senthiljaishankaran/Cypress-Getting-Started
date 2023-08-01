/*
Intercept is library used to serve data to to the test case when there is no available API's
 */

describe('Intercept',()=>{

    // intercepting an end point
    it('stubbing an endpoint',()=>{
        
        // routing to an website 
        cy.visit("https://jsonplaceholder.typicode.com/")

        // intercepting a post
        cy.intercept('/posts').as('posts')

        // Another way to use the intercept to limit the pages
        //  cy.intercept('GET','/posts',{totalpost:5}).as('posts')

        // clicking the intercept link
        cy.get("table:nth-of-type(1)>tbody>tr>td>a[href='/posts']").click()

        // waiting for the intercept
        cy.wait('@posts').then(res=>{
            cy.log(JSON.stringify(res))
            console.log(JSON.stringify(res))
        })
    })
})
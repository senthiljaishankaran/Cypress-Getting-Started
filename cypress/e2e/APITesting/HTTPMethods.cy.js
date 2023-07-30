/*
Here we will test the basic API methods like get,post,put and delete
*/

// Initializing the describe block
describe('HTTP methods',()=>{

    // Get request test in It block
    it('Get method',()=>{

        // using cy.request method to perform get method test
        cy.request('GET','https://reqres.in/api/users/2')
        .its('status')
        .should('equal',200)
    })

    // Post request test 
    it('Post method',()=>{

        // Using cy.request method to perform Post method test
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name":"Senthil",
                "job":"SDET"
            }
        }).its('status')
        .should('equal',201)
    })

    // Put Request Test
    it('Put method',()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name":"Senthil",
                "job":"Tester"
            }
        }).its('status')
        .should('equal',200)
    })

    // Delete request Test
    it.only('Delete method',()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2'
        }).its('status')
        .should('equal',204)
    })
})
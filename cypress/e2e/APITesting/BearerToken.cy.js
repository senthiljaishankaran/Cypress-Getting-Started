/*
Bearer Token is an Authorisation Token to do something with authority
here first we will generate an Bearer token and then using that bearer token we will order
*/

describe('Bearer token authorization',()=>{

    // Creating auth
    let authToken=null

    // Before Block to generate an Bearer token
    before('Generating an Bearer token',()=>{
        
        // Post Request
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                clientName:"Newrest2",
                clientEmail:"Newrest2@gmail.com"
            }
        }).then((response)=>{
            expect(response.status).equal(201)
            authToken=response.body.accessToken
        })
    })

    // Using Bearer token performing the ordering operation
    before('Creating order with bearer token',()=>{
        
        //Post request to create order
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authToken
            },
            body:{
                bookId:1,
                customerName:"Newrest2"
            }
        }).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.created).to.eq(true)
        })
    })

    // Getting the order details
    it('Getting order with bearer token',()=>{

        // Get request to get the order details
        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authToken
            },
            cookies:{
                'cookieName':'cookies'
            }
        }).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).has.length(1)
        })
    })
})
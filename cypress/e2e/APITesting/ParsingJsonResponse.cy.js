/*
Parsing json Response
*/

describe('Parsing json Response',()=>{

    it('getting the respoonse',()=>{
        
        //Get Request from the store API
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products'
        })
        
        // Extracting the data from the Json response and parsing it

        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[2].price).to.eq(55.99)
            expect(response.body[5].rating.rate).to.eq(3.9)
        })
    })

    // parsing the json response using the foreach loop
    it('parsing with foreach loop',()=>{

         // Const Total price
        let totalPrice=0

        // Get request
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            // limiting the page using query param
            qs:{limit:3}
        }).then((response)=>{
            // using foreach loop to iterate through the response
            response.body.forEach(element=>{
                totalPrice=totalPrice+element.price
            })
            expect(totalPrice).to.equal(188.24)
        })
    })
})
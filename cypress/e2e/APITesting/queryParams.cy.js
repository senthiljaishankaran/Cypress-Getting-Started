/*
Qurery parameter
*/

describe('Request definitions',()=>{

    //QueryParams is the Specified after the path parameter nt the URL of the request placed
    it('Query Parram',()=>{

        // defining the query param
        const queryParam={page:2}

        // Request
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',
            qs:queryParam
        }).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.per_page).to.eq(6)
            expect(response.body.data).have.length(6)
            expect(response.body.data[0]).has.property('id',7)
            expect(response.body.data[1]).have.property('first_name','Lindsay')
        })
    })
})

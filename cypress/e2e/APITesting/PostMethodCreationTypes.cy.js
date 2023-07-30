/*
1. Hard Coding the values in the request body
2. Generating Random Value using Math.Random
3. Using Fixture file
*/

describe('Post method body types',()=>{

    // Method 1 Hard coding the values
    it('Hard coded Post body',()=>{
        // Request Body
        const requestBody={
            name:"Senthil",
            job:"Testing"
        }

        // Post Request
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:requestBody
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("Senthil")
            expect(response.body.job).to.eq("Testing")
        })
    })

    // Method 2 using Math.random()
    it('Post body with Math.random',()=>{
        
        // Request body with math.random() method
        const requestBody={
            name:Math.random().toString(7).substring(2),
            job:"SDET"
        }

        // post Request
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:requestBody
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(requestBody.name)
            expect(response.body.job).to.eq(requestBody.job)
        })
    })

    // Method 3 using fixture data
    it('Post body with fixture data',()=>{

        // Request body from  fixture
        cy.fixture('PostBody.json').then((data)=>{
            const requestBody=data

            // post Request
            cy.request({
                method:'POST',
                url:'https://reqres.in/api/users',
                body:requestBody
            }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.job).to.eq(requestBody.job)

                // Validating the schema data and response data 
                expect(response.body).has.property('name',requestBody.name)
                expect(response.body).to.have.property('job',requestBody.job)
            })
        })
    })
})
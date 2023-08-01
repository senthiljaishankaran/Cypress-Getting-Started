describe('API chaining',()=>{

    // Bearer token
    const authToken ='5f23e30aebc91c6166ba1d2c20fa149b02a467e912224f0e397d24c96f092779'

    it('Post,Put,delete chaining',()=>{

        //Post request
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{
                name:Math.random().toString(12).substring(2),
                gender:'male',
                email:Math.random().toString(5).substring(2)+"@gmail.com",
                status:'inactive'
            },
            headers:{
                Authorization:'Bearer '+authToken
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            const userId=response.body.id

            // Update User
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name:"dagger"
                },
                headers:{
                    Authorization:'Bearer '+authToken
                }
            }).then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal('dagger')

                // delete user
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${userId}`,
                    headers:{
                        Authorization:'Bearer '+authToken
                    }
                }).then((response)=>{
                    expect(response.status).to.equal(204)
                })
            })
        })
    })
})
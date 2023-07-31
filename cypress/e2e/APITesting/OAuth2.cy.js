/*
Process of OAuth 2.0 working
1. We use Client id and Client secret and code to generate access token
2. Code is generated by using client id in the auth get request (refer Postman Oauth collection)

note :
the generated code from the authorize is valid one time only generate new ones for every test
*/


// Automating Oauth2.0
describe('Oauth2.0',()=>{

    // Global variable
    let accessToken="";

    // Generating the Access Token With client_id,client_secret and code
    it('generating access token',()=>{

        // Post request with query paramns to generate access token
        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                client_id:'24c05ee51f3c233e26eb',
                client_secret:'259ecec5c8fe037965a2df888fd1ec3d06b03180',
                code:'861d57369c773f9401ed'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            const params=response.body.split('&')
            accessToken=params[0].split('=')[1]
            cy.log("generated token: "+accessToken)
        })
    })

    // Using Generated access token to access resource
    it('Accessing resource',()=>{

        // Get Request
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+accessToken
            }
        }).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].id).to.equal(668113595)
        })
    })
})

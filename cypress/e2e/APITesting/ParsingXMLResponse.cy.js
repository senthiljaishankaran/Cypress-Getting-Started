// install xml2js library
// command --> npm install xml2js

// Creating a xml2js object and making the parse value to false initially
const xml2jslib=require('xml2js')
const parser=new xml2jslib.Parser({explicitArray:false})

describe('Parsing XML',()=>{

    // Converting the xml body as single line from online convertor
    // single line xml file will only be accepted
    const xmlPayload="<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"

    // pet as global variable
    let petId=null;

    // Creating a pet in pet store
    before('Creating A pet in petstore',()=>{

        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlPayload,
            headers:{
                // request body
                'Content-Type':'application/xml',
                // response body
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).equal(200)
            parser.parseString(response.body,(err,result)=>{
                petId=result.Pet.id
            })
        })
    })

    // Getting the Created Pet details
    it('Getting the pet created in store',()=>{

        cy.request({
            method:'GET',
            url:'https://petstore.swagger.io/v2/pet/'+petId,
            headers:{
                // accept body
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            parser.parseString(response.body,(err,result)=>{
                expect(result.Pet.name).equal('doggie')
                expect(result.Pet.id).equal(petId)
            })
        })
    })
})
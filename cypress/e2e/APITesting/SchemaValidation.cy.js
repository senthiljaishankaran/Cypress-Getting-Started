/*
npm install apv ---> to install apv package
We will create a method to compare the schema with the response json
*/

// importing  ajv
const validator=require('ajv')
const schemaValidator=new validator()

describe('Json Schema Validation',()=>{
    
    //It block to make request and create a schema validation method
    it('Making request for Validation',()=>{

        // Get Request
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products'
        }).then((response)=>{
            
                const schema={"$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
            }
            const validate=schemaValidator.compile(schema)
            const isvalid=validate(response.body)
            expect(isvalid).to.be.true
        })
    }) 
})
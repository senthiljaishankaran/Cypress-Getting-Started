/*
Handling Web Table
1. Checking number of rows and column
2. Getting a particular row and column data
3. Getting all the rows and cloumns data
4. Pagination
*/

describe('WebTable Handling',()=>{

    // Setp for all the Spec-files
    beforeEach('initial setup',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")

        //asserting the pages
        cy.title().should('eq','Administration')

        // Logging in
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button.btn-primary").click()

        //Handling alert not handled by cypress
        cy.get("button.btn-close").click()

        // Navigating to customer data page
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()

    })
    
    // Checking number of rows and column
    it('checking the no.of.rows and columns',()=>{

        // Valiating the number of columns
        cy.get("table.table>thead>tr>td").should('have.length',7)

        // validating the number of rows
        cy.get("table.table>tbody>tr>td").should('have.length',70)
    })

    // getting a particular value from the table and validating
    it('getting and checking particular data',()=>{
        cy.get("table.table>tbody>tr:nth-child(6)>td:nth-child(3)").contains("xvrt@test.com")
    })

    // getting all the values in the table
    it('getting all values from the table',()=>{
        cy.get("table.table-bordered>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    // Working with pagination
    it('working with pagination',()=>{

        // Writing a call back function to get the page text
        cy.get("div.col-sm-6.text-end").then((e)=>{
            let text=e.text();
            let totalPage=text.substring(text.indexOf("(")+1,text.indexOf("Pages"))
            cy.log("Total Number of Pages: "+totalPage)
        })

        let pagination=3;
        for(let p=1;p<=pagination;p++){
            if(pagination>1){

                // clicking on the defined page in for loop
                cy.log("Active pagination:"+pagination)
                cy.get("ul.pagination>li:nth-child("+p+")").click()

                // Getting all the elements form the selected page
                cy.get(".table.table-bordered.table-hover>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })
                
            }
        }
    })
})


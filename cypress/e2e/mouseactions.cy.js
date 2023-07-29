// Automating all the mouse actions using trigger() method

import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('Automating Mouse actions',()=>{

    // Automating Mouse over action
    it('Mouse Hover',()=>{
        cy.visit("https://demo.opencart.com/")

        // Performing Mouse over action
        // Assertion on not visible of mac
        cy.get("nav#menu>div>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)").should('not.be.visible')

        // Mouse action
        cy.get("nav#menu>div>ul>li:nth-child(1)").trigger('mouseover').click()

        // Assertion after mouse action
        cy.get("nav#menu>div>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)").should('be.visible')
    })

    // Automating right-click acction
    it('right-click action',()=>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")

        // performing right-click action
        // Assertion on not visible of copy button
        cy.get('.context-menu-icon-copy > span').should('not.be.visible')

        // right-click action
        cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu')

        // Assertion after right click
        cy.get('.context-menu-icon-copy > span').should('be.visible')

        // Note : we can also use cy.get("span.context-menu-one.btn.btn-neutral").rightclick();
        
    })

    // Automating double-click
    it('double click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        //  Loading iframe
        cy.frameLoaded("#iframeResult")

        // Accesing the contexts in the frame
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()

        // asserting the action of double click
        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')

        //Note: cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
    })

    // Automating drag and drop
    it('drag and drop',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        // asserting the drag and drop components
        cy.get("#box3").should('be.visible')
        cy.get("#box103").should('be.visible')

        // Drag and Drop action
        cy.wait(5000)
        cy.get('#box3').drag('#box103',{force:true})
    })

    // Scrolling the page actions
    it('Scrolling action',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        // Scrolling to india flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})
        
        //Assertion on the Scrolling
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        // Scrolling to the footer
        cy.get("#footer").scrollIntoView()
    })
})
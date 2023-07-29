/*
Types of file uploads
1. single file upload-clicking on upload button
2. file upload and rename
3. single efile upload by drag and drop
4. multiple file upload
5. uploading file by interacting with shadow dom elements
*/

import 'cypress-file-upload'
describe('File upload Methods',()=>{
    
    // Single file upload
    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        // Uploading the file
        cy.get("#file-upload").attachFile('test1.txt')
        cy.get("#file-submit").click()

        // Asserting the file upload
        cy.get(".example >h3").should('have.text','File Uploaded!')
    })
    
    // File upload and rename
    it('file upload and rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        // uploading and renaming the file
        cy.get("#file-upload").attachFile({filePath:'test1.txt', fileName:'newFile.txt'})
        cy.get('#file-submit').click()

        // Asserting the file upload
        cy.get(".example >h3").should('have.text','File Uploaded!') 
    })

    // File drag and drop
    it('file drag and drop upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        //uploading the file via drag and drop
        cy.get("#drag-drop-upload").attachFile('test1.txt',{subjectType:'drag-n-drop'})
        cy.wait(3000)

        // Assertion for drag and drop
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.txt')
        
    })

    // Multiple file upload
    it('uploading multiple files',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        // Uploading multiple files
        cy.get("#filesToUpload").attachFile(['test1.txt','test2.txt'])

        // Assertion on the uploaded files
        cy.wait(3000)
        cy.get('#fileList > :nth-child(1)').contains('test1.txt')
        cy.get('#fileList > :nth-child(2)').contains('test2.txt')
    }) 

    // Uploading file in Shadow Dom 
    it.only('File upload in Shadow DOM',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        // Interacting with ShadowDom
        // the below css selector belongs to shadow dom so we cant verify it in browser
        cy.get(".smart-browse-input",{includeShadowDom : true}).attachFile('test1.txt')
        cy.wait(3000)

        // assertion on file upload
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('test1.txt')
    })
})
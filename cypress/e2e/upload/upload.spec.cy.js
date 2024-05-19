const { Context } = require("mocha")

describe('Using cypress native command', () => {
    it('selectFile method', () => {
      cy.visit('/')
      cy.contains('Upload File Demo').should('be.visible').and('exist').click()
      cy.get('input[type="file"]').should('exist').selectFile('LambdaTest.pdf')
      cy.contains('File Successfully Uploaded').should('be.visible').and('exist')
    })


    //false positive test
    // it('selectFile unacceptable file', () => {
    //     cy.visit('/')
    //     cy.contains('Upload File Demo').should('be.visible').and('exist').click()
    //     cy.get('input[type="file"]').should('exist').selectFile('cpress/downloads/Lambdainfo.txt')
    //     cy.contains('File Successfully Uploaded').should('be.visible').and('exist')
    //   })


    // Context('Using cypress plugin command', () => {
        it('attachFile method', () => {
          cy.visit('/')
          cy.contains('Upload File Demo').should('be.visible').and('exist').click()
          cy.get('input[type="file"]').should('exist').attachFile('example.json')
          cy.contains('File Successfully Uploaded').should('be.visible').and('exist')
        })
    
    
     
    
    })
//})


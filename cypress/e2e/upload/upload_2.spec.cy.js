describe('Using cypress native command', () => {
    it('selectFile method', () => {
      cy.visit('/')
      cy.contains('Upload File Demo').should('be.visible').and('exist').click()
      cy.get('input[type="file"]').should('exist').selectFile('LambdaTest.pdf')
      cy.contains('File Successfully Uploaded').should('be.visible').and('exist')
    })


    it('attachFile method', () => {
        cy.visit('/')
        cy.contains('Upload File Demo').should('be.visible').and('exist').click()
        cy.get('input[type="file"]').should('exist').attachFile('LambdaTest.pdf')
        cy.contains('File Successfully Uploaded').should('be.visible').and('exist')
      })
  
})
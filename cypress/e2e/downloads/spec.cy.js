describe('Testing Downloads', () => {
  it('Downloading an Existing File', () => {
    cy.visit('/')
    cy.contains('Download File Demo').should('be.visible').click()
    cy.get('button[type="button"]').should('be.visible').and('exist').click()
  })

  it('Downloading a newly created file', () => {
    cy.visit('/')
    cy.contains('File Download').should('be.visible').click()
    cy.get('textarea#textbox').should('be.visible').and('exist').type('Testing download in zero to hero class')
    cy.get('button#create').should('be.visible').and('exist').click()
    cy.get('a#link-to-download').should('be.visible').and('exist').click()
  })
})
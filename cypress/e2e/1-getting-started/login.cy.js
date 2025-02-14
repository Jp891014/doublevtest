
describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('account/login')
  })


  it('Valida inicio de sesion', () => {
    
    cy.get('#input-email').type('pruebaabc123@gmail.com')
    cy.get('#input-password').type('Prueba123')
    cy.get('form > .btn').click()
    cy.contains('My Account').should('be.visible')
    
  })

  it('Modificacion Contrasena', () => {
    
    cy.get('#input-email').type('pruebaabc123@gmail.com')
    cy.get('#input-password').type('Prueba123')
    cy.get('form > .btn').click()
    cy.contains('Password').click()
    cy.get('#input-password').type('Prueba123')
    cy.get('#input-confirm').type('Prueba123')
    cy.get('.btn.btn-primary').click()
    cy.get('.alert').should('be.visible').and('contain.text', 'Success: Your password has been successfully updated.')
  })

})
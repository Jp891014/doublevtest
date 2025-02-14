
describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('account/register')
    
  })

  it.only('Completar formulario de registro', () => {
    
    cy.get('#input-firstname').type('John')
    cy.get('#input-lastname').type('Plaza')
    cy.get('#input-email').type('pruebaabc104@gmail.com')
    cy.get('#input-telephone').type('3112000000')
    cy.get('#input-password').type('Prueba123')
    cy.get('#input-confirm').type('Prueba123')

    cy.get('input[name="agree"]').check()
    cy.get('.pull-right > .btn').click()
    cy.get('#content > :nth-child(2)').should('be.visible').and('contain.text', 'Congratulations! Your new account has been successfully created!')
    //cy.reload()
    //cy.visit('account/success')
    //cy.get('#content > :nth-child(2)').should('contain.text', 'Thank you for registering with Your Store!')
  })

})
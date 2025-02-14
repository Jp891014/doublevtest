
describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('account/login')
  })

  it('Mostrar todos laptops y Notebooks', () => {
    
    cy.get('#input-email').type('pruebaabc123@gmail.com')
    cy.get('#input-password').type('Prueba123')
    cy.get('form > .btn').click()
    cy.get('.nav.navbar-nav > li').eq(1).trigger('mouseover')
    cy.get('.see-all').eq(1)
    cy.visit('product/category&path=18')
    
  })

  it.only('Proceso de agregar, eliminar y comprar', () => {
    
    cy.get('#input-email').type('pruebaabc105@gmail.com')
    cy.get('#input-password').type('Prueba123')
    cy.get('form > .btn').click()
    cy.visit('product/category&path=18')
    cy.get('[onclick="cart.add(\'45\', \'1\');"]').click()
    cy.get('.alert').should('be.visible').and('contain.text', 'Success: You have added MacBook Pro to your shopping cart!')
    cy.get('#search > .form-control').type('Samsung Galaxy')
    cy.get('.input-group-btn > .btn').click()
    cy.get('[onclick="cart.add(\'49\', \'1\');"]').click()
    cy.get('.alert').should('be.visible').and('contain.text', 'Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!')
    cy.get('.btn-inverse').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
    cy.get('.btn-inverse').click()
    cy.get('[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"] > strong').click()
    cy.get('#input-payment-firstname').type('John')
    cy.get('#input-payment-lastname').type('Plaza')
    cy.get('#input-payment-address-1').type('Cra 78')
    cy.get('#input-payment-city').type('Bogota')
    cy.get('#input-payment-postcode').type('110811')
    cy.get('#input-payment-country').select('47')
    cy.get('#input-payment-zone').select('724')
    cy.get('#button-payment-address').click()
    cy.get('#button-shipping-address').click()
    cy.get('#button-shipping-method').click()
    cy.get('#collapse-payment-method > .panel-body > :nth-child(3) > label > input').click()
    cy.get('[type="checkbox"]').check()
    cy.get('#button-payment-method').click()
    cy.get('#button-confirm').click()
    cy.contains('Your order has been placed!').should('be.visible')
  })

})
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display when number buttons are clicked', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    // const commentListItems = cy.get('#running_total> li')
    cy.get('#running-total').should('contain', '24')
  })

  it('should have an updated display with the result when arithmetical operations are used', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '8')
  })
  
  it('should be able to use multiple arithmetic operations at once', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '16')
  })

  it('should show decimal numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '0.5')
  })

  it('should show negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '-4')
  })

  it('should show very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '3799800000000000')
  })

  it('should return error when dividing 0 by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', 'error')
  })

  
})
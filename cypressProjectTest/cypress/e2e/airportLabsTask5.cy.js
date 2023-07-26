import { urls } from '../pageData/urls.js'

describe('Testing AirportLabs website - Task 5', () => {
  beforeEach(() => {
    cy.visit(urls.from)
  })

  it('Verifies the properties of the logo', () => {
    cy.get('[aria-label="home"] img')
      .should('be.visible')
      .should('have.css', 'width', '140px')
      .should('have.css', 'height', '39.609375px')
      .should('have.css', 'font-size', '18px')
  })
})
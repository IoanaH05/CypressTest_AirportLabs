
import { urls } from '../pageData/urls.js'
import { usedTexts } from '../pageData/usedTexts.js'

describe('Testing AirportLabs website - Task 1', () => {
    beforeEach(() => {
      cy.visit(urls.from)
    })
  it('Verifies the title of a specific section from landing page', () => {
    cy.get('.h2.violet')
      .should('be.visible')
      .should('contain.text',usedTexts.mainGoal)
      .should('have.css', 'font-size', '40px')
      .should('have.css', 'font-family', 'Satoshi, sans-serif')
      .should('have.css', 'color', 'rgb(126, 139, 255)')
  })
})
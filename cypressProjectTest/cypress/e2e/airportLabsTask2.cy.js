
import { urls } from '../pageData/urls.js'
import { usedTexts } from '../pageData/usedTexts.js'

describe('Testing AirportLabs website - Task 2', () => {
    beforeEach(() => {
      cy.visit(urls.from)
    })
  it('Verifies Our Activity in numbers section from landing page', () => {
    cy.get('.h2')
      .should('be.visible')
      .should('contain.text', usedTexts.activityInNumbers)
      .should('have.css', 'font-size', '40px')
      .should('have.css', 'color', 'rgb(126, 139, 255)')
      .should('have.css', 'font-family', 'Satoshi, sans-serif')
  })
  it('Verifies numbers and location of users on Our Activity in numbers section', () => {
    cy.get('.h2.green')
      .first()  
      .should('be.visible')
      .should('contain.text', usedTexts.numberOfUsers)
      .should('have.css', 'font-size', '40px')
      .should('have.css', 'color', 'rgb(82, 206, 147)')
      .should('have.css', 'font-family', 'Satoshi, sans-serif')
    cy.get('.stats.w-container .h4')
      .first() 
      .should('be.visible')
      .should('contain.text', usedTexts.usersWorldwide)
      .should('have.css', 'font-size', '20px')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'font-family', 'Satoshi, sans-serif')
  })
})
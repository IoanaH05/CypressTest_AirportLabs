import { Random } from '../pageData/random.js'
import { urls } from '../pageData/urls.js'
import { usedTexts } from '../pageData/usedTexts.js';

const random = new Random(); 
const userEmail = `${random.getRandomString(8)}@${random.getRandomString(5)}.com`;

describe('Testing AirportLabs website - Task 3', () => {
    beforeEach(() => {
      cy.visit(urls.from)
    })
  it('Goes to Contact Page and fills in the form', () => {
    cy.get('.nav-link---contact').click();
    cy.get('h1')
        .should('be.visible')
        .and('contain.text', usedTexts.contactHeaderText )
    cy.get('#Your-Name').type(random.getRandomString(20))
    cy.get('#Company-Name').type(random.getRandomString(15))
    cy.get('#email').type(userEmail)
    cy.get('#Contact-Number').type(random.getRandomNumber(10))
    cy.get('#Message').type(usedTexts.applyMessage)
    cy.get('.w-checkbox-input')
        .scrollIntoView()
        .should('be.visible')
        .click()
    cy.get('[value="Submit Application"]').click()
    cy.get('[aria-label="Contact Form success"]').should('contain.text', usedTexts.contactFormText)
    })
})
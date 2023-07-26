
import { urls } from '../pageData/urls.js'

describe('Testing AirportLabs website - Task 4', () => {

    it('Clicks on Facebook icon and verifies redirect link', () => {
        cy.visit(urls.from, { failOnStatusCode: false })
        cy.url().should('be.equals', urls.from)
        cy.get("a[href='" + urls.toFacebook + "']").invoke('removeAttr', 'target').click()
        cy.origin(urls.toFacebook, { args: { to: urls.toFacebook } }, ({ to }) => {
            cy.url().should('be.equals', to);
        })
    })

    it('Clicks on Instagram icon and verifies redirect link', () => {
        cy.visit(urls.from, { failOnStatusCode: false })
        cy.url().should('be.equals', urls.from)
        cy.get("a[href='" + urls.toInstagram + "']").invoke('removeAttr', 'target').click()
        cy.origin(urls.toInstagram, { args: { to: urls.toInstagram } }, ({ to }) => {
            cy.url().should('be.equals', to);
        })
    })

    it('Clicks on Linkedin icon and verifies redirect link', () => {
        cy.visit(urls.from, { failOnStatusCode: false })
        cy.url().should('be.equals', urls.from)
        cy.get("a[href='" + urls.toLinkedin + "']").invoke('removeAttr', 'target').click()
        cy.origin(urls.toLinkedin, { args: { to: urls.toLinkedin } }, ({ to }) => {
            cy.url().should('include', to);
        })
    })
})
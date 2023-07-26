import { urls } from '../pageData/urls.js'
import { usedTexts } from '../pageData/usedTexts.js'

describe('Testing E-commerce Website - Emag', () => {
    before(() => {
        cy.viewport('macbook-16')
        cy.visit(urls.emag)
    })

it('Select a TV and an accessory for TV and add them to cart', () => {
    //select a TV and add it to  cart
    cy.get('[data-id="190"]').first().should('be.visible').click() //selects TV category
    cy.get('[data-id="6441"]',{timeout: 10000}).should('be.visible').click() //selects OLED TV category
    
    cy.get('a').contains(usedTexts.descendingPrice).click({force: true}) //order the TV category by descending price

    cy.get('#card_grid .preloader').should('not.exist') //waits for loader to disappear
    cy.get('a').contains('Samsung').click({force: true}) //selects Samsung brand

    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('[data-option-id="3-5"]').click() //selects minimum 3 stars rating

    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('[type="submit"]').first().click() //add the most expensive TV to cart
    cy.get('.modal-header',{timeout: 50000}).should('be.visible').and('contain.text', usedTexts.cartProduct) //verifies that the product has been added to cart
    cy.get('[aria-label="Inchide"]').click() // close the modal

    cy.scrollTo('top')

    // Add a TV accessory to cart
    cy.get('.sidebar-tree-body a', {timeout:10000}).eq(5).should('be.visible').click() //goes to Accessory TV category
    cy.contains('h1', usedTexts.tvAccessory).should('be.visible') //verifies if the correct page has been selected

    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('a').contains(usedTexts.ascendingPrice).click({force: true}) // order the TV category by ascending price

    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('[data-name="Samsung"]').should('be.visible').click() //selects Samsung brand
    
    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('[data-option-id="3-5"]', {timeout: 20000}).click() //selects minimum 3 stars rating

    cy.get('#card_grid .preloader').should('not.exist') 
    cy.get('[type="submit"]').first().click() //add the least expensive TV to cart
    cy.get('.modal-header', {timeout: 50000}).should('be.visible').and('contain.text', usedTexts.cartProduct) //verifies that the product has been added to cart
    })
})

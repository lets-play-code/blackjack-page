import { When, Then } from "cypress-cucumber-preprocessor/steps";
const url = "/"

When('I open game hall page', () => {
    cy.visit(url)
})

Then(`I can see text {string}`, (text) => {
    cy.get('#app').should('contain', text);
})

When(`I click {string} button`, () => {
    cy.get('button').click();
})

Then(`I can see {string} button`, (text) => {
    cy.get('button').should('have.text', text);
})

Then(`I can see {int} card(s)`, (num) => {
    cy.get('.card').should('have.lengthOf', num);
})
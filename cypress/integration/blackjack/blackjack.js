import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const url = "/"

When('I open game hall page', () => {
    cy.visit(url)
})

Then(`I can see text {string}`, (text) => {
    cy.get('#app').should('contain', text);
})  

Then(`game is runing`, (text) => {
    cy.get('#gameResult').should('contain', "running");
})  

When(`I start game`, (text) => {
    cy.get('button').contains('Start').click();
})


When(`I close deal`, (text) => {
    cy.get('button').contains('CloseDeal').click();
})


Given(`server response data {string} {string}`, (url, json) => {
    cy.fixture('dynamic').then((data) => {
        cy.server()
        data = json;
        cy.route('POST', url, data);
    });
})

Then(`I can see {string} button`, (text) => {
    cy.get('button').contains(text).should('exist');
})

Then(`I can see host cards {string}`, (text) => {
    cy.get('#host').find('.card').should( ($card) => {
       expect($card.text()).to.deep.eq(text);
    });
})
Then(`I can see player cards {string}`, (text) => {
    cy.get('#player').find('.card').should( ($card) => {
       expect($card.text()).to.deep.eq(text);
    });
})



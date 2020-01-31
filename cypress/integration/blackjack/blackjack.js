import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const url = "/"
let pact_state = ""

before(() => {
    cy.task("pact:setup");
});

after(() => {
    cy.task("pact:shutdown");
});

beforeEach(() => {
    cy.task("pact:clear");
});

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

Given(`state {string}`, (state) => {
    pact_state = state
})

Given(`server response data {string}`, (url, json) => {
    cy.task('pact:addInteraction', {
        state: pact_state,
        uponReceiving: "a request for " + url,
        withRequest: {
          method: "POST",
          path: "/" + url
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: json
        }
    })
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



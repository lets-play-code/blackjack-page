/// <reference types="Cypress" />

context("Contract for backend", () => {
  beforeEach(() => {
    cy.task('pact:setup')
  });

  afterEach(() => {
    cy.log("provider shutdown......")
    cy.task('pact:shutdown')
  });


  it("should return cards", () => {
    cy.log("running......")
    cy.task('pact:addInteraction', {
        uponReceiving: "a request for start game",
        withRequest: {
          method: "POST",
          path: "/startgame"
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: {
            "host": {"cards":["A1","A3"]},
            "player": {"cards":["A2","B2"]}
          }
        }
      })

    cy.visit("/");
    cy.get('button').contains('Start').click();
    cy.get('#host').find('.card').should( ($card) => {
       expect($card.text()).to.deep.eq('🂡🂣');
    });
  });
});
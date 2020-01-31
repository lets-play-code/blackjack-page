context("Contract for backend", () => {
  before(() => {
    cy.task('pact:setup')
  });

  after(() => {
    cy.task('pact:shutdown')
  });

  beforeEach(() => {
    cy.task('pact:clear')
  });

  it("should return cards", () => {
    cy.task('pact:addInteraction', {
        state: "cards are A2, A1, B2, A3",
        uponReceiving: "a request for startgame",
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
            "host": {"cards":["A1"]},
            "player": {"cards":["A2","B2"]}
          }
        }
    })

    cy.visit("/");
    cy.get('button').contains('Start').click();
    cy.get('#host').find('.card').should( ($card) => {
       expect($card.text()).to.deep.eq('🂡');
    });
  });

  it("should return other cards", () => {
    cy.task('pact:addInteraction', {
        state: "cards are C1, C2, C3, C4",
        uponReceiving: "a request for startgame",
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
            "host": {"cards":["C2"]},
            "player": {"cards":["C1", "C3"]}
          }
        }
      })

    cy.visit("/");
    cy.get('button').contains('Start').click();
    cy.get('#host').find('.card').should( ($card) => {
       expect($card.text()).to.deep.eq('🃂');
    });
  });
});
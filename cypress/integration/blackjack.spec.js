describe('My First Test', function() {
    it('should see message when open game page', function() {
        cy.visit('http://localhost:8090')
          .get('#app').should('contain', 'Start Play Black Jack');
    })
})

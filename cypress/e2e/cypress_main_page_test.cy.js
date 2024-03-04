describe('Hlavní stránka', () => {
    beforeEach(() => {
        cy.visit('index.html');

});

it('Hlavni napis by mel byt viditelny', () =>{
    cy.get("header h1").should("be.visible");
});

it('Hlavni napis by mel obsahovat text "Automatizované testování"', () => {
    cy.get('header h1').should('contain.text', 'Automatizované testování');
});


})

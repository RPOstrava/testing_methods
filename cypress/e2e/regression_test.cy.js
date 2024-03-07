describe("Regression test", () => {
    const pages = [
        "teorie.html",
        "prakticke-ukoly.html",
        "diskuzni-forum.html",
        "odevzdat-projekt.html"
    ];

    it("Verifying the presence of regression test text", () => {
        pages.forEach(page => {
            cy.visit(page);
            cy.get('.regression-test')
                .should('exist')
                .and('contain', 'This text is for regression testing purposes only, it has no impact on the page or the project');
        });
    });
});
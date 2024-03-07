describe("Smoke test", () => {
    it("Smoke test", () => {
        cy.visit('index.html');
    
            
        const images = [
            "theory.png",
            "prakticke-ukoly.png",
            "diskuzni-forum.png",
            "odevzdat-projekt.png"
        ];

        images.forEach((image) => {
            cy.get(`img[src*="${image}"]`).click();
            cy.wait(1000);
            cy.screenshot();
            cy.go("back");
        });

    });
})
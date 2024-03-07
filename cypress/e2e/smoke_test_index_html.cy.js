describe("Smoke test", () => {
    it("Smoke test", () => {
        cy.visit('index.html');
    
            
        const links = [
        "teorie",
        "prakticke-ukoly",
        "diskuzni-forum",
        "odevzdat-projekt"
        ];

        links.forEach((link) => {
            cy.contains("links").click();
            cy.wait(1000);
            cy.screenshot();
            cy.go("back");

        });

    });
})
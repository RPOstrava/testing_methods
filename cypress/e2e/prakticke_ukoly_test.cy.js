describe('Hlavní stránka', () => {
    beforeEach(() => {
        cy.visit('index.html');

    });

    it("Unit tests", () => {
        cy.visit("prakticke-ukoly.html");

        const testing_links = [
            {"Test funkčnosti tlačítka" : "zda tlačítko provádí požadovanou akci"},
            {"Test validace formuláře" : "správně validuje vstupy"},
            {"Test ověření textu" : "správnost textu na stránce"},
            {"Test načasování" : "časové aspekty aplikace"},
            {"Test navigace": "ověření správnosti navigace"},
            {"Test kompatibility prohlížeče" : " webová stránka nebo aplikace správně zobrazována"},
            {"Test API" : "API funguje správně"},
            {"Test webové služby" : "funkčnost a integritu webové služby"},
            {"Test zabezpečení" : "je aplikace nebo stránka chráněna"},
        ];
        testing_links.forEach((link) => {
            const testTitle = Object.keys(link)[0];
            const testDescription = link[testTitle];         
            cy.contains(testTitle).click();
            cy.contains(testDescription).should("be.visible");
            cy.screenshot();
        }); 
        
    });

});
        
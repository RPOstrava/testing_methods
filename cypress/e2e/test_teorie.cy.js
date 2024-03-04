describe('Hlavní stránka', () => {
    beforeEach(() => {
        cy.visit('index.html');

    });

    it("Test teoreticke stranky", () => {
        cy.visit("teorie.html");
        describe('Hlavní stránka', () => {
            beforeEach(() => {
                cy.visit('index.html');
                
            });
        
            it("Test teoreticke stranky", () => {
                cy.visit("teorie.html");
                cy.contains("Software Testing Tutorial").click();     
                cy.wait(1000);
                cy.screenshot();
                cy.visit("teorie.html");
                cy.wait(1000);
                cy.screenshot();
                cy.contains("Selenium Documentation").click();
                cy.wait(1000);
                cy.screenshot();
                cy.visit("teorie.html");
                cy.wait(1000);
                cy.screenshot();
                cy.contains("SoapUI Tutorial").click();
                cy.wait(1000);
                cy.screenshot();
                cy.visit("teorie.html");
                cy.wait(1000);
                cy.screenshot();
                cy.contains("Postman Documentation").click();
                cy.wait(1000);
                cy.screenshot();
                cy.contains('Domů').click();

            });
                
       
        });
        
    });
    
});

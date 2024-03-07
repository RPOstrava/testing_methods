describe("Integration Test", () => {
    beforeEach(() => {
        cy.visit("diskuzni-forum.html");
    });

    it("Filling in answers and submitting", () => {

        function generateRandomText() {
            const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let randomText = '';
            for (let i = 0; i < 10; i++) { 
                randomText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
            }
            return randomText;
        }
        
        const questions = [
            "Jaký je nejlepší nástroj pro automatizované testování?",
            "Jak začít s automatizovaným testováním?",
            "Jaký je význam automatizovaného testování?",
            "Které jsou nejčastější chyby při automatizovaném testování?",
            "Jaké jsou výhody automatizovaného testování?"
        ];

        questions.forEach((question, index) => {
            const answerInputSelector = `:nth-child(${index + 2}) > .response-input > input`;
            const randomText = generateRandomText(); 
            cy.get(answerInputSelector).type(randomText);
        });

        cy.get('.response-button').click();
    });
});

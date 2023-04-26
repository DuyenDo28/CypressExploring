describe('Exploring default command timeout', () => {
    it('should be able to apply custom default timeout',() => {
        cy.visit("https://the-internet.herokuapp.com/login")
        //cy.get("#taolao",{timeout:10000}).type("abc")
       // cy.get("#username", {timeout:10000}).type("username")
        cy.get("#username__").type("username")
        cy.get("#password...").type("username")
      
    });
    
});
describe('Multiple learning element matching interaction', () => {

    it('should be able to interact with list of elements', () => {
        cy.visit("/login")
        // cy.get("input").eq(0).type("tomsmith")
        // cy.get("input").eq(1).type("SuperSecretPassword!")

        // // use closure
        // cy.get("input").then(item =>{
        //     cy.get(item[0]).clear()
        //     cy.get(item[0]).type("tomsmith")
        //     cy.get(item[1]).clear()
        //     cy.get(item[1]).type("SuperSecretPassword!")
        // })
        cy.get("input").each((item, index) =>{
            cy.get(item).type("something")
        })
        cy.get("button[type='submit']").click()

        // Debug purpose only
        cy.wait(5000)
        
    });
});
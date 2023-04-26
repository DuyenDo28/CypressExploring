const DROPDOWN_SEL = "select[id='dropdown']";

describe('Dropdown handling', () => {
    it('should be able to select dropdown option', () => {
        
    // Visit the page
    cy.visit("/dropdown");

    // Select by index | Select Option1
    cy.get(DROPDOWN_SEL).select(1)


    // Select by index | Select Option2
    cy.get(DROPDOWN_SEL).select("2")

    // Select by visible text | Select Option1
    cy.get(DROPDOWN_SEL).select("Option 1");
    
    // Select by selected option is now Option1
    cy.get("select option:selected").invoke("text").should("eq", "Option 1" );

    });
    
});
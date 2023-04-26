const SEARCH_TEXTBOX_SEL = "#twotabsearchtextbox";
const SEARCH_BTN_SEL = "#nav-search-submit-button";

class AmazonHomePage{

    get searchTxtBxElem(){
        return cy.get(SEARCH_TEXTBOX_SEL)
    }

    get searchBtnElem(){
        return cy.get(SEARCH_BTN_SEL)
    }
    
}

module.exports = AmazonHomePage

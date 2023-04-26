import AmazonHomePage from "../models/pages/AmazonHomePage";
import AmazonSearchResultPage from "./AmazonSearchResultsPage";

describe('Amazon search text', () => {

it('should be able to search dining table', () => {
    
    const SEARCH_TEXT = "dining table";
    cy.visit("/");
    let amzHomePage = new AmazonHomePage();
    amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
    amzHomePage.searchBtnElem.click();

    let amzSearchResultPage = new AmazonSearchResultPage();
    amzSearchResultPage.searchItemElemenList.should("not.have.length",0);
    
});
    
});
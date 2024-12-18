import homePage from "../pages/home-page"
import searchResultPage from "../pages/search-result-page";


Cypress.Commands.add('goToWikipediaWebsite', () => {
    cy.intercept('GET', '/portal/wikipedia.org/**').as('getHomeInfos');
    cy.visit('https://www.wikipedia.org');
    cy.wait('@getHomeInfos').its('response.statusCode').should('eq', 200);
})


Cypress.Commands.add('checkMainElementsOfTheMainPage', () => {
    homePage.checkThePageTitle();
    homePage.checkTheLogo();
    homePage.checkLinkPortugueseArticles();
    homePage.checkLinkRussianArticles();
    homePage.checkLinkGermanArticles();
    homePage.checkLinkSpanishArticles();
    homePage.checkLinkItalianArticles();
    homePage.checkLinkEnglishArticles();
    homePage.checkLinkJapaneseArticles();
    homePage.checkLinkFrenchArticles();
    homePage.checkLinkChineseArticles();
    homePage.checkLinkPersianArticles();
    homePage.checkInputSearch();
    homePage.checkButtonSearch();
    homePage.checkButtonReadWikipediaInYourLanguage();
})


Cypress.Commands.add('searchByTerm', (term) => {
    if (typeof term !== 'string') {
        throw new TypeError('The parameter used is not of type string.')
    }
    cy.checkMainElementsOfTheMainPage();
    homePage.performSearchByTerm(term);
})

Cypress.Commands.add('checkElementsOfTheTermPage', (term) => {
    cy.searchByTerm(term);
    searchResultPage.checkLogoWikipedia();
    searchResultPage.checkTitleBrazil(term);
    searchResultPage.checkTextNote(term);
    searchResultPage.checkTableHeaderBold();
    searchResultPage.checkTableHeaderSubtitle(term);
    searchResultPage.checkImgFlagBrazil();
    searchResultPage.checkImgCoatOfArms();
    searchResultPage.checkImgMapMundi();
})
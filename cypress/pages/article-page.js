/// <reference types="cypress" />

class ArticlePage {
    elements = {
        logoWikipedia: '.mw-logo-container',
        titleBrazil: '.mw-page-title-main',
        textNote: '.mw-content-ltr > :nth-child(1)' ,
        tableHeaderBold: '.fn > span > i',
        tableHeaderSubtitle: 'th > small',
        imgFlagBrazil: 'img[alt="Bandeira do Brasil"]',
        linkFlagBrazil: 'div > a[title="Bandeira do Brasil"]',
        imgCoatOfArms: 'img[alt="Armas Nacionais"]',
        linkFlagMotto: 'a[title="Brasão de armas do Brasil"]', 
        secondParagraph: '.mw-content-ltr > :nth-child(5)',
        imgMapMundi: 'td > .mw-default-size > .mw-file-description > .mw-file-element',
        fullPage: 'body'
    }

    checkLogoWikipedia(){
        cy.get(this.elements.logoWikipedia).should('be.visible').compareSnapshot("logo-article");
        return this;
    }

    checkTitleBrazil(term){
        cy.get(this.elements.titleBrazil).should('be.visible').compareSnapshot("title-article");
        cy.contains(term);
        return this;
    }

    checkTextNote(term) {
        cy.get(this.elements.textNote).should('be.visible').compareSnapshot("text-note-article");
        cy.get(this.elements.textNote).invoke('text').then((text) => {
            expect(text.trim()).to.contain(term)
          })
        
    }

    checkTableHeaderBold() {
        cy.get(this.elements.tableHeaderBold).should('be.visible').compareSnapshot("table-title");
        cy.contains('República Federativa do Brasi')
        return this;
    }

    checkTableHeaderSubtitle(term) {
        cy.get(this.elements.tableHeaderSubtitle).should('be.visible').compareSnapshot("table-subtitle");
        cy.contains(term);
        return this;
    }

    checkImgFlagBrazil() {
        cy.get(this.elements.imgFlagBrazil).should('be.visible').compareSnapshot("img-flag-br");
        cy.get(this.elements.linkFlagBrazil).invoke('text').then((text) => {
          expect(text.trim()).to.equal('Bandeira')
        })
        return this;
    }

    checkImgCoatOfArms() {
        cy.get(this.elements.imgCoatOfArms).should('be.visible').compareSnapshot("img-coat-arms");
        cy.get(this.elements.linkFlagMotto).invoke('text').then((text) => {
            expect(text.trim()).to.equal('Brasão de armas')
        })
        return this;
    }
   
    checkImgMapMundi() {
        cy.get(this.elements.secondParagraph).scrollIntoView({ block: 'start', inline: 'nearest' }).should('be.visible');
        cy.get(this.elements.imgMapMundi).should('be.visible').compareSnapshot("img-map-mundi");
        return this;
    }

    checkPage() {
        cy.get(this.elements.fullPage).should('be.visible').compareSnapshot("article-page", {errorThreshold: 0.5});
        return this;
    }
}

export default new ArticlePage();
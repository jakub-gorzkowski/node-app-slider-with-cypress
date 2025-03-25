describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });

  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  it('Checks navigation buttons work', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('exist');
  });

  it('Checks slide descriptions', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active .card-description h1').should('be.visible');
    cy.get('.swiper-slide-active .card-description p').should('be.visible');
    
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active .card-description h1').should('be.visible');
    cy.get('.swiper-slide-active .card-description p').should('be.visible');
    
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active .card-description h1').should('be.visible');
    cy.get('.swiper-slide-active .card-description p').should('be.visible');
  });

  it('Checks gallery responsiveness', function () {
    cy.visit('http://localhost:3000');
    cy.viewport(1200, 800);
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');

    cy.viewport(375, 667);
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');
  });

  it('Checks gallery display', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');
  });
});
/// <reference types="cypress" />

describe('Access Testing', () => {
    it('reach the access point', () => {
        cy.visit('/');
        cy.get('[aria-label="System Dictionary"]').click();
    });
});

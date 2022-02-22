/// <reference types="cypress" />

describe('Test Dictionary', () => {
    it('reach the test dictionary page', () => {
        cy.visit('/');
        cy.get('[aria-label="System Dictionary"]').click();
        cy.contains('Test Dictionary').click();
    });
});

describe('Test Dictionary', () => {
    beforeEach(() => {
        cy.visit('/System-Dictionary/test-dictionary-table');
    });

    it('search a Test code', () => {
        cy.get('input[name="testCode"]').type('0081');
        cy.contains('Search').click();
        cy.get('table').contains('0081');
    });
});

describe('Test Dictionary Check for the data', () => {
    it('search a Test code', () => {
        cy.get('input[name="testCode"]').clear().type('V371');
        cy.contains('Search').click();
        cy.get('table').contains('V371');
        cy.get('[data-testid="EditIcon"]').click();
        cy.contains('Test Information');
        cy.get('input[name="abbr"]').should($input => {
            const val = $input.val();
            expect(val).to.include('V251');
        });
        cy.get('select[name="resulttype"]').should($input => {
            const val = $input.val();
            // $input.text().should('include', 'Numeric');
            expect(val).to.include('N');
        });
        cy.get('input[name="wshseq"]').should($input => {
            const val = $input.val();
            expect(val).to.include('0');
        });
        cy.get('select[name="type"]')
            .should($input => {
                const val = $input.val();
                expect(val).to.include('M');
            })
            .contains('Toxicology');
        cy.get('[name="inactive"]').should('be.checked');
        cy.get('input[name="name"]').should($input => {
            const val = $input.val();
            expect(val).to.include('251-NBOME');
        });
    });
});

describe('move to options Tab', () => {
    it('click on options tab', () => {
        cy.contains('Options').click();
    });
    it('check to have Test options label', () => {
        cy.contains('Test Options');
    });
    it('check to have Test options label', () => {
        cy.contains('Test Options');
    });
    it('click on options tab', () => {
        cy.contains('Ranges').click();
    });
    it('check to have Test options label', () => {
        cy.contains('Range History');
    });
});

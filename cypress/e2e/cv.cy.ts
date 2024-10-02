import {APP_API} from './../../src/app/config/app-api.config';
describe('Page Cv', () => {
  it('should contain CvList', () => {
    cy.intercept(APP_API.cv, {fixture:'cvs'});
    cy.visit('/cv');
    cy.get('[data-cy="cvList"]');
    cy.get('[data-cy="cvCard"]').should('not.exist');
    cy.get('[data-cy="cvList"]').children().first().click();
    cy.get('[data-cy="cvCard"]').contains('Aymen');
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get('[data-cy="cvCardDetailsButton"]').click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });
  });
});

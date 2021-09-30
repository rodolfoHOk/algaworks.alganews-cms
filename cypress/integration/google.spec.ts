/* eslint-disable jest/valid-expect */
/// <reference types="Cypress" />

describe('my first test', () => {
  it('compares value with true', () => {
    const value = true;
    expect(value).to.equal(true);
  });

  it('searches for "teste automatizado com Cypress" in google', () => {
    cy.visit('https://google.com.br');

    cy.get('input[type="text"]').type('teste automatizado com Cypress');

    cy.contains('Pesquisa Google').click();
  });
});

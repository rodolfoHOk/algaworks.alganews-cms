/* eslint-disable jest/valid-expect */
/// <reference types="Cypress" />

describe('my first test', () => {
  it('compares value with true', () => {
    const value = true;
    expect(value).to.equal(true);
  });
});

import { getGreeting, getProducts, getAddProductButton } from '../support/app.po';

describe('shop-front-fed', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to shop-front-fed!');
  });
});

describe('Products List', () => {
  beforeEach(() => cy.visit('/'));

  it('should display products', () => {
    getProducts().should(products => expect(products.length).equal(2));
    getAddProductButton().click();
    getProducts().should(products => expect(products.length).equal(3));
  });
});
import { getProducts, getAddProductButton } from '../support/app.po';

describe('Products List', () => {
  beforeEach(() => cy.visit('/'));

  it('should display products', () => {
    getProducts().should(products => expect(products.length).equal(2));
    getAddProductButton().click();
    getProducts().should(products => expect(products.length).equal(3));
  });
});

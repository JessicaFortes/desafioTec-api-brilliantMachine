import productSchema from '../support/contract/productsContract'
import productsActions from '../support/utils/productionsActions'

describe('Lista de produtos Fake Store', () => {
  it('[GET products] Validate product endpoint contract', () => {
    cy.getProducts().then((response) => {
      expect(response.status).to.equal(200);
      productSchema.validate(response.body)
      cy.log("List of products:")
      cy.log(response.body)
    })
  })

  it('[GET products] Get list of electronic products', () => {
    cy.getProducts().then((response) => {
      expect(response.status).to.equal(200);
      const prodEletronics = productsActions.getProductsByCategory(response.body, "electronics");
      expect(prodEletronics.length).to.be.greaterThan(4);
      cy.log("List of products electronic:")
      cy.log(prodEletronics)
    })
  })

})
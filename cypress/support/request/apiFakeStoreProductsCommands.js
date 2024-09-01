let urlProducts = Cypress.env("baseUrl") + "/products";

Cypress.Commands.add("getProducts", () => {
  console.log(urlProducts);
  cy.request({
    method: "GET",
    url: urlProducts
  });
});

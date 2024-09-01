# Technical automation test

Create an automated API test using any JS framework or library

### Challenge:

1) Call https://fakestoreapi.com/products
2) Read the response, find all objects with property “electronics”
3) Compare the response if the objects have the select property
4) Count the number of times that the property above appears
5) Verify the number of objects with the property above appears with rate bigger than 4
6) Finally print found objects to console

### Framework:
 - Cypress 13.14.1

### Languages:
 - Javascript
 - Joi

## Installation:
After downloading the project from GitHub, open the terminal and run the command below
> npm install

## Execution:
To run the project via terminal looking at the production environment settings, run the command below
> npm run test-prod

To run the project by opening cypress looking at the production environment settings run the command below
> npm run test-open-prod
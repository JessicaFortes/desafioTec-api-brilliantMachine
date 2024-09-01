

function getProductsByCategory(listProducts, category) {
    let newListProducts = [];

    listProducts.forEach(object => {
        if (object.category === category) {
            newListProducts.push(object)
        }
    });
    return newListProducts
}

function countProductsByCategory(listProducts, category) {
    let numProducts = 0;
    listProducts.forEach(object => {
        if (object.category === category) {
            numProducts = ++numProducts
        }
    });
    return numProducts

}

module.exports = { getProductsByCategory, countProductsByCategory }
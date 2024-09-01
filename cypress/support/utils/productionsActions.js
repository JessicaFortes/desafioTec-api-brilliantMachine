

function getProductsByCategory(listProducts, category) {
    const newListProducts = [];

    listProducts.forEach(object => {
        if (object.category === category) {
            newListProducts.push(object)
        }
    });
    return newListProducts
}

function validateProductsListByCategory(listProducts, category) {
    listProducts.forEach(object => {
        if (object.category === category) {
            newListProducts.push(object)
        }
    });
    console.log(newListProducts)
    return newListProducts

}

module.exports = { getProductsByCategory }
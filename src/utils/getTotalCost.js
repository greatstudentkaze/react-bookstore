const getTotalCost = products => products.reduce((total, product) => total + product.price, 0);

export default getTotalCost;

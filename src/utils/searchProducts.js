const searchProducts = (products, searchQuery) => {
  if (searchQuery.trim()) {
    products = products
      .filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.author.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return products;
};

export default searchProducts;

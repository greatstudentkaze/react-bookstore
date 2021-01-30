import { orderBy } from 'lodash';

const sortProductsBy = (products, category) => {
  switch (category) {
    case 'highest_price':
      return orderBy(products, 'price', 'desc');
    case 'lowest_price':
      return orderBy(products, 'price', 'asc');
    case 'author':
      return orderBy(products, 'author', 'asc');
    default:
      return products;
  }
};

export default sortProductsBy;

import { connect } from 'react-redux';

import { Button, Card, Icon, Image } from 'semantic-ui-react';

import { addToCart } from '../../actions/cart';

const CatalogItem = ({ product, addToCart, addedToCartQuantity }) => {
  const { title, author, image: imageUrl, price, rating } = product;

  const handleClick = () => addToCart(product);

  return (
    <Card as="li">
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="rub" />
        {price}
      </Card.Content>
      <Button onClick={handleClick} type="button">
        Добавить в корзину {addedToCartQuantity > 0 && `(${addedToCartQuantity})`}
      </Button>
    </Card>
  );
};

const mapStateToProps = ({ cart }, { product: { id } }) => ({
  addedToCartQuantity: cart.items
    .reduce((quantity, product) => quantity + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);

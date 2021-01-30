import { connect } from 'react-redux';

import { Button, Image, List } from 'semantic-ui-react';

import { removeFromCart } from '../../actions/cart';
import { uniqBy } from 'lodash';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <List selection divided verticalAlign="middle">
      {
        cartItems.map(item =>
          <List.Item key={item.id}>
            <List.Content floated="right">
              <Button onClick={removeFromCart.bind(this, item.id)} color="red" type="button">Удалить</Button>
            </List.Content>
            <Image avatar src={item.image} />
            <List.Content>{item.title}</List.Content>
          </List.Item>
        )
      }
    </List>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: uniqBy(cart.items, item => item.id),
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

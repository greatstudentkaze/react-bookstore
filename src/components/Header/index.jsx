import React from 'react';
import { connect } from 'react-redux';

import { Menu } from 'semantic-ui-react';

import { removeFromCart } from '../../actions/cart';
import getTotalCost from '../../utils/getTotalCost';

class Header extends React.Component {
  render() {
    const { cartItemsCount, totalCost } = this.props;

    return (
      <Menu>
        <Menu.Item
          name='shop'
          // active={activeItem === 'browse'}
          // onClick={this.handleItemClick}
        >
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='cost'
            // active={activeItem === 'signup'}
            // onClick={this.handleItemClick}
          >
            Итого: {totalCost} руб.
          </Menu.Item>

          <Menu.Item
            name='cart'
            // active={activeItem === 'help'}
            // onClick={this.handleItemClick}
          >
            Корзина (<b>{cartItemsCount}</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items,
  cartItemsCount: cart.items.length,
  totalCost: getTotalCost(cart.items),
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

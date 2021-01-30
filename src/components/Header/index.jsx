import React from 'react';
import { connect } from 'react-redux';

import { Menu, Popup } from 'semantic-ui-react';
import Cart from '../Cart';

import getTotalCost from '../../utils/getTotalCost';

class Header extends React.Component {
  render() {
    const { cartItemsCount, totalCost } = this.props;

    return (
      <Menu>
        <Menu.Item>Магазин книг</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item >Итого: {totalCost} руб.</Menu.Item>
          <Popup
            trigger={<Menu.Item>Корзина (<b>{cartItemsCount}</b>)</Menu.Item>}
            content={<Cart />}
            on="click"
            hideOnScroll
            wide
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cartItemsCount: cart.items.length,
  totalCost: getTotalCost(cart.items),
});

export default connect(mapStateToProps)(Header);

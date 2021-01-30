import React from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {
  render() {
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
            Итого: 0 руб.
          </Menu.Item>

          <Menu.Item
            name='cart'
            // active={activeItem === 'help'}
            // onClick={this.handleItemClick}
          >
            Корзина
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;

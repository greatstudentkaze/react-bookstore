import React from 'react';
import { connect } from 'react-redux';

import { Menu } from 'semantic-ui-react';

import { setFilter } from '../../actions/catalog';

const Filter = ({ filterBy, setFilter }) => {

  const handleItemClick = (evt, { name }) => setFilter(name);

  return (
    <Menu secondary>
      <Menu.Item
        name='all'
        active={filterBy === 'all'}
        onClick={handleItemClick}
        children="Все"
      />
      <Menu.Item
        name='popular'
        active={filterBy === 'popular'}
        onClick={handleItemClick}
        children="Популярные"
      />
      <Menu.Item
        name='lowest_price'
        active={filterBy === 'lowest_price'}
        onClick={handleItemClick}
        children="Стоимость (дешёвые)"
      />
      <Menu.Item
        name='highest_price'
        active={filterBy === 'highest_price'}
        onClick={handleItemClick}
        children="Стоимость (дорогие)"
      />
      <Menu.Item
        name='author'
        active={filterBy === 'author'}
        onClick={handleItemClick}
        children="Автор"
      />
    </Menu>
  );
}

const mapStateToProps = ({ catalog }) => ({
  filterBy: catalog.filterBy,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

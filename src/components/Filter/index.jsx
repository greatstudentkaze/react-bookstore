import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Menu, Input } from 'semantic-ui-react';

import { setFilter, setSearchQuery } from '../../actions/filter';

const StyledMenu = styled(Menu)`
  flex-wrap: wrap;
  row-gap: 10px;
`;

const Filter = ({ filterBy, searchQuery, setFilter, setSearchQuery }) => {

  const handleItemClick = (evt, { name }) => setFilter(name);

  return (
    <StyledMenu secondary>
      <Menu.Item
        name='all'
        active={filterBy === 'all'}
        onClick={handleItemClick}
        children="Все"
      />
      <Menu.Item
        name='lowest_price'
        active={filterBy === 'lowest_price'}
        onClick={handleItemClick}
        children="Стоимость (сначала дешёвые)"
      />
      <Menu.Item
        name='highest_price'
        active={filterBy === 'highest_price'}
        onClick={handleItemClick}
        children="Стоимость (сначала дорогие)"
      />
      <Menu.Item
        name='author'
        active={filterBy === 'author'}
        onClick={handleItemClick}
        children="Автор (в алфавитном порядке)"
      />
      <Menu.Item>
        <Input
          value={searchQuery}
          onChange={evt => setSearchQuery(evt.target.value)}
          placeholder="Введите название..."
          icon="search" />
      </Menu.Item>
    </StyledMenu>
  );
}

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery,
});

const mapDispatchToProps = {
  setFilter,
  setSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

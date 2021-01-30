import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { Card } from 'semantic-ui-react';

import CatalogItem from '../CatalogItem';
import Filter from '../Filter';
import Loader from '../Loader';

import { hideLoader, showLoader } from '../../actions/app';
import { setProducts } from '../../actions/catalog';
import { setFilter } from '../../actions/filter';
import searchProducts from '../../utils/searchProducts';
import sortProductsBy from '../../utils/sortProductsBy';

const StyledCatalog = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const CatalogList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

class Catalog extends React.Component {

  componentDidMount() {
    const { setProducts, showLoader, hideLoader } = this.props;

    showLoader();
    axios.get('https://60151aae55dfbd00174c9fa6.mockapi.io/books')
      .then(response => {
        setProducts(response.data);
        hideLoader();
      });
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <StyledCatalog>
        <Filter />
        <CatalogList className="ui four cards" itemsPerRow={4}>
          {
            isLoading
              ? <Loader />
              : products.map(product =>
                  <CatalogItem key={product.id} {...product} />
              )
          }
        </CatalogList>
      </StyledCatalog>
    );
  }
}

const mapStateToProps = ({ app, catalog, filter }) => ({
  products: sortProductsBy(searchProducts(catalog.items, filter.searchQuery), filter.filterBy),
  isLoading: app.isLoading,
});

const mapDispatchToProps = {
  setFilter,
  setProducts,
  showLoader,
  hideLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

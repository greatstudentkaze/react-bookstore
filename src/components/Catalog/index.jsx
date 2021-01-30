import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { Card } from 'semantic-ui-react';

import Loader from '../Loader';
import CatalogItem from '../CatalogItem';

import { setProducts } from '../../actions/catalog';
import { hideLoader, showLoader } from '../../actions/app';

const StyledCatalog = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
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
        <Card.Group itemsPerRow={4}>
          {
            isLoading
              ? <Loader />
              : products.map(product =>
                <CatalogItem key={product.id} {...product} />
              )
          }
        </Card.Group>
      </StyledCatalog>
    );
  }
}

const mapStateToProps = ({ app, catalog }) => ({
  products: catalog.items,
  isLoading: app.isLoading,
});

const mapDispatchToProps = {
  setProducts,
  showLoader,
  hideLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

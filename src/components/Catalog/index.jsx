import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { Card } from 'semantic-ui-react';

import Loader from '../Loader';
import CatalogItem from '../CatalogItem';

import { setBooks } from '../../actions/books';
import { hideLoader, showLoader } from '../../actions/app';

const StyledCatalog = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`;

class Catalog extends React.Component {

  componentDidMount() {
    const { setBooks, showLoader, hideLoader } = this.props;

    showLoader();
    axios.get('https://60151aae55dfbd00174c9fa6.mockapi.io/books')
      .then(response => {
        setBooks(response.data);
        hideLoader();
      });
  }

  render() {
    const { books, isLoading } = this.props;

    return (
      <StyledCatalog>
        <Card.Group itemsPerRow={4}>
          {
            isLoading
              ? <Loader />
              : books.map(book =>
                <CatalogItem key={book.id} {...book} />
              )
          }
        </Card.Group>
      </StyledCatalog>
    );
  }
}

const mapStateToProps = ({ app, books }) => ({
  books: books.items,
  isLoading: app.isLoading,
});

const mapDispatchToProps = {
  setBooks,
  showLoader,
  hideLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

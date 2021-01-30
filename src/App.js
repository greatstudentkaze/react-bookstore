import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Container } from 'semantic-ui-react';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import CatalogItem from './components/CatalogItem';
import Loader from './components/Loader';

import { showLoader, hideLoader } from './actions/app';
import { setBooks } from './actions/books';

const newBooks = [
  {
    id: 0,
    title: 'New Book'
  }
];

class App extends React.Component {

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
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <ul className="ui container">
            {
              isLoading
                ? <Loader />
                : books.map(book =>
                  <li key={book.id}>
                    <CatalogItem data={book} />
                  </li>
                )
            }
          </ul>

          <button type="button" onClick={() => this.props.setBooks(newBooks)}>set new books</button>
        </Container>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

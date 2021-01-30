import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import GlobalStyle from './components/styled/GlobalStyle';

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
        <ul>
          {
            isLoading
              ? <p>Загрузка...</p>
              : books.map(book =>
                  <li key={book.id}>
                    <h3>{book.title}</h3>
                    <b>{book.author}</b>
                  </li>
                )
          }
        </ul>

        <button type="button" onClick={() => this.props.setBooks(newBooks)}>set new books</button>
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

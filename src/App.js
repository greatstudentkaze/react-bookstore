import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import GlobalStyle from './components/styled/GlobalStyle';

import { setBooks } from './actions/books';

const newBooks = [
  {
    id: 0,
    title: 'New Book'
  }
];

class App extends React.Component {

  componentDidMount() {
    const { setBooks } = this.props;

    axios.get('https://60151aae55dfbd00174c9fa6.mockapi.io/books')
      .then(response => {
        setBooks(response.data);
      });
  }

  render() {
    const { books } = this.props;

    return (
      <>
        <GlobalStyle />
        <ul>
          {
            books
              ? books.map(book =>
                <li key={book.id}>
                  <h3>{book.title}</h3>
                  <b>{book.author}</b>
                </li>
              )
              : <p>Загрузка...</p>
          }
        </ul>

        <button type="button" onClick={() => this.props.setBooks(newBooks)}>set new books</button>
      </>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
});

const mapDispatchToProps = {
  setBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

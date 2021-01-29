import { connect } from 'react-redux';

import GlobalStyle from './components/styled/GlobalStyle';

import { setBooks } from './actions/books';

const newBooks = [
  {
    id: 0,
    title: 'New Book'
  }
];

function App(props) {
  const { books } = props.books;

  return (
    <>
      <GlobalStyle />
      <p>{books[0].title}</p>
      <button type="button" onClick={() => props.setBooks(newBooks)}>setBOoks</button>
    </>
  );
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  setBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';

import { Container } from 'semantic-ui-react';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';

const App = () => {
  // todo: Добавить фильтрацию по популярности (в массиве products у объектов есть свойство rating)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Catalog />
      </Container>
    </>
  );
}

export default App;

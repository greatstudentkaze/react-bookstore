import React from 'react';

import { Container } from 'semantic-ui-react';

import GlobalStyle from './components/styled/GlobalStyle';
import Header from './components/Header';
import Catalog from './components/Catalog';

const App = () => {

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

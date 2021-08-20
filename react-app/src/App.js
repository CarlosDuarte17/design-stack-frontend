import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { BrowserRouter as Router } from "react-router-dom";

import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import { AppRoutes } from './pages/Route'

function App() {

  return (
    <AppContext.Provider value={{obj: 'hola'}} >
        <Router>
          <ChakraProvider theme={theme}>
            <Header />
            <AppRoutes />
          </ChakraProvider>
        </Router>
    </AppContext.Provider>
  );
}

export default App;

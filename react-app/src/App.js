import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';
import { AppRoutes } from './pages/Route'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={ queryClient }>
        <Router>
          <ChakraProvider theme={theme}>
            <Header />
            <AppRoutes />
          </ChakraProvider>
        </Router>
    </QueryClientProvider>
  );
}

export default App;

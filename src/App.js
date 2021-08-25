import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';

import { Header } from './components/Header';
import { AppRoutes } from './pages/Route'
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

const breakpoints = createBreakpoints({
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  '2xl': "1536px",
})

const theme = extendTheme({ breakpoints })

function App() {

  return (
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <ChakraProvider theme={theme}>
            <Header />
            <AppRoutes />
            <Footer />
          </ChakraProvider>
        </Router>
    </QueryClientProvider>
  );
}

export default App;

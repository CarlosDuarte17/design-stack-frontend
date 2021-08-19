import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';

import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import UploadImage from './pages/UploadImage';
import Home from './pages/Home';


function App() {

  return (
    <AppContext.Provider value={{obj: 'hola'}} >
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="uploads/new" element={<UploadImage />} />
       </Routes>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;

import React from 'react';
import { MenuButton, Button as ChakraButton } from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export function Button({ children }) {
  return (
    <MenuButton
      as={ChakraButton}
      borderColor="gray.200"
      color="gray.600"
      colorScheme="white"
      fontWeight="normal"
      fontSize="0.875rem"
      variant="outline"
      textAlign="start"
      w="100%"
      rightIcon={<ChevronDownIcon />}
      _focus={{
        backgroundColor: 'white',
        boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)',
        borderColor: 'rgba(234,76,137,0.4)',
      }}
      _active={{
        backgroundColor: 'white',
        boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)',
        borderColor: 'rgba(234,76,137,0.4)',
      }}
    >
      {children}
    </MenuButton>
  );
}

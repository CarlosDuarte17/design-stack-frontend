import { UnorderedList } from '@chakra-ui/react';
import React from 'react';

export function LinkGroup({ children }) {
  return (
    <UnorderedList
      flex={{ md: '1' }}
      w={{ base: '50%', xl: 'auto' }}
      m={0}
      styleType="none"
    >
      {children}
    </UnorderedList>
  );
}

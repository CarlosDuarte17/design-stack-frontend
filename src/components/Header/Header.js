import React from 'react'
import { Flex, Container} from '@chakra-ui/react';
import { NavRight, NavLeft } from './components';

export function Header() {
    return (
        <Flex 
          alignItems="center" 
          as="header" 
          bg="white" 
          borderWidth="1px" 
          borderBlockEnd="gray.400" 
          h={{ md: 'auto', lg: '80px' }}>
        <Container 
          alignItems="center" 
          display="flex" 
          justifyContent={{ 'base': 'center', lg: 'space-between'}}   
          mx="24px"
          marginBlock={{ base: '20px', lg: '0'}}
          maxW="100%" 
          flexWrap="wrap"
          px={0} 
          h='auto'>
          <NavLeft />
          <NavRight />
        </Container>
      </Flex>
    )
}

import React from 'react'
import { Flex, Container} from '@chakra-ui/react';
import { NavRight, NavLeft } from './components';


export function Header() {
    return (
        <Flex alignItems="center" as="header" bg="white" borderWidth="1px" borderBlockEnd="gray.400" h="80px">
        <Container alignItems="center" display="flex" justifyContent="space-between" mx="24px" maxW="100%" px={0} >
          <NavLeft />
          <NavRight />
        </Container>
      </Flex>
    )
}

import React from 'react'
import { Flex, Container} from '@chakra-ui/react';
import Nav from './Nav';
import NavRight from './NavRight';


export default function Header() {
    return (
        <Flex alignItems="center" as="header" bg="white" h="80px">
        <Container alignItems="center" display="flex" justifyContent="space-between" mx="24px" maxW="100%" px={0} >
          <Nav />
          <NavRight />
        </Container>
      </Flex>
    )
}

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Container,
  UnorderedList,
  ListItem,
  InputGroup,
  InputLeftElement,
  Input,
  PhoneIcon
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { SearchIcon } from './assets/icons/SearchIcon';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex alignItems="center" as="header" bg="white" h="80px">
        <Container alignItems="center" display="flex" justifyContent="space-between" mx="24px" maxW="100%" px={0} >
          <Flex alignItems="center">
            <Logo />
            <Flex as="nav">
            <UnorderedList display="flex" fontWeight={500} color="#6e6d7a" fontSize="0.875rem" styleType="none">
              <ListItem paddingInline="3">
                <Link textDecorationStyle="none">Inspiration</Link>
              </ListItem>
              <ListItem paddingInline="3">
                <Link textDecoration="none">Find Work</Link>
              </ListItem>
              <ListItem paddingInline="3">
                <Link textDecoration="none">Learn</Link></ListItem>
              <ListItem paddingInline="3">
                <Link textDecoration="none">Go Pro</Link></ListItem>
              <ListItem paddingInline="3">
                <Link textDecoration="none">Hire Designers</Link></ListItem>
            </UnorderedList>
            </Flex>
          </Flex>
          <Flex>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input maxW={120} type="search" placeholder="Search" />
            </InputGroup>

          </Flex>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

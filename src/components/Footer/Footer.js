import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { Info, Links } from './components';
import { FaDribbble } from 'react-icons/fa';

export function Footer() {
  return (
    <Box as="footer" bg="hsl(240deg, 11%, 98%, 1)">
      <Flex
        wrap="wrap"
        gridColumnGap={{ lg: '60px ' }}
        maxW="100%"
        m={0}
        px={{ base: '20px', md: '32px', lg: '72px' }}
        paddingBlock="40px"
      >
        <Info />
        <Links />
      </Flex>
      <Flex
        alignItems="center"
        borderBlockStart="1px solid"
        borderColor="gray.200"
        mx={{ base: '20px', md: '32px', lg: '72px' }}
        paddingBlock="44px"
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ lg: 'space-between' }}
        gridRowGap="20px"
        wrap="wrap"
      >
        <Text color="gray.500" fontSize="0.875rem">
          &copy; 2021 Dribbble. All rights reserved.
        </Text>
        <Flex alignItems="center">
          <Text as="span" fontWeight="bold">
            16,292,576&nbsp;
          </Text>
          <Text>shots dribbbled</Text>
          <Icon as={FaDribbble} color="pink.500" marginInlineStart="10px" />
        </Flex>
      </Flex>
    </Box>
  );
}

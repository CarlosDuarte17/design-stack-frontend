import React from 'react'
import {
    Link,
    Flex,
    UnorderedList,
    ListItem 
} 
from '@chakra-ui/react';

import { Logo } from '../../assets/icons/Logo';

export default function Nav() {
    return (
        <>
          <Flex alignItems="center">
            <Logo />
            <Flex as="nav">
            <UnorderedList display="flex" fontWeight={500} color="#6e6d7a" fontSize="0.875rem" styleType="none">
              <ListItem paddingInline="4">
                <Link 
                  fontWeight="semibold"
                  textDecorationStyle="none"
                  _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
                >
                  Inspiration
                </Link>
              </ListItem>
              <ListItem paddingInline="4">
                <Link 
                  fontWeight="semibold"
                  textDecorationStyle="none"
                  _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
                  >
                    Find Work
                </Link>
              </ListItem>
              <ListItem paddingInline="4">
                <Link 
                  fontWeight="semibold"
                  textDecorationStyle="none"
                  _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
                >
                  Learn Design
                </Link>
              </ListItem>
              <ListItem paddingInline="4">
                <Link 
                  fontWeight="semibold"
                  textDecorationStyle="none"
                  _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
                >
                  Go Pro
                </Link>
              </ListItem>
              <ListItem paddingInline="4">
                <Link 
                  fontWeight="semibold"
                  textDecorationStyle="none"
                  _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
                >
                  Hire Designers
                </Link>
              </ListItem>
            </UnorderedList>
            </Flex>
          </Flex>  
        </>
    )
}

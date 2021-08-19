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
        </>
    )
}

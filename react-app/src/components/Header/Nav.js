import React from 'react'
import {
    Flex,
    UnorderedList,
    Link
} 
from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom'

import { Logo } from '../../assets/icons/Logo';
import { NavLink } from './NavLink'

export default function Nav() {
    return (
        <>
          <Flex alignItems="center">
            <Link as={ReactLink} cursor="pointer" outline="none" to="/">
              <Logo />
            </Link>
            <Flex as="nav">
            <UnorderedList display="flex" fontWeight={500} color="#6e6d7a" fontSize="0.875rem" styleType="none">
              <NavLink>
                  Inspiration
              </NavLink>
              <NavLink>
                Find Work
              </NavLink>
              <NavLink>
                Learn Design
              </NavLink>
              <NavLink >
                  Go Pro
              </NavLink>
              <NavLink>
                  Hire Designers
              </NavLink>
            </UnorderedList>
            </Flex>
          </Flex>  
        </>
    )
}

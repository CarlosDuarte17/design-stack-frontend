import React from 'react'
import {
    Flex,
    InputGroup,
    InputLeftElement,
    Input  
} 
from '@chakra-ui/react';
import { SearchIcon } from '../../assets/icons/SearchIcon';


export default function NavRight() {
    return (
        <>
         <Flex>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input maxW={120} type="search" placeholder="Search" />
            </InputGroup>

          </Flex>   
        </>
    )
}

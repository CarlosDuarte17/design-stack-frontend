import React from 'react'
import {
    InputGroup,
    InputLeftElement,
    Input
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons'

export function InputBox({ placeholder = "" }) {
    return (
        <InputGroup w="100%">
            <InputLeftElement
            color="gray.400"
            pointerEvents="none"
            children={<SearchIcon />}
            />
            <Input
            bgColor="#f3f3f4"
            border='1px solid transparent'
            borderColor='transparent'
            borderRadius={8}
            flex="1"
            fontSize="0.875rem"
            type="search"
            paddingStart="44px"
            placeholder={placeholder}
            _focus={{ backgroundColor: 'white', boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)', borderColor: 'rgba(234,76,137,0.4)' }}
            _hover={{ backgroundColor: 'white', boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)' }} />
        </InputGroup>
    )
}

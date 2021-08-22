import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

function MenuToolBarItem ({ color = "gray.600", children }) {
    return (
        <MenuItem 
            as="a" 
            color={color}
            fontSize="0.875rem"
            paddingBlock="8px" 
            paddingInline="16px"
            >
            { children }
        </MenuItem>
    );
}

export function MenuLeft() {
    return (
        <Menu>
            <MenuButton 
                as={Button} 
                borderColor="gray.200" 
                color="gray.600" 
                colorScheme="white" 
                fontWeight="normal"
                fontSize="0.875rem"
                variant="outline" 
                rightIcon={<ChevronDownIcon />}>
                Following
            </MenuButton>
            <MenuList>
                <MenuToolBarItem color="pink.500">
                    Following
                </MenuToolBarItem>
                <MenuToolBarItem >
                    Popular
                </MenuToolBarItem>
                <MenuToolBarItem >
                    New & Noteworthy
                </MenuToolBarItem>
                <MenuToolBarItem >
                    Goods for Sale
                </MenuToolBarItem>
            </MenuList>
        </Menu>
    )
}

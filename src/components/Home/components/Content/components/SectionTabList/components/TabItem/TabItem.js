import React from 'react'
import { 
    Tab,
} from '@chakra-ui/react';

export function TabItem({ children }) {
    return (
        <Tab 
            borderRadius="8px" 
            fontSize="0.875rem"
            fontWeight="normal"
            paddingInline="12px" 
            paddingBlock="10px"
            _focus={{ outline: 'none !important', border: 'none' }} >
            { children }
        </Tab>
    );
}
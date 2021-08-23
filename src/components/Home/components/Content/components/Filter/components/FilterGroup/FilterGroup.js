import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react';


export function FilterGroup({ title, children }) {
    return (
        <Box flex={{ lg: "1" }}>
            <Text 
                fontSize="0.875rem"
                fontWeight="semibold"
                marginBlockEnd="8px"
                >{ title }
            </Text>
            { children }
        </Box>
    )
}

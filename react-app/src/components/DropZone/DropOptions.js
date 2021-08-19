import React from 'react'
import {
    Flex,
    Box,
    Button
} 
from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';

export function DropOptions() {
    return (
        <Box p="24px">
            <Flex justify="space-between">
            <Box>
                <Button as={ReactLink} fontWeight="normal" variant="outline" to="/">Cancel</Button>
            </Box>
            <Flex sx={{ gap: '20px '}}>
            <Button fontWeight="normal" disabled colorScheme="gray" variant="solid">
                Save as draft
            </Button>
            <Button fontWeight="normal"disabled colorScheme="pink" variant="solid">
                Button
            </Button>
            </Flex>
        </Flex>
        </Box>
    )
}

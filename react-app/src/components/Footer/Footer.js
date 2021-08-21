import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Info, Links } from './components'

export function Footer() {
    return (
        <Box 
            as='footer' 
            bg="gray.50">
            <Flex wrap="wrap" 
                gridColumnGap={{ lg: '60px '}} 
                maxW="100%" m={0} 
                px={{ base: '20px', md: '32px', lg: '72px'}}
                paddingBlock="40px">
                <Info />
                <Links />
            </Flex>
        </Box>
    )
}

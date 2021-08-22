import React from 'react'
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react';

export function Header() {

    return (
        <Box textAlign="center" paddingBlockStart="32px">
            <Heading
                as="h1"
                fontSize="2rem"
                m={0}
                marginBlockEnd="8px"
            >
                You aren’t following anyone yet
            </Heading>
            <Text
                fontSize="0.875rem"
                marginBlockEnd="48px"
                >
                <Text 
                    as="span" 
                    color="pink.500"
                >
                Find friends&nbsp; 
                </Text>
                you already know from Twitter.
            </Text>
            <Text
                fontWeight="bold"
            >
                Check out some of today’s popular shots
            </Text>
        </Box>     
    );
}

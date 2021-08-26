import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFolderPlus, FaHeart } from 'react-icons/fa'

export function Title() {
    return (
        <Flex 
            bgGradient="linear(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgb(0,0,0,0.0), rgb(0,0,0,0.0), rgb(0,0,0,0.0), rgba(0, 0, 0, 0))"
            alignItems="flex-end"
            inset="0"
            padding="20px"
            position="absolute"
            >
            <Flex
                alignItems="center"
                color="white"
                gridColumnGap="12px"
                justifyContent="space-between"
                w="100%">
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap" 
                    fontSize="1rem"
                    fontWeight="bold"
                    >
                    Work in progress nuew
                </Text>
                <Flex
                    gridColumnGap="12px"
                    color="gray.500">
                    <Button borderRadius="8px" px="0" h="34px" minW="34px">
                        <Icon as={FaFolderPlus} />
                    </Button>
                    <Button borderRadius="8px" px="0" h="34px" minW="34px">
                        <Icon as={FaHeart} />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

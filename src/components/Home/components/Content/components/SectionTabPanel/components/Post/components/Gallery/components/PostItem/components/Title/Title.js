import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFolderPlus, FaHeart } from 'react-icons/fa'

export function Title({ title, viewer_liked }) {
    return (
        <Flex 
            className="box"
            bgGradient="linear(to top, rgba(0, 0, 0, 0.8), rgb(0,0,0,0.0), rgba(0, 0, 0, 0))"
            alignItems="flex-end"
            inset="0"
            padding="20px"
            position="absolute"
            opacity="0"
            _hover={{ opacity: 1 }}
            pointerEvents="none"
            transition="opacity 300ms ease"
            >
            <Flex
                alignItems="center"
                color="white"
                gridColumnGap="12px"
                justifyContent="space-between"
                w="100%"
                pointerEvents="auto">
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap" 
                    fontSize="1rem"
                    fontWeight="bold"
                    >
                    { title }
                </Text>
                <Flex
                    gridColumnGap="12px"
                    color="gray.500"
                    >
                    <Button onClick={ () => 'hola' } borderRadius="8px" px="0" h="34px" minW="34px">
                        <Icon as={FaFolderPlus} />
                    </Button>
                    <Button borderRadius="8px" px="0" h="34px" minW="34px">
                        <Icon as={FaHeart} color={ viewer_liked ? "pink.500" : "gray.400" } />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

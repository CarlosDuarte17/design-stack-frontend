import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Flex,
    Box,
    ModalHeader,
    ModalBody,
    Text,
    Link,
} from '@chakra-ui/react';

import { format } from 'date-fns'

export function Tags({ post, isOpen, onClose}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent 
                borderRadius="12px"
                p={{ base: '24px', md: '48px' }} 
                maxWidth="100%" 
                width="490px">
            <ModalHeader p={0}
                fontSize="1.5rem"
                >
                Shot details
                </ModalHeader>
            <ModalCloseButton />
            <ModalBody 
                fontSize="0.875rem"
                p={0}>
                <Text
                    color="gray.600"
                    marginBlock="12px 24px">
                    Posted&nbsp;
                    <Text as="time" dateTime={ format(new Date(post?.created_at ?? new Date()), 'yyyy-MM-d') }>
                        { format( new Date(post?.created_at ?? new Date()), 'MMM d, yyyy') }
                    </Text>
                </Text>
                <Flex gridColumnGap="40px">
                    <Box>
                        <Text marginBlockEnd="8px">Views</Text>
                        <Text 
                            as="span"
                            fontSize="1.25rem">7266</Text>
                    </Box>
                    <Box>
                        <Text marginBlockEnd="8px">Saves</Text>
                        <Text 
                            as="span"
                            fontSize="1.25rem">3</Text>
                    </Box>
                    <Box>
                        <Text marginBlockEnd="8px">Likes</Text>
                        <Text 
                            as="span"
                            fontSize="1.25rem">78</Text>
                    </Box>
                    <Box>
                        <Text marginBlockEnd="8px">Comments</Text>
                        <Text 
                            as="span"
                            fontSize="1.25rem">6</Text>
                    </Box>
                </Flex>
                <Text marginBlock="24px 8px">Tags</Text>
                <Flex
                    gridColumnGap="8px"
            
                    wrap="wrap">
                    {
                        post?.data.tags.map(tag => (
                            <Link 
                                as={ReactLink} 
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="4px"
                                p="8px 12px"
                                fontSize="0.75rem"
                                fontWeight="normal"
                                bgColor="white"
                                key={tag.id}
                                _hover={{ bgColor: 'gray.100', textDecoration: 'none' }}
                                to={`/tags/${ tag.slug }`}>{ tag.tag }</Link>
                        ))
                    }
                </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
}

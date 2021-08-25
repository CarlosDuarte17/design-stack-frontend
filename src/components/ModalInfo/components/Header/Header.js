import React from 'react';
import { 
    Avatar, 
    Flex, 
    Heading, 
    HStack, 
    Link, 
    ModalHeader, 
    Text,
    Button
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

export function Header({ post }) {
    return (
        <ModalHeader 
            alignItems="center"
            display="flex"
            flexWrap="wrap"
            justifyContent={{ base: 'center', sm: 'space-between'}}
            p={0}>
            <Flex gridColumnGap="16px">
                <Avatar name={ post?.user.name }></Avatar>
                <Flex 
                    direction="column"
                    justifyContent="space-between">
                    <Heading 
                        as="h1"
                        fontSize="1rem">
                        { post?.title }
                    </Heading>
                    <Flex 
                        fontSize="0.875rem"
                        fontWeight="normal"
                        gridColumnGap="8px">
                        <Link>
                            { post?.user.name }
                        </Link>
                        <Text 
                            as="span"
                            color="gray">•</Text>
                        <Link
                            _hover={{ color: 'pink.500' }}>
                            Follow
                        </Link>
                        <Text 
                            as="span"
                            color="gray">•</Text>
                        <Link
                            color="pink.500"
                            _hover={{ color: 'pink.300' }}>
                            Here me
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <HStack
                gridColumnGap="8px">
                <Button
                    fontSize="0.875rem"
                    >
                    Save
                </Button>
                <Button 
                    fontSize="0.875rem"
                    leftIcon={<FaHeart />}>
                    Like
                </Button>
            </HStack>
        </ModalHeader>
                        
    )
}

import React from 'react'
import {
    Box,
    GridItem,
    Text,
    Image,
    WrapItem,
    Avatar,
    Flex,
    Badge,
} from '@chakra-ui/react';

import { HeartIcon } from '../../../../../../../../../../../../assets/icons/Icons';

export function PostItem({ post }) {
    return (
        <div>
            <GridItem>
                <Box overflow="hidden">
                    <Image 
                        borderRadius="8px"
                        h="206px" 
                        objectFit="cover"
                        w="100%"
                        data-src={post.imageFullPath}
                        src={`http://localhost:8000${ post.imageFullPath }`} />
                        {/* https://cdn.dribbble.com/users/6816261/screenshots/16280090/media/bad4f5034f7a13949240fe072967d37a.png?compress=1&resize=1200x900 */}
                </Box>
                <Flex 
                    alignItems="center"
                    fontSize="0.875rem"
                    justifyContent="space-between"
                    marginBlockStart="8px">
                    <Flex
                        alignItems="center"
                        sx={{ gap: '8px'}}>
                        <WrapItem>
                            <Avatar
                                h="24px"
                                name={post.user.name[0]} 
                                // src="https://bit.ly/dan-abramov"
                                w="24px" 
                                />
                        </WrapItem>
                        <Text 
                            as="span"
                            fontWeight="600">
                            {post.user.name}
                        </Text>
                        <Badge
                            fontSize="0.625rem"
                            bgColor="gray.300"
                            color="white"
                            cursor="pointer"
                            _hover={{ bgColor: 'pink.500' }}>
                            PRO
                        </Badge>
                    </Flex>
                    <Flex 
                        alignItems="center"
                        fontSize="0.75rem"
                        sx={{ gap: '6px'}}>
                        <HeartIcon 
                            color="gray.400" 
                            cursor="pointer"
                            _hover={{ color: 'pink.500' }} />
                        <Text
                            as="span">
                            69
                        </Text>
                        <HeartIcon color="gray.400" />
                        <Text
                            as="span">
                            4.8k
                        </Text>
                    </Flex>
                </Flex>
            </GridItem>
        </div>
    )
}

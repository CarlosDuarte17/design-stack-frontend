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
    Icon,
    useDisclosure,
    AspectRatio
} from '@chakra-ui/react';

import { AiFillEye } from 'react-icons/ai';
import { HeartIcon } from '../../../../../../../../../../../../assets/icons/Icons';
import { Info } from './components';

export function PostItem({ post }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <GridItem>
                <Box overflow="hidden" borderRadius="8px">
                {
                    post.media.data[0].type === 'image' ?
                    <Image onClick={ onOpen }
                        borderRadius="8px"
                        h="206px" 
                        objectFit="cover"
                        w="100%"
                        src={post.media.data[0].mediaFullPath}
                        /> :               
                    <AspectRatio 
                        borderRadius="8px"
                        h="206px" 
                        objectFit="cover"
                        w="100%"
                        onClick={ onOpen }     
                        >
                            <video
                                src={post.media.data[0].mediaFullPath}
                                onMouseOver={(e) => e.target.play()}  
                                onMouseOut={(e) => e.target.pause()}
                                loop  
                                muted              
                            ></video>
                    </AspectRatio>
                }
                    
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
                                w="24px" 
                                />
                        </WrapItem>
                        <Text 
                            as="span"
                            fontWeight="600"
                            overflow="hidden"
                            sx={{ display: '-webkit-box', 'WebkitLineClamp': '1', 'WebkitBoxOrient': 'vertical'}}>
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
                        <Icon as={AiFillEye} color="gray.400" h="16px" w="16px" />
                        <Text
                            as="span">
                            4.8k
                        </Text>
                    </Flex>
                </Flex>
            </GridItem>
            <Info isOpen={isOpen} onClose={onClose} post={post} />
    </div>
    )
}

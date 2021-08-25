import { 
    Avatar,
    Badge,
    Flex, 
    Icon, 
    Text, 
    WrapItem 
} from '@chakra-ui/react'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

export function User({ post }) {
    return (
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
                <Icon 
                    as={FaHeart}
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
            
    )
}

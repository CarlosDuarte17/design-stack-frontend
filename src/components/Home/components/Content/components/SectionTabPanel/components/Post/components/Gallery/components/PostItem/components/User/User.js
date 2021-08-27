import React from 'react';
import { Avatar, Badge, Flex, Text, WrapItem, Button } from '@chakra-ui/react';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function User({ post, handleLikePost }) {
  return (
    <Flex
      alignItems="center"
      fontSize="0.875rem"
      justifyContent="space-between"
      marginBlockStart="8px"
    >
      <Flex maxW="60%" alignItems="center" sx={{ gap: '2px' }}>
        <WrapItem>
          <Avatar h="24px" name={post.user.name[0]} w="24px" />
        </WrapItem>
        <Text
          as="span"
          fontWeight="600"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          title={post.user.name}
        >
          {post.user.name}
        </Text>
        <Badge
          fontSize="0.625rem"
          bgColor="gray.300"
          color="white"
          cursor="pointer"
          _hover={{ bgColor: 'pink.500' }}
        >
          PRO
        </Badge>
      </Flex>
      <Flex
        alignItems="center"
        fontSize="0.75rem"
        sx={{ gap: '8px' }}
        w="max-content"
      >
        <Button
          bgColor="inherit"
          color={post.viewer_liked ? 'pink.500' : 'gray.400'}
          h="16px"
          minWidth="16px"
          w="16px"
          p={0}
          _hover={{ bgColor: 'none', color: 'pink.500' }}
          _focus={{ border: 'none ' }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            cursor="pointer"
            onClick={handleLikePost}
          />
        </Button>
        <Text as="span">{post.likes}</Text>
        <Button
          bgColor="inherit"
          color="gray.400"
          h="16px"
          minWidth="16px"
          w="16px"
          p={0}
          _hover={{ bgColor: 'none' }}
          cursor="default"
        >
          <FontAwesomeIcon icon={faEye} h="16px" w="16px" />
        </Button>
        <Text as="span">4.8k</Text>
      </Flex>
    </Flex>
  );
}

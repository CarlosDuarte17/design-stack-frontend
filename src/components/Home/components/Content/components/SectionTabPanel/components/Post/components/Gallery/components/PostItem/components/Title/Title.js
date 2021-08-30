import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

export function Title({ title, viewer_liked, handleLikePost }) {
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
        pointerEvents="auto"
      >
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          fontSize="1rem"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Flex gridColumnGap="12px" color="gray.500">
          <Button
            onClick={() => 'hola'}
            borderRadius="8px"
            px="0"
            h="34px"
            minW="34px"
          >
            <FontAwesomeIcon icon={faFolderPlus} />
          </Button>
          <Button
            onClick={handleLikePost}
            borderRadius="8px"
            px="0"
            h="34px"
            minW="34px"
            color={viewer_liked ? 'pink.500' : 'gray.400'}
            _hover={{ bgColor: 'none', color: 'pink.500' }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

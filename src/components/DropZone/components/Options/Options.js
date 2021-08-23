import React, { useRef } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Button,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { TagModal } from './components';
import { useCallback } from 'react';

export function Options({ isSelectedImage, image, formData: data, inputTitleRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const toastIdRef = useRef();

  const handleShowModal = useCallback(() => {
      if (inputTitleRef.current.value.trim() === '') {
        
          toastIdRef.current = toast({
            title: `please write a title`,
            status: 'info',
            position: 'top-right',
            isClosable: true,
          })
        
        return;
      }
      onOpen();
    },
    [inputTitleRef, onOpen, toastIdRef, toast])

  return (
    <Box pos="sticky" insetBlockStart={0} p="24px">
      <Flex justify="space-between">
        <Box>
          <Button as={ReactLink} fontWeight="normal" variant="outline" to="/">
            Cancel
          </Button>
        </Box>
        <Flex sx={{ gap: '20px ' }}>
          <Button
            fontWeight="normal"
            disabled={!isSelectedImage}
            colorScheme="gray"
            variant="solid"
          >
            Save as draft
          </Button>
          <Button
            fontWeight="normal"
            disabled={!isSelectedImage}
            colorScheme="pink"
            variant="solid"
            onClick={handleShowModal}
          >
            Continue
          </Button>
          <TagModal
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            image={image}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

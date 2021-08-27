import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Flex, Box, Button, useDisclosure } from '@chakra-ui/react';

import { TagModal } from './components';
import { useCallback } from 'react';
import { useCustomToast } from '../../../../hooks/useCustomToast';

export function Options({
  isSelectedImage,
  files,
  formData: data,
  inputTitleRef,
  inputDescriptionRef,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showToast } = useCustomToast();

  const handleShowModal = useCallback(() => {
    if (inputTitleRef.current.value.trim() === '') {
      showToast({
        title: `please write a title`,
        status: 'info',
        position: 'top-right',
        isClosable: true,
      });

      return;
    }
    onOpen();
  }, [inputTitleRef, showToast, onOpen]);

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
            files={files}
            inputTitleRef={inputTitleRef}
            inputDescriptionRef={inputDescriptionRef}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

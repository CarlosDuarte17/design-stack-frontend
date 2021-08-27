import React, { useCallback, useContext } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Flex, Box, Button, useDisclosure } from '@chakra-ui/react';

import { useCustomToast } from '../../../../hooks/useCustomToast';
import { UploadContext } from '../../contexts/UploadContext/UploadContext';

import { TagModal } from './components';
export function Options() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showToast } = useCustomToast();
  const {
    isSelectedImage,
    files,
    inputTitleRef,
    inputDescriptionRef,
  } = useContext(UploadContext)

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
            files={files}
            inputTitleRef={inputTitleRef}
            inputDescriptionRef={inputDescriptionRef}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

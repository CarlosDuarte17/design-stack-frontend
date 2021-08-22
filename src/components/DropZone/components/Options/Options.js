import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { TagModal } from './components';

export function Options({ isSelectedImage, image, formData: data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            onClick={onOpen}
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

import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import {
    Flex,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    FormControl,
    ModalBody,
    ModalContent,
    Input,
    ModalFooter,
    Text,
    Spinner,
} from '@chakra-ui/react';

import { fetchPost } from '../../../../../../providers/post';

export function TagModal({ onClose, isOpen, data, image }) {
    const inputTagRef = useRef();
    const navigate = useNavigate();
  
    const { isLoading, mutate } = useMutation(fetchPost, {
      onSuccess: () => {
        navigate('/');
      }
    });
  
    const handleUploadData = useCallback(
      e => {
        if (inputTagRef.current.value === '') {
          return;
        }
  
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('file', image.imageFile, 'image');
        formData.append('tags', inputTagRef.current.value);
  
        mutate(formData);
        return 'error';
      },
      [data, image, mutate]
    );
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={12} maxW="660px" p="48px" my="30px">
          <ModalHeader fontSize="1.5rem" p={0}>
            Final touches
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={0} py={6}>
            <Text>
              <Text as="span" fontWeight="bold">
                Tags&bnsp;
              </Text>
              (maximun 10)
            </Text>
            <FormControl marginBlockStart={2}>
              <Input
                bgColor="#f3f3f4"
                border="1px solid transparent"
                borderColor="transparent"
                borderRadius={8}
                fontSize="1rem"
                type="text"
                placeholder="Search"
                _focus={{
                  backgroundColor: 'white',
                  boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)',
                  borderColor: 'rgba(234,76,137,0.4)',
                }}
                _hover={{
                  backgroundColor: 'white',
                  boxShadow: '0 0 0 4px rgb(234 76 137 / 10%)',
                }}
                ref={inputTagRef}
              />
            </FormControl>
          </ModalBody>
          {isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          <ModalFooter px={0} justifyContent="flex-start">
            <Flex w="100%" justify="space-between">
              <Box>
                <Button fontWeight="normal" variant="outline" onClick={onClose}>
                  Close
                </Button>
              </Box>
              <Flex sx={{ gap: '20px ' }}>
                <Button fontWeight="normal" colorScheme="gray" variant="solid">
                  Save as draft
                </Button>
                <Button
                  fontWeight="normal"
                  colorScheme="pink"
                  variant="solid"
                  onClick={handleUploadData}
                >
                  Publish now
                </Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
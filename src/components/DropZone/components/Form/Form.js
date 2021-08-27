import React, { useContext } from 'react';
import { Textarea, Image, Box, AspectRatio, Flex } from '@chakra-ui/react';

import { UploadContext } from '../../contexts/UploadContext/UploadContext';
import { Media } from '../../../Media';

export function Form() {
  const { files, inputTitleRef, inputDescriptionRef } =
    useContext(UploadContext);
  return (
    <Box cursor="pointer" maxW="768px" mx="auto" marginBlockStart="32px">
      <Textarea
        border="none"
        fontSize="1.5rem"
        fontWeight={700}
        marginBlockEnd="32px"
        minH="50px"
        placeholder="Give me a name"
        resize="none"
        _focus={{ border: 'none' }}
        ref={inputTitleRef}
      />
      <Box h={576} cursor="default">
        <Media
          type={files.files[0].type.includes('video') ? 'video' : 'image'}
          media={files.filesUrl[0]}
        />
      </Box>
      <Flex
        gridColumnGap="10px"
        justifyContent="center"
        marginBlockStart="10px"
        wrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        {files.files.length > 1
          ? files.files.slice(1).map((file, i) => {
              return file.type === 'video/mp4' ? (
                <AspectRatio
                  borderColor="gray.500"
                  borderRadius="12px"
                  h="100px"
                  w="100px"
                  key={i}
                  cursor="default"
                  overflow="hidden"
                >
                  <video src={files.filesUrl[i + 1]} loop muted></video>
                </AspectRatio>
              ) : (
                <Image
                  border="1px dashed"
                  borderColor="gray.500"
                  borderRadius="12px"
                  cursor="default"
                  h="100px"
                  w="100px"
                  objectFit="cover"
                  src={files.filesUrl[i + 1]}
                  key={i}
                />
              );
            })
          : ''}
      </Flex>
      <Textarea
        border="none"
        fontSize="1.25rem"
        marginBlock="48px"
        minH="50px"
        placeholder="Write what went into this shot, and anything else you’d like to mention"
        resize="none"
        _focus={{ border: 'none' }}
        ref={inputDescriptionRef}
        // onChange={handleWritingDescription}
      />
    </Box>
  );
}

import React, { useState, useRef } from 'react';

import { Options, Upload, Form as PostForm } from './components';
import { Box, Heading, Text } from '@chakra-ui/react';
import { UploadContext } from './contexts/UploadContext/UploadContext';

export function DropZone() {
  const [isSelectedImage, setIsSelectedImage] = useState(false);
  const inputTitleRef = useRef();
  const inputDescriptionRef = useRef();

  const [files, setFiles] = useState({
    files: [],
    filesUrl: [],
  });

  return (
    <UploadContext.Provider
      value={{
        inputTitleRef,
        inputDescriptionRef,
        isSelectedImage,
        files,
        setFiles,
        setIsSelectedImage
      }}
    >
      <Options />
      <Box maxW="1024px" textAlign="center" mx="auto">
        {!isSelectedImage && (
          <>
            <Heading as="h6" marginBlockEnd="16px">
              What are you working on?
            </Heading>
            <Text paddingBlockStart="8px" color="gray.600">
              Upload your design. This will also be used as the thumbnail in
              feeds.
            </Text>
          </>
        )}
        {isSelectedImage ? (
          <PostForm />
        ) : (
          <Upload />
        )}
      </Box>
    </UploadContext.Provider>
  );
}

import React, { useMemo, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import imagePlaceHolder from '../../../../assets/images/image-placeholder.png';
import { Flex, Image, Text } from '@chakra-ui/react';

import { baseStyle, activeStyle, acceptStyle, rejectStyle } from './config';
import { useCustomToast } from '../../../../hooks/useCustomToast';
import { UploadContext } from '../../contexts/UploadContext/UploadContext';

export function Upload() {
  const { setFiles, setIsSelectedImage } = useContext(UploadContext);
  const { showToast } = useCustomToast();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*, video/mp4',
    maxFiles: 5,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const handleLoadImage = useCallback(
    e => {
      if (e.target.files.length > 5) {
        showToast({
          title: `please select a valid number of filest`,
          status: 'info',
          position: 'top-right',
          isClosable: true,
        });
        return;
      }
      let urls = [],
        files = [];
      for (const file of e.target.files) {
        const url = URL.createObjectURL(file);
        urls.push(url);
        files.push(file);
      }
      console.log(urls);
      setFiles({ files, filesUrl: urls });
      setIsSelectedImage(true);
    },
    [setIsSelectedImage, setFiles, showToast]
  );

  return (
    <>
      <Flex
        cursor="pointer"
        borderRadius="10px"
        {...getRootProps({ style })}
        maxW="768px"
        mx="auto"
        marginBlock="32px"
        _hover={{ borderColor: 'blue !important' }}
      >
        <input {...getInputProps()} onChange={handleLoadImage} />
        <Image
          src={imagePlaceHolder}
          marginBlockStart="80px"
          height="86px"
          width="80px"
        />
        <Text color="black" marginBlockStart="20px" marginBlockEnd="10px">
          Drag and drop image or videos, max 5 files, or{' '}
          <Text as="span" color="pink.500">
            Browse
          </Text>
        </Text>
        <Text color="gray.600">
          1600x1200 or higher recommended. Max 10MB each (20MB for videos)
        </Text>
      </Flex>
    </>
  );
}

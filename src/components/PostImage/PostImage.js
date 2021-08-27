import { AspectRatio, Image } from '@chakra-ui/react';
import React from 'react';

export function PostImage({ file }) {
  return (
    <>
      {file.type === 'video/mp4' ? (
        <AspectRatio
          border="1px dashed"
          borderColor="gray.500"
          borderRadius="12px"
          h="100px"
          w="100px"
        >
          <video title="file" src={file.preview} allowFullScreen></video>
        </AspectRatio>
      ) : (
        <Image
          border="1px dashed"
          borderColor="gray.500"
          borderRadius="12px"
          h="100px"
          w="100px"
          objectFit="cover"
          data-src={file.preview}
          src={file.preview}
        />
      )}
    </>
  );
}

import { AspectRatio, Image } from '@chakra-ui/react';
import React from 'react';

export function Media(props) {
  return props.type === 'video' ? (
    <AspectRatio w="100%" h="100%" objectFit="cover" ratio={1}>
      <video src={props.media} loop preload="true" muted autoPlay></video>
    </AspectRatio>
  ) : (
    <Image
      borderRadius="8px"
      h="100%"
      objectFit="cover"
      w="100%"
      src={props.media}
    />
  );
}

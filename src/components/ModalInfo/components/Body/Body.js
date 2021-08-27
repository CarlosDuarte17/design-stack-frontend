import {
  AspectRatio,
  Box,
  Flex,
  Image,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Media } from '../../../Media';

export function Body({ post }) {
  const [currentMedia, setCurrentMedia] = useState({
    media: post?.media.data[0].FullPath,
    type: post?.media.data[0].type,
  });

  useEffect(() => {
    setCurrentMedia({
      media: post?.media.data[0].FullPath,
      type: post?.media.data[0].type,
    });
  }, [post]);

  function handleChangeMedia(media) {
    setCurrentMedia(media);
  }
  return (
    <ModalBody p={0}>
      <Box marginBlockStart="40px" h={576} overflow="hidden">
        <Media type={currentMedia.type} media={currentMedia.media} />
      </Box>
      {post?.media.data.length > 1 && (
        <Flex
          overflow="hidden"
          gridColumnGap="14px"
          justifyContent="center"
          marginBlockStart="46px"
          wrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          {post?.media.data.map((media, i) => {
            return media.type === 'video' ? (
              <AspectRatio
                border="2px solid transparent"
                borderRadius="12px"
                cursor="pointer"
                h="60px"
                objectFit="cover"
                w="76px"
                overflow="hidden"
                borderColor={media.FullPath === currentMedia.media && '#ea4c89'}
                _hover={{ borderColor: 'pink.500' }}
                key={post.id + '' + i}
              >
                <video
                  src={media.FullPath}
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => e.target.pause()}
                  onClick={() =>
                    handleChangeMedia({
                      media: media.FullPath,
                      type: media.type,
                    })
                  }
                  loop
                  muted
                ></video>
              </AspectRatio>
            ) : (
              <Image
                border="2px solid transparent"
                borderRadius="12px"
                h="60px"
                w="76px"
                cursor="pointer"
                objectFit="cover"
                data-src={media.FullPath}
                src={media.FullPath}
                key={post.id + '' + i}
                borderColor={media.FullPath === currentMedia.media && '#ea4c89'}
                onClick={() =>
                  handleChangeMedia({
                    media: media.FullPath,
                    type: media.type,
                  })
                }
                _hover={{ borderColor: 'pink.500' }}
              />
            );
          })}
        </Flex>
      )}
      <Box fontSize="1.25rem" color="gray.800" marginBlockStart="60px">
        <Text>{post?.description}</Text>
      </Box>
    </ModalBody>
  );
}

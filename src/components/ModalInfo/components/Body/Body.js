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
        {currentMedia.type === 'video' ? (
          <AspectRatio w="100%" h="100%" ratio={1}>
            <video
              src={currentMedia.media}
              loop
              preload="true"
              muted
              autoPlay
            ></video>
          </AspectRatio>
        ) : (
          <Image
            borderRadius="8px"
            h="100%"
            objectFit="cover"
            w="100%"
            data-src={currentMedia.media}
            src={currentMedia.media}
          />
        )}
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
                borderColor={
                  media.FullPath === currentMedia.media ? '#ea4c89' : ''
                }
                _hover={{ borderColor: 'pink.500' }}
              >
                <video
                  src={media.mediaFullPath}
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
                  key={post.id + '' + i}
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
                borderColor={
                  media.FullPath === currentMedia.media && '#ea4c89'
                }
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

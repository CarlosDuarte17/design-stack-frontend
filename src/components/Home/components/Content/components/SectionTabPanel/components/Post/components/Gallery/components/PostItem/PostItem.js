import React, { useRef } from 'react';
import { Box, GridItem, Image, AspectRatio, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import { Title, User } from './components';

export function PostItem({ post }) {
  const videoRef = useRef();
  return (
    <div>
      <GridItem>
        <Box
          onMouseOver={() => videoRef.current && videoRef.current.play()}
          onMouseOut={() => videoRef.current && videoRef.current.pause()}
          h="206px"
          position="relative"
          overflow="hidden"
          borderRadius="8px"
        >
          <Link
            className="ts"
            position="absolute"
            inset="0"
            as={ReactLink}
            to={`/shots/${post.id}`}
          >
            {post.media.data[0].type === 'image' ? (
              <Image
                borderRadius="8px"
                h="206px"
                objectFit="cover"
                w="100%"
                src={post.media.data[0].FullPath}
              />
            ) : (
              <AspectRatio
                borderRadius="8px"
                h="206px"
                objectFit="cover"
                w="100%"
              >
                <video
                  src={post.media.data[0].FullPath}
                  loop
                  muted
                  ref={videoRef}
                ></video>
              </AspectRatio>
            )}
          </Link>
          <Title title={post.title} viewer_liked={post.viewer_liked} />
        </Box>
        <User post={post} />
      </GridItem>
    </div>
  );
}

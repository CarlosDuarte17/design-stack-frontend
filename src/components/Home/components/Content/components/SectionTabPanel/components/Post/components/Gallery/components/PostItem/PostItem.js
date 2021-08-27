import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { Link as ReactLink } from 'react-router-dom';

import { Box, GridItem, Image, AspectRatio, Link } from '@chakra-ui/react';

import { Title, User } from './components';
import { setlikePost } from '../../../../../../../../../../../../providers/API';

export function PostItem({ post }) {
  const videoRef = useRef();

  const { mutate } = useMutation(['likePost', post.id], setlikePost, {
    onSuccess: postUpdated => {
      post.viewer_liked = postUpdated.data.viewer_liked;
      post.likes = postUpdated.data.likes;
    },
  });

  function handleLikePost() {
    mutate(post.id);
  }

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
          <Title
            handleLikePost={handleLikePost}
            title={post.title}
            viewer_liked={post.viewer_liked}
          />
        </Box>
        <User handleLikePost={handleLikePost} post={post} />
      </GridItem>
    </div>
  );
}

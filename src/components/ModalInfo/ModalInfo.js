import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex,
  Box,
  Avatar,
  useDisclosure,
} from '@chakra-ui/react';

import {
  faComment,
  faFolderPlus,
  faHeart,
  faInfoCircle,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

import { PostButton, Header, Body, Tags } from './components';
import { getPost, setlikePost } from '../../providers/API';

export function ModalInfo() {
  const { shot } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const {
    isOpen: isOpenTag,
    onOpen: onOpenTag,
    onClose: onCloseTag,
  } = useDisclosure();
  const Navigate = useNavigate();

  const { data: post, isLoading } = useQuery(['post', shot], () =>
    getPost(shot)
  );

  const { mutate } = useMutation(['likePost', post?.id], setlikePost, {
    onSuccess: postUpdated => {
      post.data.viewer_liked = postUpdated.data.viewer_liked;
      post.data.likes = postUpdated.data.likes;
    },
  });

  function handleLikePost() {
    mutate(post?.data.id);
  }

  if (isLoading) {
    <h2>Loading....</h2>;
  }

  return (
    <div>
      <Modal
        onClose={() => {
          Navigate(-1);
          setIsOpen(false);
        }}
        size="full"
        isOpen={isOpen}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent position={{ md: 'relative' }} marginBlockStart="40px">
          <Flex
            justifyContent="center"
            px={{ base: '20px', lg: '120px' }}
            paddingBlock={{ base: '20px', lg: '64px' }}
          >
            <Box w="768px">
              <Header post={post?.data} />
              <ModalCloseButton />
              <Flex
                gridGap="12px"
                justifyContent={{ base: 'flex-end' }}
                position={{ lg: 'fixed' }}
                direction={{ lg: 'column' }}
                insetBlockStart={{ lg: '102px' }}
                insetInlineEnd={{ lg: '50px' }}
                marginBlockStart={{ base: '10px', lg: '0' }}
                h="max-content"
              >
                <Avatar
                  name={post?.data.user.name[0]}
                  display={{ base: 'none', lg: 'flex' }}
                  h="40px"
                  w="40px"
                ></Avatar>
                <PostButton label="Feedback" icon={faComment} />
                <PostButton label="Share" icon={faShare} />
                <PostButton
                  label="Shot details"
                  icon={faInfoCircle}
                  onClick={onOpenTag}
                />
                <PostButton label="Save" icon={faFolderPlus} />
                <PostButton
                  label="Like"
                  icon={faHeart}
                  onClick={handleLikePost}
                  viewer_liked={post?.data.viewer_liked}
                />
              </Flex>
              <Body post={post?.data} />
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
      <Tags isOpen={isOpenTag} onClose={onCloseTag} post={post} />
    </div>
  );
}

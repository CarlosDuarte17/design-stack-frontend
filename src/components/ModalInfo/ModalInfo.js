import React, { useState } from 'react';
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

import { PostButton, Header, Body, Tags } from './components';

import {
  FaComment,
  FaFolderPlus,
  FaHeart,
  FaInfoCircle,
  FaShare,
} from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getPost } from '../../providers/API';

export function ModalInfo() {
  const { shot } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const {
    isOpen: isOpenTag,
    onOpen: onOpenTag,
    onClose: onCloseTag,
  } = useDisclosure();
  const Navigate = useNavigate();

  const { data: post, isLoading } = useQuery(['shot', shot], () =>
    getPost(shot)
  );

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
                <PostButton label="Feedback" icon={FaComment} />
                <PostButton label="Share" icon={FaShare} />
                <PostButton
                  label="Shot details"
                  icon={FaInfoCircle}
                  onOpenTag={onOpenTag}
                />
                <PostButton label="Save" icon={FaFolderPlus} />
                <PostButton label="Like" icon={FaHeart} />
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

import React, { useEffect } from 'react';
import { Link as ReactLink,  useParams } from 'react-router-dom';

import {    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Flex,
    Box,
    Avatar,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Text,
    Link,
} from '@chakra-ui/react';
import { format } from 'date-fns'

import { PostButton, Header } from './components'

import { FaComment, FaFolderPlus, FaHeart, FaInfoCircle, FaShare } from 'react-icons/fa';
import { Body } from './components/Body';
import { useQuery } from 'react-query';
import { getPost } from '../../providers/API';


export function ModalInfo() {
    const { shot } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenTag, onOpen: onOpenTag, onClose: onCloseTag } = useDisclosure();

    const { data: post, isLoading } = useQuery(['shot', shot], () => getPost( shot ));

    useEffect(() => {
        onOpen();
    }, [onOpen])

    if (isLoading) {
        <h2>Loagin....</h2>
    }

    return (
        <div>
        <Modal onClose={onClose} size="full" isOpen={isOpen} scrollBehavior="outside">
            <ModalOverlay />
            <ModalContent position={{ md: 'relative' }} marginBlockStart="40px">
                <Flex 
                    justifyContent="center"
                    px={{ base: '20px', lg: '120px'}} 
                    paddingBlock={{ base: '20px', lg: '64px'}}>
                    <Box w="768px">
                        <Header post={post?.data} />
                        <ModalCloseButton />
                        <Flex 
                            gridGap="12px"
                            justifyContent={{ base: 'flex-end'}}
                            position={{ lg: 'fixed'}}
                            direction={{ lg: 'column' }}
                            insetBlockStart={{ lg: '102px' }}
                            insetInlineEnd={{ lg: '50px' }}
                            marginBlockStart={{ base: '10px', lg: '0' }}
                            h="max-content">
                            <Avatar 
                                name={post?.data.user.name[0]}
                                display={{ base: 'none', lg: 'flex' }}
                                h="40px"
                                w="40px"></Avatar>
                            <PostButton icon={FaComment} />
                            <PostButton icon={FaShare} />
                            <PostButton icon={FaInfoCircle} onOpenTag={onOpenTag} />
                            <PostButton icon={FaFolderPlus} />
                            <PostButton icon={FaHeart} />
                        </Flex>
                        <Body post={post?.data} />
                    </Box>
                </Flex>
            </ModalContent>
        </Modal>
        <Modal isOpen={isOpenTag} onClose={onCloseTag} isCentered>
        <ModalOverlay />
        <ModalContent 
            borderRadius="12px"
            p={{ base: '24px', md: '48px' }} 
            maxWidth="100%" 
            width="490px">
          <ModalHeader p={0}
            fontSize="1.5rem"
            >
            Shot details
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
            fontSize="0.875rem"
            p={0}>
            <Text
                color="gray.600"
                marginBlock="12px 24px">
                Posted&nbsp;
                
            </Text>
            <Flex gridColumnGap="40px">
                <Box>
                    <Text marginBlockEnd="8px">Views</Text>
                    <Text 
                        as="span"
                        fontSize="1.25rem">7266</Text>
                </Box>
                <Box>
                    <Text marginBlockEnd="8px">Saves</Text>
                    <Text 
                        as="span"
                        fontSize="1.25rem">3</Text>
                </Box>
                <Box>
                    <Text marginBlockEnd="8px">Likes</Text>
                    <Text 
                        as="span"
                        fontSize="1.25rem">78</Text>
                </Box>
                <Box>
                    <Text marginBlockEnd="8px">Comments</Text>
                    <Text 
                        as="span"
                        fontSize="1.25rem">6</Text>
                </Box>
            </Flex>
            <Text marginBlock="24px 8px">Tags</Text>
            <Flex
                gridColumnGap="8px"
        
                wrap="wrap">
                {
                    post?.data.tags.map(tag => (
                         <Link 
                            as={ReactLink} 
                            border="1px solid"
                            borderColor="gray.300"
                            borderRadius="4px"
                            p="8px 12px"
                            fontSize="0.75rem"
                            fontWeight="normal"
                            bgColor="white"
                            key={tag.id}
                            _hover={{ bgColor: 'gray.100', textDecoration: 'none' }}
                            to={`/tags/${ tag.slug }`}>{ tag.tag }</Link>
                    ))
                }
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      </div>
    )
}

import React from 'react'
import {
    Box,
    GridItem,
    Image,
    AspectRatio,
    Link
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import { Title, User } from './components';

export function PostItem({ post }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <GridItem>
                <Box position="relative" overflow="hidden" borderRadius="8px">
                <Link as={ReactLink} to={`/shots/${ post.id }`}>
                {
                    post.media.data[0].type === 'image' ?
                    <Image
                        borderRadius="8px"
                        h="206px" 
                        objectFit="cover"
                        w="100%"
                        src={post.media.data[0].mediaFullPath}
                        /> :               
                    <AspectRatio 
                        borderRadius="8px"
                        h="206px" 
                        objectFit="cover"
                        w="100%"   
                        >
                            <video
                                src={post.media.data[0].mediaFullPath}
                                onMouseOver={(e) => e.target.play()}  
                                onMouseOut={(e) => e.target.pause()}
                                loop  
                                muted              
                            ></video>
                    </AspectRatio>
                }
                </Link>
                <Title />
                </Box>
                <User post={post} />
                </GridItem>
                {/* <Info isOpen={isOpen} onClose={onClose} post={post} /> */}
    </div>
    )
}

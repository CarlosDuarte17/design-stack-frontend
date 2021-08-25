import React from 'react'
import {
    Box,
    GridItem,
    Image,
    useDisclosure,
    AspectRatio
} from '@chakra-ui/react';

import { Info, User } from './components';

export function PostItem({ post }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <GridItem>
                <Box overflow="hidden" borderRadius="8px">
                {
                    post.media.data[0].type === 'image' ?
                    <Image onClick={ onOpen }
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
                        onClick={ onOpen }     
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
                <User post={post} />
                </Box>
                </GridItem>
            <Info isOpen={isOpen} onClose={onClose} post={post} />
    </div>
    )
}

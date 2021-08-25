import { 
    AspectRatio,
    Box,
    Flex,
    Image,
    ModalBody, 
    Text
} from '@chakra-ui/react'
import React, { useState } from 'react'

export function Body({ post }) {

    const [currentMedia, setCurrentMedia] = useState({
        media: post.media.data[0].mediaFullPath,
        type: post.media.data[0].type,
    });

    function handleChangeMedia( media ) {
        setCurrentMedia(media);
    }
    return (
        <ModalBody p={0}>
            <Box
                marginBlockStart="40px"
                h={576}
                overflow="hidden"
                >
                {
                    currentMedia.type === 'video' ?
                    <AspectRatio w="100%" h="100%" ratio={1}>
                        <video
                            src={currentMedia.media}
                            onMouseOver={(e) => e.target.play()}  
                            onMouseOut={(e) => e.target.pause()}
                            loop  
                            muted              
                        ></video>
                    </AspectRatio> :
                    <Image 
                        borderRadius="8px"
                        h="100%"
                        objectFit="cover"
                        w="100%" 
                        src={currentMedia.media}
                    />
                }
            </Box>
            {
                post.media.data.length > 1 &&
            <Flex 
                overflow="hidden"
                gridColumnGap="14px" 
                justifyContent="center" 
                marginBlockStart="46px"
                wrap={{ base: 'wrap', lg: 'nowrap' }}>
                { 
                    post.media.data.map((media, i) => {
                        return media.type === 'video' ?
                        (<AspectRatio 
                            border="1px solid transparent"
                            borderRadius="12px"
                            h="58px" 
                            objectFit="cover"
                            w="76px"
                            overflow="hidden"
                            >
                            <video
                                src={media.mediaFullPath}
                                onMouseOver={(e) => e.target.play()}  
                                onMouseOut={(e) => e.target.pause()}
                                onClick={() => handleChangeMedia({ media: media.mediaFullPath, type: media.type })}
                                loop  
                                muted  
                                key={post.id + '' + i}
                            ></video>
                        </AspectRatio>) :
                        (<Image 
                            border="1px solid transparent"
                            borderRadius="12px"
                            h="58px" 
                            w="76px"
                            objectFit="cover"
                            src={media.mediaFullPath}
                            key={post.id + '' + i}
                            onClick={() => handleChangeMedia({ media: media.mediaFullPath, type: media.type })}
                            />)
                    })
                }
                {/* <Image 
                    border="1px solid transparent"
                    borderRadius="12px"
                    h="58px" 
                    w="76px"
                    objectFit="cover"
                    src="https://i.picsum.photos/id/818/536/354.jpg?hmac=9b5A8R6fKbs0srgPo_LmKDOY67GM1hHi9dAeiqMCTEc"                                                          
                    /> */}
            </Flex>
            }
            <Box
                fontSize="1.25rem"
                color="gray.800"
                marginBlockStart="60px"
                >
                <Text>
                    { post.description }
                </Text>
            </Box>
        </ModalBody>            
    )
}

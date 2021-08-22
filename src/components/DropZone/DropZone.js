import React, { useState } from 'react';

import { Options, Upload, Form as PostForm } from './components';
import { Box, Heading, Text } from '@chakra-ui/react';

export function DropZone() {
    
    const [isSelectedImage, setIsSelectedImage] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: ''
    });

    const [image, setImage] = useState({
        imageFile: null,
        imageUrl: null,
    });
    
    return (
        <div>
            <Options isSelectedImage={isSelectedImage} image={image} formData={formData} />
            <Box maxW="1024px" textAlign="center" mx="auto">
                { !isSelectedImage && 
                    <>
                        <Heading as="h6" marginBlockEnd="16px">What are you working on?</Heading>
                        <Text paddingBlockStart="8px" color="gray.600">Upload your design. This will also be used as the thumbnail in feeds.</Text>
                    </>
                }
                { 
                    isSelectedImage ? 
                    <PostForm image={image} setFormData={setFormData} /> :
                    <Upload setImage={setImage} setIsSelectedImage={setIsSelectedImage} />                    
                }
            </Box>
        </div>
    )
}

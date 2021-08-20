import React, { useMemo, useCallback } from 'react'
import {useDropzone} from 'react-dropzone';
import imagePlaceHolder from '../../../../assets/images/image-placeholder.png';
import {
    Flex,
    Image,
    Text,
} 
from '@chakra-ui/react';

import { 
    baseStyle, 
    activeStyle, 
    acceptStyle, 
    rejectStyle 
} from './config'

export function Upload({ setImage, setIsSelectedImage }) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: 'image/*'});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const handleLoadImage = useCallback((e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImage((prev) => ({imageFile: e.target.files[0], imageUrl: url}));
        setIsSelectedImage(true);
    }, [setIsSelectedImage, setImage]);

    return (
        <>
            <Flex 
                cursor="pointer"
                borderRadius="10px" 
                { ...getRootProps({ style }) } 
                maxW="768px" mx="auto" 
                marginBlockStart="32px"
                _hover={{ borderColor: 'blue !important' }}>
            <input {...getInputProps()}onChange={ handleLoadImage } />
                <Image src={imagePlaceHolder} marginBlockStart="80px" height="86px" width="80px" />
                <Text color="black" marginBlockStart="20px" marginBlockEnd="10px">
                    Drag and drop an image, or <Text as="span" color="pink.500">Browse</Text>
                </Text>
                <Text color="gray.600">
                    1600x1200 or higher recommended. Max 10MB each (20MB for videos)
                </Text>
            </Flex>
        </>
    );
}
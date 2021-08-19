import React, { useMemo } from 'react'
import {useDropzone} from 'react-dropzone';
import imagePlaceHolder from '../../assets/images/image-placeholder.png';
import {
    Flex,
    Link,
    Image,
    Text,
    Heading,
    Box
} 
from '@chakra-ui/react';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


export function DropZoneFile(params) {
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
        
    return (
        <Box maxW="1024px" textAlign="center" mx="auto">
            <Heading as="h6" marginBlockEnd="16px">What are you working on?</Heading>
            <Text paddingBlockStart="8px" color="gray.600">Upload your design. This will also be used as the thumbnail in feeds.</Text>
            <Flex 
                cursor="pointer"
                borderRadius="10px" 
                { ...getRootProps({ style }) } 
                maxW="768px" mx="auto" 
                marginBlockStart="32px"
                _hover={{ borderColor: 'blue !important' }}>
            <input {...getInputProps()} />
                <Image src={imagePlaceHolder} marginBlockStart="80px" height="86px" width="80px" />
                <Text color="black" marginBlockStart="20px" marginBlockEnd="10px">
                    Drag and drop an image, or <Text display="inline" color="pink.500">Browse</Text>
                </Text>
                <Text color="gray.600">
                    1600x1200 or higher recommended. Max 10MB each (20MB for videos)
                </Text>
            </Flex>
        </Box>
    );
}
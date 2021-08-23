import React, { useCallback } from 'react'
import { Textarea, Image, Box } from '@chakra-ui/react'

export function Form({ image, setFormData, inputTitleRef }) {
    
    const handleWritingInput = useCallback((e) => {
        setFormData((prev) => ({...prev, title: e.target.value}));
    }, [setFormData]);


    const handleWritingDescription = useCallback((e) => {
        setFormData((prev) => ({...prev, description: e.target.value}));
    }, [setFormData]);


    return (
        
        <Box 
            cursor="pointer"
            maxW="768px" mx="auto" 
            marginBlockStart="32px">
            <Textarea 
                border="none"
                fontSize="1.5rem"
                fontWeight={700}
                marginBlockEnd="32px"
                minH="50px"
                placeholder="Give me a name" 
                resize="none"
                _focus={{ border: 'none' }}
                // value={title}
                // ref={inputTitleRef}
                onChange={handleWritingInput}
                ref={inputTitleRef}
                />
            <Box h={576}>
                <Image 
                    h="100%"
                    objectFit="cover"
                    src={image.imageUrl}
                    w="100%" />
            </Box>
            <Textarea 
                border="none"
                fontSize="1.25rem"
                marginBlock="48px"
                minH="50px"
                placeholder="Write what went into this shot, and anything else you’d like to mention" 
                resize="none"
                _focus={{ border: 'none' }}
                onChange={handleWritingDescription}
                />
        </Box>
    )
}

import React from 'react'
import { 
    Textarea, 
    Image, 
    Box, 
    AspectRatio, 
    Flex 
} from '@chakra-ui/react'

export function Form({ files, inputTitleRef, inputDescriptionRef }) {
    
    // const handleWritingInput = useCallback((e) => {
    //     setFormData((prev) => ({...prev, title: e.target.value}));
    // }, [setFormData]);


    // const handleWritingDescription = useCallback((e) => {
    //     setFormData((prev) => ({...prev, description: e.target.value}));
    // }, [setFormData]);


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
                // onChange={handleWritingInput}
                ref={inputTitleRef}
                />
            <Box h={576}>
            {
                files.files[0].type === 'video/mp4' ?
                <AspectRatio w="100%" h="100%" ratio={1}>
                    <iframe
                        title="file"
                        src={files.filesUrl[0]}
                        allowFullScreen
                    />
                </AspectRatio> :
                <Image 
                    h="100%"
                    objectFit="cover"
                    src={files.filesUrl[0]}
                    w="100%" />
            }
            </Box>
            <Flex 
                gridColumnGap="10px" 
                justifyContent="center" 
                marginBlockStart="10px" 
                wrap={{ base: 'wrap', lg: 'nowrap' }}>
                { 
                    files.files.length > 1 ?
                    files.files.slice(1).map((file, i) => {
                        return file.type === 'video/mp4' ?
                        (<AspectRatio 
                        border="1px dashed"
                        borderColor="gray.500" 
                        borderRadius="12px"
                        h="100px" 
                        w="100px"
                        key={i}>
                            <iframe
                                title="file"
                                src={files.filesUrl[i+1]}
                                allowFullScreen                                
                            />
                    </AspectRatio>) :
                        (<Image 
                            border="1px dashed"
                            borderColor="gray.500" 
                            borderRadius="12px"
                            h="100px" 
                            w="100px"
                            objectFit="cover"
                            src={files.filesUrl[i+1]}
                            key={i}                                
                            />)
                    }) : ''
                }
            </Flex>
            <Textarea 
                border="none"
                fontSize="1.25rem"
                marginBlock="48px"
                minH="50px"
                placeholder="Write what went into this shot, and anything else you’d like to mention" 
                resize="none"
                _focus={{ border: 'none' }}
                ref={inputDescriptionRef}
                // onChange={handleWritingDescription}
                />
        </Box>
    )
}

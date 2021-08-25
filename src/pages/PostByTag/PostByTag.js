import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Gallery } from '../../components/Home/components/Content/components/SectionTabPanel/components/Post/components';

export function PostByTag() {
    let { tag } = useParams();
    const [totalShots, setTotalShots] = useState();
    return (
        <div>
            
            <Container maxW="100%" m={0} paddingBlock="104px" paddingInline="72px">
                <Flex
                    alignItems="center"
                    direction="column"
                    wrap="wrap">
                    <Heading 
                        fontSize="2rem"
                        marginBlock="10px">
                        { tag }
                    </Heading>
                    <Text
                        color="gray.600">
                        {totalShots} inspirational designs, illustrations, and graphic elements from the world’s best designers.
                    </Text>
                </Flex>
                <Gallery tag={tag} setTotalShots={setTotalShots} />
            </Container>
        </div>
    )
}

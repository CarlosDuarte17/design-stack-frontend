import React, { useContext } from 'react'
import {
    Spinner,
    GridItem
} from '@chakra-ui/react';

import { AppContext } from '../../../../../AppContext';
import { PostItem } from './PostItem';

export function Post() {

    const { data, isLoading } = useContext(AppContext);
    
    if (isLoading) {
        return (
            <GridItem display="flex" colSpan={4} justifyContent="center" w="100%">
                <Spinner 
                    size="xl" 
                    emptyColor="gray.200" 
                    color="pink.500"
                    thickness="4px"
                    />
            </GridItem>
        )
    }

    return (
        <>
        {
            data.data.map((post) => (
                <PostItem key={post.id} post={post}/>
            )) 
        }
        </>
    );
}

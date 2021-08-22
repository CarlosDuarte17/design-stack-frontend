import React, { useContext } from 'react'
import {
    Spinner,
    Button,
    Grid,
    Flex,
    Alert,
    AlertIcon
} from '@chakra-ui/react';

import { AppContext } from '../../../../../../../../../../AppContext';
import { PostItem } from './components/PostItem/PostItem';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../../../../../../../../../../providers/post';

export function Gallery() {
    const [page, setPage] = useState(1);
    const [state, setState] = useState({
        posts: [],
        current_page: 0
    });

    const { data, isLoading, isFetching } = useQuery(['posts', page], () => getPosts(page), {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: (data) => {
            // prevent array from repeating data
            if (state.page !== page) {
                setState((prev) => ({page, posts: [...prev.posts, ...data.data]}));    
            }
        }
    });
    
    if (data?.data.length === 0) {
        return (
            <Alert marginBlockStart="20px" status="info">
                <AlertIcon />
                No post actually!
            </Alert>
        )
    }

    return (
        <>
        <Grid
            marginBlockStart="36px"
            grid-auto-rows="max-content"
            templateColumns="repeat(auto-fill, minmax(274px, 1fr))"
            gap="36px"
            >
            {
                state.posts.map((post) => (
            <PostItem key={post.id} post={post}/>
        ))
            }
        </Grid>
        {
            (isLoading || isFetching) &&
            <Flex marginBlockStart="36px" display="flex" justifyContent="center">
                <Spinner 
                    size="xl" 
                    emptyColor="gray.200" 
                    color="pink.500"
                    thickness="4px"
                    />
            </Flex>
        }
        {
        <Flex justifyContent="flex-end">
            <Button size="sm" colorScheme="pink"
                onClick={() => {
                if (data?.meta.to < data?.meta.total) {
                    setPage(old => old + 1)
                }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={data?.meta.to === data?.meta.total}
                >
                Load More
            </Button>
        </Flex>
        }
        </>
    )
}

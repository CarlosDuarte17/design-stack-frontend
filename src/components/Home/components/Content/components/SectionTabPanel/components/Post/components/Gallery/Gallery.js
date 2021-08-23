import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
    Spinner,
    Button,
    Grid,
    Flex,
    Alert,
    AlertIcon,
    Badge
} from '@chakra-ui/react';

import { PostItem } from './components/PostItem/PostItem';
import { getPosts } from '../../../../../../../../../../providers/API';

export function Gallery() {

    const [page, setPage] = useState(1);
    const [state, setState] = useState({
        posts: [],
        current_page: 0
    });

    const { data, isRefetchError, isLoading, isFetching } = useQuery(['posts', page], () => getPosts(page), {
        // refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: (data) => {
            if (data.message) {
                return;
            }
            // prevent array from repeating data
            if (state.page !== page) {
                setState((prev) => ({page, posts: [...prev.posts, ...data.data]}));    
            }
        },
        onerror: (error) =>{
            console.log(error)
        }
    });

    if (isRefetchError || (data && data.message)) {
        return (
            <Alert marginBlockStart="20px" status="error">
                <AlertIcon />
                The server respond message: 
                { data.message }
            </Alert>
        )
    }

    
    if (data?.data.length === 0) {
        return (
            <Alert marginBlockStart="20px" status="info">
                <AlertIcon />
                there are currently no posts
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
        data?.meta.to !== data?.meta.total ?
            (
                <Flex
                justifyContent="flex-end"
                marginBlockStart="20px">
                <Button size="sm" colorScheme="pink"
                    onClick={() => {
                    if (data?.meta.to < data?.meta.total) {
                        setPage(old => old + 1)
                    }
                    }}
                    // prevent disable the Load More button until we know a next posts is available
                    disabled={data?.meta.to === data?.meta.total}
                    >
                    Load More
                </Button>
                </Flex>
            ) :
            (
                <Flex justifyContent="flex-end">
                    <Badge 
                        marginBlockStart="20px"
                        colorScheme="whatsapp"
                        fontSize="0.875rem"
                        p={2}
                        size="xl"
                        > Total posts: {data?.meta.total}
                        </Badge>
                </Flex>
            )
        }
        </>
    )
}

import React, { useContext } from 'react'
import {
    Spinner,
    GridItem,
    Text,
    Button,
    Grid,
    Flex
} from '@chakra-ui/react';

import { AppContext } from '../../../../../AppContext';
import { PostItem } from './PostItem';

export function Post() {

    const { data, isLoading, isPreviousData, setPage, page, isFetching } = useContext(AppContext);
    
    if (isLoading || isFetching) {
        return (
            <Flex marginBlockStart="36px" display="flex" justifyContent="center">
                <Spinner 
                    size="xl" 
                    emptyColor="gray.200" 
                    color="pink.500"
                    thickness="4px"
                    />
            </Flex>
        )
    }

    // if (data.data.length < 1){
    //     <GridItem display="flex" colSpan={4} justifyContent="center" w="100%">
    //         <Text>
    //             No post actually
    //         </Text>
    //     </GridItem>
    // }

    return (
        <>
        <Grid
            marginBlockStart="36px"
            grid-auto-rows="max-content"
            templateColumns="repeat(auto-fill, minmax(274px, 1fr))"
            gap="36px"
            >
        {
            data.data.map((post) => (
                <PostItem key={post.id} post={post}/>
            ))
        }
        </Grid>
        <Flex marginBlockStart="20px" alignItems="center" gridColumnGap="20px" display="flex" justifyContent="center">
                <Text>Current Page: {page}</Text>
                <Button
                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    Previous Page
                </Button>
                <Button
                    onClick={() => {
                    if (!isPreviousData && data.meta.to < data.meta.total) {
                        setPage(old => old + 1)
                    }
                    }}
                    // Disable the Next Page button until we know a next page is available
                    disabled={isPreviousData || data.meta.to === data.meta.total}
                >
                    Next Page
                </Button>
        </Flex>
        </>
    );
}

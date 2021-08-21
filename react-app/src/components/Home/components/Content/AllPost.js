import React from 'react'
import {
    Grid,
} from '@chakra-ui/react'

import { Header } from './components/Header'
import { Post } from './components/Post'


export function AllPost() {
    return (
        <>
            <Header />
            <Grid
                marginBlockStart="36px"
                grid-auto-rows="max-content"
                templateColumns="repeat(auto-fill, minmax(274px, 1fr))"
                gap="36px"
            >
                <Post />
            </Grid>
        </>
    )
}

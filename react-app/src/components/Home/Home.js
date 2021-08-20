import { Container } from '@chakra-ui/react'
import React from 'react'
import { ToolBar } from './components/ToolBar/ToolBar'

export function Home() {
    return (
        <Container maxW="100%" m={0} paddingBlock="32px" paddingInline="72px">
            <ToolBar />
        </Container>
    )
}

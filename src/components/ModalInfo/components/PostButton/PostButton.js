import { Icon } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react';

export function PostButton({ icon, onOpenTag }) {
    return (
        <>
            <Button
                bgColor="white"
                border="1px solid"
                borderColor="gray.200"
                px="12px"
                onClick={onOpenTag}
                >
                <Icon as={icon} />
            </Button>
        </>
    )
}
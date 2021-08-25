import { Icon, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react';

export function PostButton({ icon, label, onOpenTag }) {
    return (
        <Tooltip hasArrow mx="10px" p="10px" size="lg" label={label} placement="left">
            <Button
                bgColor="white"
                border="1px solid"
                borderColor="gray.200"
                px="12px"
                onClick={onOpenTag}
                >
                <Icon as={icon} />
            </Button>
        </Tooltip>
    )
}

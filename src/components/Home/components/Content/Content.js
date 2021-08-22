import React from 'react'
import { 
    Flex, 
    Button, 
    Box,
    useDisclosure,
    Tabs
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { MenuLeft } from './components/MenuLeft'
import { SectionTabList } from './components/SectionTabList'
import { Filter } from './components/Filter'
import { SectionTabPanel } from './components/SectionTabPanel'

export function Content() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Tabs 
            variant="soft-rounded" 
            colorScheme="gray"
            >
            <Flex justifyContent="space-between">
                <MenuLeft />
                <SectionTabList isOpen={isOpen} />
                <Button 
                    borderColor="gray.200" 
                    color="gray.600" 
                    colorScheme="white" 
                    fontWeight="normal"
                    fontSize="0.875rem"
                    variant="outline" 
                    leftIcon={<HamburgerIcon />}
                    onClick={onToggle}
                    >Filters
                </Button>
            </Flex>
            <Box>
                <Filter isOpen={isOpen} />
            </Box>
            <Box>
                <SectionTabPanel />
            </Box>
        </Tabs>
    )
}

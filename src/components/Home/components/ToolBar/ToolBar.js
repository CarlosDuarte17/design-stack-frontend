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
import { SectionTabList } from './components/Tab'
import { Filter } from './components/Filter'
import { SectionTabPanels } from './components/Tab/SectionTabPanels'

export function ToolBar() {
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
                <SectionTabPanels />
            </Box>
        </Tabs>
    )
}

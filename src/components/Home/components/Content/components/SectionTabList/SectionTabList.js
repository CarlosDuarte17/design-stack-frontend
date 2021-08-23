import React from 'react'
import { 
    Tab,
    TabList, 
} from '@chakra-ui/react';

function TabItem({ children }) {
    return (
        <Tab 
            borderRadius="8px" 
            fontSize="0.875rem"
            fontWeight="normal"
            paddingInline="12px" 
            paddingBlock="10px"
            _focus={{ outline: 'none !important', border: 'none' }} >
            { children }
        </Tab>
    );
}

export function SectionTabList() {
    return (
        <>
        <TabList marginBlock={{ base: '20px', lg: '0' }} overflowX={{ base: 'scroll', md: 'auto'}}>
            <TabItem>
                All
            </TabItem>
            <TabItem>
                Animation
            </TabItem>
            <TabItem>
                Branding
            </TabItem>
            <TabItem>
                Illustration
            </TabItem>
            <TabItem>
                Mobile
            </TabItem>
            <TabItem>
                Print
            </TabItem>
            <TabItem>
                Product Design
            </TabItem>
            <TabItem>
                Typography
            </TabItem>
            <TabItem>
                Web Design
            </TabItem>
        </TabList>
        </>
    )
}

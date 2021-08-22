import React from 'react'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import { Post } from './components'

export function SectionTabPanel() {
    return (
        <TabPanels>
            <TabPanel p={0}>
                <Post />
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
            <TabPanel>
                we are building... nothing to show right now
            </TabPanel>
        </TabPanels>
    )
}

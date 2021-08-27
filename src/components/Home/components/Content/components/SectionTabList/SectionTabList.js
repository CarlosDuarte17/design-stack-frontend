import React from 'react';
import { TabList } from '@chakra-ui/react';
import { TabItem } from './components';

export function SectionTabList() {
  return (
    <>
      <TabList
        marginBlock={{ base: '20px', lg: '0' }}
        overflowX={{ base: 'scroll', md: 'auto' }}
      >
        <TabItem>All</TabItem>
        <TabItem>Animation</TabItem>
        <TabItem>Branding</TabItem>
        <TabItem>Illustration</TabItem>
        <TabItem>Mobile</TabItem>
        <TabItem>Print</TabItem>
        <TabItem>Product Design</TabItem>
        <TabItem>Typography</TabItem>
        <TabItem>Web Design</TabItem>
      </TabList>
    </>
  );
}

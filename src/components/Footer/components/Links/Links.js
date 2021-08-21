import { Flex } from '@chakra-ui/react'
import React from 'react'
import { LinkGroup, LinkItem } from './components'

export function Links() {
    return (
        <Flex w="100%" justifyContent={{ md: 'space-between' }} gridRowGap="20px" wrap="wrap" flex={{ lg: '1 ' }}   >
            <LinkGroup>
                <LinkItem fontWeight="bold">
                    For designers
                </LinkItem>
                <LinkItem>
                    Go Pro!
                </LinkItem>
                <LinkItem>
                    Explore design work
                </LinkItem>
                <LinkItem>
                    Design blog
                </LinkItem>
                <LinkItem>
                    Overtime podcast
                </LinkItem>
                <LinkItem>
                    Dribbble meetups
                </LinkItem>
                <LinkItem>
                    Playoffs
                </LinkItem>
                <LinkItem>
                    Weekly Warm-Up
                </LinkItem>
                <LinkItem>
                    Code of conduct
                </LinkItem>
            </LinkGroup>

            <LinkGroup>
                <LinkItem fontWeight="bold">
                    Hire designers
                </LinkItem>
                <LinkItem>
                    Post a job opening
                </LinkItem>
                <LinkItem>
                    Post a freelance project
                </LinkItem>
                <LinkItem>
                    Search for designers
                </LinkItem>
                <LinkItem>
                    Brands
                </LinkItem>
                <LinkItem>
                    Dribbble meetups
                </LinkItem>
                <LinkItem>
                    Playoffs
                </LinkItem>
                <LinkItem>
                    Advertise with us
                </LinkItem>
            </LinkGroup>
            <LinkGroup>
                <LinkItem fontWeight="bold">
                    Company
                </LinkItem>
                <LinkItem>
                    About
                </LinkItem>
                <LinkItem>
                    Careers
                </LinkItem>
                <LinkItem>
                    Support
                </LinkItem>
                <LinkItem>
                    Media kit
                </LinkItem>
                <LinkItem>
                    Testimonials
                </LinkItem>
                <LinkItem>
                    Playoffs
                </LinkItem>
                <LinkItem>
                    API
                </LinkItem>
                <LinkItem>
                    Terms of service
                </LinkItem>
                <LinkItem>
                    Privacy Policy
                </LinkItem>
            </LinkGroup>

            <LinkGroup>
                <LinkItem fontWeight="bold">
                    Directories
                </LinkItem>
                <LinkItem>
                    Design jobs
                </LinkItem>
                <LinkItem>
                    Designers for hirek
                </LinkItem>
                <LinkItem>
                    Freelance designers for hire
                </LinkItem>
                <LinkItem>
                    Tags
                </LinkItem>
                <LinkItem>
                    Places
                </LinkItem>
                <LinkItem fontWeight="bold">
                    Design assets
                </LinkItem>
                <LinkItem>
                    Shop Creative Marketp
                </LinkItem>
            </LinkGroup>
        </Flex>
    )
}

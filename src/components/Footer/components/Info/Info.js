import { Box, HStack, Icon, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { DribbleIcon } from '../../../../assets/icons/Icons'
import { 
    AiOutlineTwitter, 
    AiFillFacebook ,
    AiFillInstagram,
} from 'react-icons/ai';

import { FaPinterest, FaDribbble } from 'react-icons/fa'

export function Info() {
    return (
        <Box
            w={{ base: '100%', lg: 'auto' }}
            >
            <DribbleIcon 
                color="pink.500"
                h="26px"
                w="124px" />
            <Text maxW="260px" fontSize="0.875rem" marginBlock="20px">
            Dribbble is the world’s leading community for creatives to share, grow, and get hired.
            </Text>
            <HStack gridColumnGap="14px">
                <Link>
                    <Icon as={FaDribbble} h="18px"w="18px"/>
                </Link>
                <Link>
                    <Icon as={AiOutlineTwitter} h="18px"w="18px"/>
                </Link>
                <Link>
                    <Icon as={AiFillFacebook} h="18px"w="18px"/>
                </Link>
                <Link>
                    <Icon as={AiFillInstagram} h="18px"w="18px"/>
                </Link>
                <Link>
                    <Icon as={FaPinterest} h="18px"w="18px"/>
                </Link>
            </HStack>
        </Box>
    )
}

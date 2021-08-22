import React from 'react'
import { Avatar } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getUser } from '../../../../../../providers/user';

export function UserImage() {
    const { data: user} = useQuery('user', getUser, {
        suspense: true,
        refetchOnWindowFocus: false
    });
    
    return <Avatar bgColor="blue.500" h="32px" name={ user.name.substring(0, 1) } src="https://bit.ly/tioluwani-kolawole" width="32px" /> 
}

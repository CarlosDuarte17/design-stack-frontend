import React from 'react'
import { Avatar } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getUser } from '../../../../../../providers/API';

export function UserImage() {
    const { data: user, isError} = useQuery('user', getUser, {
        suspense: true,
        refetchOnWindowFocus: false
    });


    if(user.message || isError) {
        return <Avatar bgColor="blue.500" h="32px" name="A" src="https://bit.ly/tioluwani-kolawole" width="32px" /> 
    }
    
    return <Avatar bgColor="blue.500" h="32px" name={ user.name[0] } src="https://bit.ly/tioluwani-kolawole" width="32px" /> 
}

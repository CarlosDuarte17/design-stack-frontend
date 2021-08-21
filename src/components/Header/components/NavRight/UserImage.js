import React from 'react'
import { Avatar } from '@chakra-ui/react';
import { useQuery } from 'react-query'
import { getUser } from '../../../../providers/user'

// const resource = fetchData();

export function UserImage() {
    const { data: user} = useQuery('user', getUser, {
        suspense: true
    });

    console.log(user)
    // const user = resource.user.read();

    return <Avatar bgColor="blue.500" h="32px" name={ user.name.substring(0, 1) } src="https://bit.ly/tioluwani-kolawole" width="32px" /> 
}

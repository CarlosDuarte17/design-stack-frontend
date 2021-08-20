import React from 'react'
import { ListItem, Link } from '@chakra-ui/react'

export function NavLink({ children }) {
    return (
        <ListItem paddingInline="4">
            <Link
                fontWeight="semibold"
                textDecorationStyle="none"
                _hover={{ color: 'pink.500', textDecorationLine: 'none' }}
            >
                { children }
            </Link>
        </ListItem>
    )
}

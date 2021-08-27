import { Link, ListItem } from '@chakra-ui/react';
import React from 'react';

export function LinkItem({ fontWeight = 'normal', children }) {
  return (
    <>
      <ListItem fontSize="0.875rem" marginBlockStart="16px">
        <Link fontWeight={fontWeight}>{children}</Link>
      </ListItem>
    </>
  );
}

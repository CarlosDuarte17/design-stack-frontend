import React from 'react';
import { MenuItem } from '@chakra-ui/react';

export function MenuFilterItem({ icon, color = 'gray.600', children }) {
  return (
    <MenuItem
      as="a"
      color={color}
      fontSize="0.875rem"
      paddingBlock="8px"
      paddingInline="16px"
      icon={icon}
    >
      {children}
    </MenuItem>
  );
}

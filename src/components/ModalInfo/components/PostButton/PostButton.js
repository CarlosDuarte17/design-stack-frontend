import { Tooltip } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PostButton({ icon, label, onClick, viewer_liked }) {
  return (
    <Tooltip
      hasArrow
      mx="10px"
      p="10px"
      size="lg"
      label={label}
      placement="left"
    >
      <Button
        bgColor="white"
        color={viewer_liked && 'pink.500'}
        border="1px solid"
        borderColor="gray.200"
        px="12px"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
    </Tooltip>
  );
}
